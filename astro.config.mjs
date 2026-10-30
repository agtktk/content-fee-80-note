import {defineConfig} from 'astro/config';
import mdx from '@astrojs/mdx';
export default defineConfig({site:'https://content-fee-80-note.pages.dev',output:'static',trailingSlash:'always',integrations:[mdx()],devToolbar:{enabled:false}});
