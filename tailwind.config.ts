import type { Config } from 'tailwindcss';

import { colors } from './src/theme/colors';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [
    require('nativewind/preset'),
    require('@kirz/nativewind-scale/preset'),
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors,
    },
  },
} satisfies Config;
