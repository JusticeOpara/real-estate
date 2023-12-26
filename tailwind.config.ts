import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern':"url('./assets/images/nft-background.jpg')",
        "background-image": "url('../public/background-image.png')"
      },
      fontFamily: {
        Rubic: ['Rubik', 'sans-serif'],
        Poppins:['Poppins', 'sans-serif']
       },
    },
  },
  plugins: [],
}
export default config
