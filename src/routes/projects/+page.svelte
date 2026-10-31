<script lang="ts">
	import { FolderGit2, ExternalLink } from 'lucide-svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import DontClickButton from '$lib/components/DontClickButton.svelte';
	import MobileMenu from '$lib/components/MobileMenu.svelte';

	const projects = [
		{
			id: 0,
			title: 'Web Desa Murtajih',
			description:
				'Website profil dan informasi publik terpadu untuk Desa Murtajih. Menyajikan data pemerintahan, layanan administrasi mandiri, dan galeri desa.',
			tech: ['React', 'Tailwind CSS', 'Vercel'],
			color: '#ff79c6',
			link: 'https://desamurtajih.vercel.app/',
			github: 'https://github.com/Radisty32/web_desa_murtajih.git',
			image: '/projects/web-apps/web-desa-murtajih/image.png'
		},
		{
			id: 1,
			title: 'EasyPDF App',
			description:
				'Aplikasi mobile untuk mengonversi, mengedit, dan mengelola file PDF dengan mudah langsung dari perangkat smartphone.',
			tech: ['Flutter', 'Dart', 'Mobile'],
			color: '#f8e71c',
			github: 'https://github.com/MakdumIbrohim/easyPDF-app.git',
			image: '/projects/mobile-apps/easy-pdf-app/easyPDF_app_screenshot.jpg'
		},
		{
			id: 2,
			title: 'Chatbot App',
			description:
				'Aplikasi obrolan pintar berbasis AI untuk platform mobile. Dikembangkan untuk memberikan respon otomatis dan interaksi teks secara efisien.',
			tech: ['React Native', 'Expo', 'Mobile'],
			color: '#50e3c2',
			github: 'https://github.com/MakdumIbrohim/chatbot_app.git',
			image: '/projects/mobile-apps/chatbot-app/chatbot_app_screenshot.jpg'
		},
		{
			id: 3,
			title: 'Day Counter App',
			description:
				'Aplikasi web fungsional untuk menghitung jumlah hari yang telah berlalu atau menuju ke tanggal tertentu. Antarmuka minimalis dan responsif.',
			tech: ['React', 'Tailwind CSS'],
			color: '#4a90e2',
			link: 'https://day-counter-app-vert.vercel.app/',
			github: 'https://github.com/MakdumIbrohim/DayCounterApp.git',
			image: '/projects/web-apps/day-counter-app/image.png'
		}
	];
</script>

<div
	class="min-h-screen bg-[#f4f4f0] dark:bg-[#1a1a1a] text-black dark:text-white p-3 sm:p-4 md:p-8 font-sans selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-300"
>
	<!-- Header Navigation -->
	<header
		class="border-[3px] border-black dark:border-white p-3 sm:p-4 md:p-6 mb-4 md:mb-8 bg-white dark:bg-black flex items-center justify-between gap-4 max-w-6xl mx-auto shadow-[4px_4px_0_0_#000] lg:shadow-[8px_8px_0_0_#000] dark:shadow-[4px_4px_0_0_#fff] dark:lg:shadow-[8px_8px_0_0_#fff]"
	>
		<!-- Desktop Nav -->
		<nav
			class="hidden lg:flex justify-start gap-4 font-press-start text-[8px] sm:text-[10px] md:text-xs tracking-wider uppercase"
		>
			<a
				href="/"
				class="border-[3px] border-black dark:border-white bg-[#4a90e2] text-white px-6 py-2 flex items-center justify-center gap-2 shadow-[4px_4px_0_0_#000] dark:shadow-[4px_4px_0_0_#fff] hover:translate-y-[2px] hover:shadow-[1px_1px_0_0_#000] dark:hover:shadow-[1px_1px_0_0_#fff] cursor-pointer transition-all"
			>
				<span class="text-lg leading-none mt-[-2px]">←</span> BACK TO HOME
			</a>
		</nav>

		<div class="flex flex-1 lg:flex-none gap-2 sm:gap-4 items-center justify-end">
			<ThemeToggle />
			<DontClickButton />
			<MobileMenu />
		</div>
	</header>

	<!-- Main Content Container -->
	<main
		class="border-[3px] border-black dark:border-white p-4 sm:p-6 md:p-10 bg-white dark:bg-[#121212] max-w-6xl mx-auto shadow-[6px_6px_0_0_#000] md:shadow-[12px_12px_0_0_#000] dark:shadow-[6px_6px_0_0_#fff] dark:md:shadow-[12px_12px_0_0_#fff] relative"
	>
		<!-- Page Title -->
		<div
			class="mb-10 sm:mb-14 border-b-[4px] border-dashed border-black dark:border-white pb-6 sm:pb-8 flex flex-col md:flex-row gap-6 justify-between items-start md:items-end"
		>
			<div>
				<h1
					class="text-[7vw] sm:text-3xl md:text-5xl lg:text-[3rem] font-press-start uppercase tracking-tighter text-center md:text-left leading-[1.3] flex items-center justify-center md:justify-start gap-4 sm:gap-6 flex-wrap"
				>
					<FolderGit2
						class="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 text-[#f8e71c] dark:text-[#b8a900]"
						strokeWidth={2.5}
					/>
					<span
						>MY<span
							class="bg-[#f8e71c] dark:bg-[#b8a900] text-black px-3 sm:px-4 pb-1 sm:pb-2 ml-1 sm:ml-2 border-[3px] sm:border-[4px] border-black dark:border-white inline-block shadow-[4px_4px_0_0_#000] dark:shadow-[4px_4px_0_0_#fff] rotate-2"
							>PROJECTS</span
						></span
					>
				</h1>
			</div>

			<div
				class="font-press-start text-[8px] sm:text-[10px] bg-[#fff9db] dark:bg-[#1f1a00] p-4 border-[3px] border-black dark:border-white shadow-[2px_2px_0_0_#000] dark:shadow-[2px_2px_0_0_#fff] uppercase text-black dark:text-gray-300 w-full md:w-auto leading-loose"
			>
				STATUS: BUILDING 🏗️<br />
				COMMITS: TOO MANY
			</div>
		</div>

		<!-- Projects Grid -->
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
			{#each projects as project (project.id)}
				<div
					class="border-[3px] border-black dark:border-white bg-[#fdfdfd] dark:bg-[#1e1e1e] shadow-[6px_6px_0_0_#000] dark:shadow-[6px_6px_0_0_#fff] transition-transform hover:-translate-y-2 active:-translate-y-2 hover:shadow-[8px_8px_0_0_#000] dark:hover:shadow-[8px_8px_0_0_#fff] active:shadow-[8px_8px_0_0_#000] dark:active:shadow-[8px_8px_0_0_#fff] relative flex flex-col group"
				>
					<!-- Header colored banner -->
					<div
						class="p-3 sm:p-4 border-b-[3px] border-black dark:border-white flex justify-between items-center"
						style="background-color: {project.color};"
					>
						<div class="flex gap-2">
							<div class="w-3 h-3 rounded-full border-2 border-black bg-white"></div>
							<div class="w-3 h-3 rounded-full border-2 border-black bg-white"></div>
						</div>
						<div
							class="font-mono font-bold text-xs uppercase text-black bg-white px-2 py-0.5 border-2 border-black"
						>
							APP_ID: 00{project.id}
						</div>
					</div>

					<div class="p-5 sm:p-6 md:p-8 flex flex-col flex-1">
						<!-- Image Wrapper -->
						{#if project.image}
							<div
								class="mb-4 sm:mb-6 border-[3px] border-black dark:border-white bg-gray-200 dark:bg-zinc-800 shadow-[4px_4px_0_0_#000] dark:shadow-[4px_4px_0_0_#fff] overflow-hidden aspect-video relative group-hover:-translate-y-1 group-active:-translate-y-1 transition-transform"
							>
								<div class="absolute inset-0 bg-black/5 dark:bg-white/5 z-10 pointer-events-none"></div>
								<img
									src={project.image}
									alt={project.title}
									class="w-full h-full object-cover"
								/>
							</div>
						{/if}
						<!-- Title -->
						<h2
							class="text-sm sm:text-base font-press-start uppercase tracking-tight mb-4 group-hover:underline group-active:underline decoration-4 underline-offset-4 leading-[1.4]"
						>
							{project.title}
						</h2>

						<p
							class="font-medium text-sm sm:text-base mb-6 flex-1 text-gray-800 dark:text-gray-300 leading-relaxed"
						>
							{project.description}
						</p>

						<!-- Tech Stack Tags -->
						<div class="mb-8">
							<div class="font-press-start text-[8px] uppercase tracking-widest mb-3 opacity-60">
								Tech Stack
							</div>
							<div class="flex flex-wrap gap-2">
								{#each project.tech as tech}
									<span
										class="font-mono text-[10px] sm:text-xs font-bold border-[2px] border-black dark:border-white bg-white dark:bg-black px-2 py-1 shadow-[2px_2px_0_0_#000] dark:shadow-[2px_2px_0_0_#fff]"
									>
										{tech}
									</span>
								{/each}
							</div>
						</div>

						<!-- Action Buttons -->
						<div
							class="flex flex-wrap flex-col sm:flex-row gap-3 sm:gap-4 mt-auto pt-4 border-t-[3px] border-dashed border-black dark:border-white opacity-50 group-hover:opacity-100 group-active:opacity-100 transition-opacity"
						>
							<a
								href={project.github}
								target="_blank"
								rel="noopener noreferrer"
								class="border-[3px] border-black dark:border-white bg-black dark:bg-white text-white dark:text-black font-press-start text-[8px] sm:text-[10px] px-4 py-3 flex justify-center items-center gap-2 flex-1 shadow-[2px_2px_0_0_#000] dark:shadow-[2px_2px_0_0_#fff] hover:translate-y-[2px] active:translate-y-[2px] hover:shadow-none active:shadow-none transition-all uppercase leading-[1.3] text-center w-full"
							>
								<svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg> Repo
							</a>
							{#if project.link}
								<a
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
									class="border-[3px] border-black dark:border-white bg-[#50e3c2] dark:bg-[#008f6b] text-black dark:text-white font-press-start text-[8px] sm:text-[10px] px-4 py-3 flex justify-center items-center gap-2 flex-1 shadow-[2px_2px_0_0_#000] dark:shadow-[2px_2px_0_0_#fff] hover:translate-y-[2px] active:translate-y-[2px] hover:shadow-none active:shadow-none transition-all uppercase leading-[1.3] text-center w-full"
								>
									<ExternalLink size={14} strokeWidth={2.5} /> Live
								</a>
							{/if}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</main>
</div>
