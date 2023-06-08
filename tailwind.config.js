/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      montserrat: 'var(--font-montserrat)',
      lato: 'var(--font-lato)',
    },
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        muted: 'var(--muted)',
        input: {
          DEFAULT: 'var(--input)',
          hover: 'var(--input-hover)',
        },
        placeholder: 'var(--placeholder)',
        secondary: {
          text: 'var(--secondary-text)',
        },
        link: 'var(--link)',
      },
      borderRadius: {
        lg: `calc(var(--radius) + 30px)`,
        md: `calc(var(--radius) + 20px)`,
        sm: 'calc(var(--radius) + 10px)',
        DEFAULT: 'var(--radius)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
