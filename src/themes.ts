import catppuccinMocha from "@shikijs/themes/catppuccin-mocha";
import catppuccinLatte from "@shikijs/themes/catppuccin-latte";
import type { ThemeRegistration } from "shiki";

export const colors = {
	dark: {
		accent: "#b48aef",       // Vibrant pastel purple for buttons/tags
        text: "#e5dcf5",         // Bright lavender-tinted white
        textOnAccent: "#1a1325", // Deepest purple for high contrast on the accent
        subtext1: "#ccbfe6",
        subtext0: "#b4a3d6",
        overlay2: "#9a88c4",
        overlay1: "#8370b0",
        overlay0: "#6d5a99",
        surface2: "#584682",     // Borders and distinct UI elements
        surface1: "#443469",     // hover
        surface0: "#332454",     // Card backgrounds
        background2: "#23183d",
        background1: "#23183d",  // Secondary backgrounds / vector waves
        background0: "#150e26",  // Deep dark aubergine base
	},
	light: {
        accent: "#844ce6",       // Deep, punchy purple for buttons/tags
        text: "#2a2436",         // Very dark purple-grey for high readability
        textOnAccent: "#ffffff", // Pure white for high contrast on the accent
        subtext1: "#554c63",
        subtext0: "#726880",
        overlay2: "#8e859c",
        overlay1: "#a59db3",
        overlay0: "#beb6cc",
        surface2: "#e6e1f0",     // Borders and distinct UI elements
        surface1: "#f2f0f7",     // hover
        surface0: "#ffffff",     // Card backgrounds (pure white for clean contrast)
        background2: "#e4ddef",
        background1: "#ede8f5",  // Secondary backgrounds / vector waves
        background0: "#f6f3fb",  // Very light lavender-tinted base
    }
}

export const shiki = {
	dark: {
		...catppuccinMocha,
		name: "naoppuccin-dark",
		colors: {
			...catppuccinMocha.colors,
			"activityBar.background": colors.dark.background0,
			"editor.background": colors.dark.background1,
			"statusBar.background": colors.dark.background0,
			"statusBarItem.remoteBackground": colors.dark.background0,
			"tab.activeBackground": colors.dark.background1,
			"titleBar.activeBackground": colors.dark.background1,
			"editorGroupHeader.tabsBackground": colors.dark.background0,
			"panel.background": colors.dark.background1,
		},
	} as ThemeRegistration,
	light: {
		...catppuccinLatte,
		name: "naoppuccin-light",
		colors: {
			...catppuccinLatte.colors,
			"activityBar.background": colors.light.background0,
			"editor.background": colors.light.background1,
			"statusBar.background": colors.light.background0,
			"statusBarItem.remoteBackground": colors.light.background0,
			"tab.activeBackground": colors.light.background1,
			"titleBar.activeBackground": colors.light.background1,
			"editorGroupHeader.tabsBackground": colors.light.background0,
			"panel.background": colors.light.background1,
		},
	} as ThemeRegistration,
}

export function generateCss() {
	function toKebab(s: string) {
		return s.replace(/[A-Z]+(?![a-z])|[A-Z]/g, ($, ofs) => (ofs ? "-" : "") + $).toLowerCase();
	}

	function generateVars(type, theme){
		let css: string = "";
		css += `color-scheme:${type};`
		Object.entries(theme).forEach(([colorName, color]) => {
			css += `--color-${toKebab(colorName)}:${color};`;
		});
		return css;
	}

	let css: string = "";

	// default to dark theme
	css += `:root{${generateVars("dark", colors.dark)}}`;
	css += `@media(prefers-color-scheme:light){:root{${generateVars("light", colors.light)}}}`;

	// create overrides
	Object.entries(colors).forEach(([type, theme]) => {
		css += `[data-theme="${type}"]{${generateVars(type, theme)}}`;
	});
	return css;
}