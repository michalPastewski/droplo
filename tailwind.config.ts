import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'header': '352px',
      },
     backgroundColor: {
      'bg-secondary': '#F9FAFB',
      'primary-button': '#7F56D9',
     },
     borderColor: {
      'secondary-color': '#F9FAFB',
      'primary-button-color': '#7F56D9',
     },
     textColor: {
      'header-color': '#101828',
      'primary-color': '#475467',
     },
     boxShadow: { 
      'button-shadow': '0px 1px 2px 0px #1018280D', 
     },
    },
  },
  plugins: [],
} satisfies Config;
