/* eslint-disable @typescript-eslint/no-require-imports */
import colors from 'tailwindcss/colors'
import typography from '@tailwindcss/typography'

export default {
  darkMode: 'class',
  content: [
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
  ],
  plugins: [
    typography(),
    require('flowbite/plugin')
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.purple
      }
    }
  }
}
