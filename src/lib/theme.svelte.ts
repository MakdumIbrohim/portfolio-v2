import { browser } from '$app/environment';

class ThemeState {
	theme = $state<'light' | 'dark'>('light');

	constructor() {
		if (browser) {
			const stored = localStorage.getItem('theme') as 'light' | 'dark' | null;
			const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			this.theme = stored || (prefersDark ? 'dark' : 'light');
			this.apply();
		}
	}

	toggle() {
		this.theme = this.theme === 'dark' ? 'light' : 'dark';
		if (browser) {
			localStorage.setItem('theme', this.theme);
			this.apply();
		}
	}

	private apply() {
		if (browser) {
			if (this.theme === 'dark') {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
		}
	}
}

export const themeState = new ThemeState();
