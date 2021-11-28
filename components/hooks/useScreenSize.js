import tailwindConfig from "../../tailwind.config";

export default function useScreeSize(screen = "") {
	if (typeof window == "undefined") return true;
	const screens = tailwindConfig.theme.screens;

	// create a keyed object of screens that match
	const matches = Object.entries(screens).reduce((results, [name, size]) => {
		const mediaQuery =
			typeof size === "string"
				? `(min-width: ${size})`
				: `(max-width: ${size.max})`;

		results[name] = window.matchMedia(mediaQuery).matches;

		return results;
	}, {});

	// show all matches when there is no screen choice
	if (screen === "") {
		return matches;
	}

	// invalid screen choice
	if (!screens[screen]) {
		console.error(`No match for "${screen}"`);

		return false;
	}

	return matches[screen];
}
