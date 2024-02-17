import { type Config } from 'tailwindcss';

export default {
  presets: [require('shadcn-ui-lib/tailwind-config')],
  content: ['./src/**/*.tsx'],
  theme: {},
} satisfies Config;
