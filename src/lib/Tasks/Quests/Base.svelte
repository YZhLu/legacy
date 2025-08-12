<script lang="ts">
	import Feedback from '$lib/components/Feedback.svelte';
	import QuestField from '$lib/components/QuestField.svelte';
	import ContentSnippet from '$lib/snippets/ContentSnippet.svelte';
	// import IncorrectContentSnippet from '$lib/snippets/IncorrectContentSnippet.svelte';
	// import CorrectContentSnippet from '$lib/snippets/CorrectContentSnippet.svelte';

	let {
		isCorrect = $bindable(false),
		hasSubmitted = $bindable(false),
		questContent,
		command,
		body,
		correctAnswer = $bindable(),
		questType,
		
	} = $props();
</script>

<div class="dark:text-surface-50 text-surface-950 grid gap-6">
	<span
		class="items-center justify-start self-start py-4 text-xl font-bold"
		style="font-family: Nunito;"
	>
		{command}
	</span>
	<div class="flex items-center text-lg">
		<QuestField field={body} />
	</div>

{@render questContent()}
</div>

{#snippet correctContent()}
	<ContentSnippet {correctAnswer} {questType} type="correct" />
	<!-- <CorrectContentSnippet {correctAnswer} /> -->
{/snippet}

{#snippet incorrectContent()}
	<ContentSnippet {correctAnswer} {questType} type="incorrect" />
	<!-- <IncorrectContentSnippet {correctAnswer} /> -->
{/snippet}

<Feedback {isCorrect} {hasSubmitted} {correctContent} {incorrectContent}></Feedback>
