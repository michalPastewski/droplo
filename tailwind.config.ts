import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Inter'],
    },
    extend: {
      maxWidth: {
        'header': '352px',
      },
     backgroundColor: {
      'bg-primary': '#FFFFFF',
      'bg-secondary': '#F9FAFB',
      'primary-button': '#7F56D9',
     },
     borderColor: {
      'primary-color': '#D0D5DD',
      'secondary-color': '#F9FAFB',
      'primary-button-color': '#7F56D9',
      'card-border-color': '#EAECF0',
     },
     textColor: {
      'header-color': '#101828',
      'primary-color': '#475467',
      'secondary-color': '#344054',
      'placeholder-color': '#6677085', 
      'submit-color': '#6941C6',
     },
     boxShadow: { 
      'base-shadow': '0px 1px 2px 0px #1018280D', 
     },
    },
  },
  plugins: [],
} satisfies Config;
