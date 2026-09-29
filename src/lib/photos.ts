import type { ImageMetadata } from 'astro';

// Photos Diogo drops into /content/photos are picked up by file name, e.g. "headshot.jpg".
// Every component must work when a photo is missing.
const files = import.meta.glob<ImageMetadata>('/content/photos/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG}', {
  eager: true,
  import: 'default',
});

export function getPhoto(name: string): ImageMetadata | undefined {
  const match = Object.entries(files).find(([path]) => {
    const base = path.split('/').pop()?.replace(/\.[^.]+$/, '').toLowerCase();
    return base === name.toLowerCase();
  });
  return match?.[1];
}

const projectFiles = import.meta.glob<ImageMetadata>(
  '/content/projects-media/**/*.{jpg,jpeg,png,webp,avif}',
  { eager: true, import: 'default' },
);

export function getProjectImage(relativePath: string): ImageMetadata | undefined {
  return projectFiles[`/content/projects-media/${relativePath}`];
}
