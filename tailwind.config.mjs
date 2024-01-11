/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				monstserrat: ["Montserrat", "sans-sarif"],
				pacifico: ["Pacifico", "sans-serif"]
      },
      colors: {
        primary1: "#C5425F",
        primary2: "#5E4D8B",
				textDark: "#443E4E",
				background: "#100353",
				unselected: "#C4C0CF",
				secundary: "#8D6A97"
      },
		},
	},
	plugins: [],
}
