import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  plugins: [
    
    require('daisyui'),],

    daisyui: {
      themes: [
        {
          mytheme: {
            
  "primary": "#ff00d3",
            
  "secondary": "#009000",
            
  "accent": "#00f843",
            
  "neutral": "#0d1800",
            
  "base-100": "#223227",
            
  "info": "#1c98ff",
            
  "success": "#3bb700",
            
  "warning": "#ca0000",
            
  "error": "#ff4463",
  body: {
    "background-color": "#0d1800",
  },
            },
          },
        ],
      },
} satisfies Config;
