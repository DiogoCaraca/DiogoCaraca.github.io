const escapeHtml = (text: string) =>
  text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Minimal Markdown for short frontmatter texts: paragraphs and **bold** only. */
export function inlineMarkdown(source: string): string {
  return source
    .trim()
    .split(/\n\s*\n/)
    .map((paragraph) => `<p>${escapeHtml(paragraph.trim()).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')}</p>`)
    .join('\n');
}
