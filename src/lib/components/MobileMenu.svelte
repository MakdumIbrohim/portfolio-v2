<script lang="ts">
	import { page } from '$app/stores';
	import { Menu, X } from 'lucide-svelte';

	let isOpen = $state(false);

	const toggleMenu = () => {
		isOpen = !isOpen;
	};

	const navLinks = [
		{ name: 'HOME', href: '/' },
		{ name: 'CERTIFICATES', href: '/certificates' },
		{ name: 'PROJECTS', href: '/projects' },
		{ name: 'CONTACT', href: '/contact' }
	];
</script>

<div class="lg:hidden relative z-50">
	<!-- Hamburger Button -->
	<button
		onclick={toggleMenu}
		class="border-[3px] border-black dark:border-white bg-[#f8e71c] dark:bg-[#b8a900] text-black dark:text-white p-2 shadow-[2px_2px_0_0_#000] dark:shadow-[2px_2px_0_0_#fff] hover:translate-y-[2px] hover:shadow-[1px_1px_0_0_#000] dark:hover:shadow-[1px_1px_0_0_#fff] transition-all flex items-center justify-center cursor-pointer"
		aria-label="Toggle Menu"
	>
		{#if isOpen}
			<X size={24} strokeWidth={3} />
		{:else}
			<Menu size={24} strokeWidth={3} />
		{/if}
	</button>

	<!-- Dropdown Menu Container -->
	{#if isOpen}
		<!-- Backdrop -->
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div
			class="fixed inset-0 bg-black/50 dark:bg-black/70 z-40"
			onclick={() => (isOpen = false)}
		></div>

		<!-- Menu Content -->
		<div
			class="absolute top-full right-0 mt-3 w-56 border-[3px] border-black dark:border-white bg-white dark:bg-[#121212] flex flex-col shadow-[4px_4px_0_0_#000] dark:shadow-[4px_4px_0_0_#fff] z-50 animate-[slide-down_0.2s_ease-out]"
		>
			<div
				class="bg-[#4a90e2] text-white p-3 border-b-[3px] border-black dark:border-white font-press-start text-[8px] tracking-widest uppercase flex items-center justify-between"
			>
				<span>NAVIGATION</span>
			</div>

			<nav class="flex flex-col">
				{#each navLinks as link}
					{@const isActive = $page.url.pathname === link.href}
					<a
						href={link.href}
						onclick={() => (isOpen = false)}
						class="p-4 font-press-start text-[8px] tracking-wider uppercase border-b-[3px] border-black dark:border-white last:border-b-0 hover:bg-[#ff79c6] dark:hover:bg-[#b83280] hover:text-white transition-colors flex items-center justify-between {isActive
							? 'bg-[#50e3c2] dark:bg-[#008f6b] text-black dark:text-white -mr-1 shadow-[-4px_0_0_0_#000] dark:shadow-[-4px_0_0_0_#fff]'
							: 'text-black dark:text-white'}"
					>
						<span>{link.name}</span>
						{#if isActive}
							<span class="text-xl leading-none">←</span>
						{/if}
					</a>
				{/each}
			</nav>
		</div>
	{/if}
</div>
