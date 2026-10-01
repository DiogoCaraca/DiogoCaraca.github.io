// Generates public/og.png (1200×630 link preview) and public/apple-touch-icon.png.
// Run with `npm run og` after changing the name, role line, or headshot.
import fs from 'node:fs/promises';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import sharp from 'sharp';

const font = (path) => fs.readFile(new URL(`../node_modules/${path}`, import.meta.url));
const fonts = [
  { name: 'Chakra Petch', data: await font('@fontsource/chakra-petch/files/chakra-petch-latin-600-normal.woff'), weight: 600 },
  { name: 'Inter', data: await font('@fontsource/inter/files/inter-latin-400-normal.woff'), weight: 400 },
  { name: 'Inter', data: await font('@fontsource/inter/files/inter-latin-600-normal.woff'), weight: 600 },
  { name: 'JetBrains Mono', data: await font('@fontsource/jetbrains-mono/files/jetbrains-mono-latin-400-normal.woff'), weight: 400 },
];

const h = (type, style, children) => ({ type, props: { style, children } });

// Optional headshot, picked up by file name like the site does. Square-cropped to 240px.
const photoDir = new URL('../content/photos/', import.meta.url);
const headshotFile = (await fs.readdir(photoDir)).find((f) => /^headshot\.(jpe?g|png|webp)$/i.test(f));
const headshot = headshotFile
  ? `data:image/png;base64,${(await sharp(new URL(headshotFile, photoDir).pathname).resize(240, 240, { fit: 'cover' }).png().toBuffer()).toString('base64')}`
  : undefined;

async function render(tree, width, height, out) {
  const svg = await satori(tree, { width, height, fonts });
  const png = new Resvg(svg, { fitTo: { mode: 'width', value: width } }).render().asPng();
  await fs.writeFile(new URL(`../public/${out}`, import.meta.url), png);
  console.log(`wrote public/${out}`);
}

const og = h(
  'div',
  {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '72px 80px',
    backgroundColor: '#0e1016',
    backgroundImage:
      'radial-gradient(circle at 85% 30%, rgba(0,229,255,0.16), transparent 45%), radial-gradient(circle at 5% 100%, rgba(255,46,151,0.12), transparent 45%)',
    color: '#e6e8f0',
    fontFamily: 'Inter',
  },
  [
    h('div', { display: 'flex', alignItems: 'center', gap: 32 }, [
      ...(headshot
        ? [{ type: 'img', props: { src: headshot, width: 120, height: 120, style: { border: '1px solid #2a2f3f' } } }]
        : []),
      h('div', { display: 'flex', fontFamily: 'JetBrains Mono', fontSize: 26, color: '#858ca1' }, '// hello, world'),
    ]),
    h('div', { display: 'flex', flexDirection: 'column' }, [
      h('div', { display: 'flex', fontFamily: 'Chakra Petch', fontWeight: 600, fontSize: 104, lineHeight: 1.05 }, 'Diogo Caraça'),
      h('div', { display: 'flex', fontWeight: 600, fontSize: 44, marginTop: 20 }, 'Full-Stack Engineer · Laravel & Vue'),
      h('div', { display: 'flex', fontSize: 32, marginTop: 16, color: '#a3a9bc' }, 'From the first requirements meeting to production.'),
    ]),
    h('div', { display: 'flex', justifyContent: 'space-between', fontFamily: 'JetBrains Mono', fontSize: 26 }, [
      h('div', { display: 'flex' }, [h('span', {}, 'dc'), h('span', { color: '#00e5ff' }, '_')]),
      h('div', { display: 'flex', color: '#858ca1' }, 'diogocaraca.github.io'),
    ]),
  ],
);

const icon = h(
  'div',
  {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0e1016',
    fontFamily: 'JetBrains Mono',
    fontSize: 64,
    color: '#e6e8f0',
  },
  [h('span', {}, 'dc'), h('span', { color: '#00e5ff' }, '_')],
);

await render(og, 1200, 630, 'og.png');
await render(icon, 180, 180, 'apple-touch-icon.png');
