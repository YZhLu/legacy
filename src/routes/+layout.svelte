<script lang="ts">
	import { page } from '$app/state';
	import '../app.css';
	let { children } = $props();

	function toggleDarkMode() {
		//document.documentElement.classList.toggle('dark');
		console.log('toggleDarkMode');
		if (document.documentElement.classList.contains('dark')) {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('dark', 'false');
		} else {
			document.documentElement.classList.add('dark');
			localStorage.setItem('dark', 'true');
		}
	}
	let isWisdomPath = $derived(/\/wisdom-[^/]+\//.test(page.url.pathname));
</script>

<div>
	<!-- mudar aqui e colcoar em config -->
	<button
		aria-label="Toggle dark mode."
		class="btn-icon hover:preset-tonal fixed top-10 right-0 z-10 m-4 mr-1 md:top-0 md:mt-1 md:mr-4"
		class:mt-0={page.url.pathname === '/demo'}
		class:md:mt-4={isWisdomPath}
		title="Toggle dark mode."
		data-lightswitch=""
		onclick={toggleDarkMode}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="lucide lucide-sun-moon"
			><path d="M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4"></path><path d="M12 2v2"></path><path
				d="M12 20v2"
			></path><path d="m4.9 4.9 1.4 1.4"></path><path d="m17.7 17.7 1.4 1.4"></path><path
				d="M2 12h2"
			></path><path d="M20 12h2"></path><path d="m6.3 17.7-1.4 1.4"></path><path
				d="m19.1 4.9-1.4 1.4"
			></path></svg
		>
	</button>
	{@render children()}
</div>
