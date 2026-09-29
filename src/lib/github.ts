import fs from 'node:fs/promises';
import cache from '../data/github-cache.json';

export const GITHUB_USER = 'DiogoCaraca';
export const SITE_REPO = `${GITHUB_USER}.github.io`;

// Always shown when they exist and are public, even if they fail the filter.
const ALWAYS_INCLUDE = ['ffhs-skills', SITE_REPO].map((name) => name.toLowerCase());
const MAX_ITEMS = 6;
const MIN_ITEMS = 2;

export interface Repo {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  pushed_at: string;
  fork: boolean;
  archived: boolean;
}

const CACHE_URL = new URL('../data/github-cache.json', import.meta.url);

async function fetchRepos(): Promise<Repo[]> {
  const headers: Record<string, string> = { Accept: 'application/vnd.github+json' };
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&type=owner`, {
      headers,
    });
    if (!res.ok) throw new Error(`GitHub API responded ${res.status}`);
    const repos = (await res.json()) as Repo[];
    const slim = repos.map(({ name, html_url, description, language, stargazers_count, pushed_at, fork, archived }) => ({
      name, html_url, description, language, stargazers_count, pushed_at, fork, archived,
    }));
    // Keep the cache fresh for offline and failed builds. A read-only file system is fine.
    await fs.writeFile(CACHE_URL, JSON.stringify(slim, null, 2) + '\n').catch(() => {});
    return slim;
  } catch (error) {
    console.warn(`[github] Using cached repos: ${(error as Error).message}`);
    return cache as Repo[];
  }
}

let repoPromise: Promise<Repo[]> | undefined;

/** Repos for the "On GitHub" section, or an empty list when fewer than 2 qualify. */
export async function getFeedRepos(): Promise<Repo[]> {
  repoPromise ??= fetchRepos();
  const repos = await repoPromise;

  const shown = repos
    .filter((repo) => !repo.fork && !repo.archived)
    .filter((repo) => repo.description?.trim() || ALWAYS_INCLUDE.includes(repo.name.toLowerCase()))
    .sort((a, b) => b.pushed_at.localeCompare(a.pushed_at))
    .slice(0, MAX_ITEMS);

  return shown.length >= MIN_ITEMS ? shown : [];
}
