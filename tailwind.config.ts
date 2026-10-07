import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './content/**/*.md'
  ],
  plugins: [
    typography()
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace']
      },
      colors: {
        bento: {
          bg: '#F6F3EB',
          'bg-dark': '#131512',
          surface: '#FFFFFF',
          'surface-dark': '#1C1F1B',
          sage: '#C6D8C4',
          'sage-dark': '#233324',
          butter: '#FBE795',
          'butter-dark': '#383015',
          coral: '#F4B6A6',
          'coral-dark': '#3F221D',
          cobalt: '#3056D3',
          'cobalt-dark': '#4D72FA',
          border: '#111111',
          'border-dark': '#E2E8F0',
          ink: '#111111',
          'ink-muted': '#555555'
        }
      },
      boxShadow: {
        brutal: '4px 4px 0px 0px #111111',
        'brutal-sm': '2px 2px 0px 0px #111111',
        'brutal-lg': '6px 6px 0px 0px #111111',
        'brutal-xl': '8px 8px 0px 0px #111111',
        'brutal-white': '4px 4px 0px 0px #FFFFFF',
        'brutal-white-sm': '2px 2px 0px 0px #FFFFFF',
        'brutal-white-lg': '6px 6px 0px 0px #FFFFFF'
      },
      borderWidth: {
        '2.5': '2.5px',
        '3': '3px'
      }
    }
  }
}
