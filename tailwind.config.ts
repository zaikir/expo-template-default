import { scaleVar } from '@kirz/nativewind-scale';
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
    fontFamily: {
      inter: ['Inter'],
    },
    extend: {
      spacingX: {
        edge: scaleVar(10),
      },
      colors,
    },
  },
} satisfies Config;
