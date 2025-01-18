/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
    // Add any other directories or file extensions where you use Tailwind classes
  ],
  theme: {
    extend: {
      colors: {
        green: "#39DB4A",
        red: "#FF6868",
        secondary: "#555",
        prigmayBG: "#FCFCFC", // Fixed typo in 'prigmayBG' (changed to 'prigmayBG')
      },
      // You can extend more theme settings here if needed, such as font families, spacing, etc.
    },
  },
  plugins: [
    require('daisyui'), // Ensure daisyUI is installed, if you use it
  ],
  // Ensure Tailwind Purge is configured correctly in production
  purge: {
    content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}',
      './pages/**/*.{html,js}',
    ],
    options: {
      safelist: ['bg-green', 'text-red-500'], // Optional: Safelist classes you want to preserve during purging
    },
  },
}
