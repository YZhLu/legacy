<script lang="ts">
	let { correctCount, incorrectCount, showModal, closeModal } = $props();
</script>

{#if showModal}
	<div
		class="fixed inset-0 flex items-center justify-center bg-black/75"
		style="font-family: Nunito;"
	>
		<div
			class="bg-surface-50 dark:bg-surface-950 flex flex-col items-center justify-center gap-4 rounded-lg p-8 text-center shadow-lg"
		>
			<h2 class="mb-4 text-2xl font-bold">Resultados</h2>
			<div
				class="card flex w-24 flex-col items-center justify-center outline-2 outline-[#7e0cf5]"
				style="font-family: Nunito;"
			>
				<section class="inline-flex w-full justify-center rounded-t-md bg-[#7e0cf5]">
					Acertos
				</section>
				<section class="flex flex-row items-center justify-center gap-1 text-[#7e0cf5]">
					<span>
						{correctCount}
					</span>
					<img
						src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSIjN2UwY2Y1IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMy4yOTMgMGMuMzkgMCAuNzA3LjMxNy43MDcuNzA3VjJoMS4yOTNhLjcwNy43MDcgMCAwIDEgLjUgMS4yMDdsLTEuNDYgMS40NkExLjE0IDEuMTQgMCAwIDEgMTMuNTMgNWgtMS40N0w4LjUzIDguNTNhLjc1Ljc1IDAgMCAxLTEuMDYtMS4wNkwxMSAzLjk0VjIuNDdjMC0uMzAxLjEyLS41OS4zMzMtLjgwNGwxLjQ2LTEuNDZhLjcuNyAwIDAgMSAuNS0uMjA3TTIuNSA4YTUuNSA1LjUgMCAwIDEgNi41OTgtNS4zOWEuNzUuNzUgMCAwIDAgLjI5OC0xLjQ3QTcgNyAwIDEgMCAxNC44NiA2LjZhLjc1Ljc1IDAgMCAwLTEuNDcuMjk5cS4xMDkuNTMzLjExIDEuMTAxYTUuNSA1LjUgMCAxIDEtMTEgMG01LjM2NC0yLjQ5NmEuNzUuNzUgMCAwIDAtLjA4LTEuNDk4QTQgNCAwIDEgMCAxMS45ODggOC4zYS43NS43NSAwIDAgMC0xLjQ5Ni0uMTExYTIuNSAyLjUgMCAxIDEtMi42My0yLjY4NiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+"
						width="17x"
						height="17x"
						alt="tempo"
					/>
				</section>
			</div>
			<div
				class="card outline-error-500 flex w-24 flex-col items-center justify-center outline-2"
				style="font-family: Nunito;"
			>
				<section class="bg-error-500 inline-flex w-full justify-center rounded-t-md">Erros</section>
				<section class="text-error-500 flex flex-row items-center justify-center gap-1">
					<span>
						{incorrectCount}
					</span>
					<img
						src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDQ4IiBoZWlnaHQ9IjIwNDgiIHZpZXdCb3g9IjAgMCAyMDQ4IDIwNDgiPjxwYXRoIGZpbGw9IiNkMjBmMjkiIGQ9Ik05NjAgMHExMzMgMCAyNTUgMzR0MjMwIDk2dDE5NCAxNTB0MTUwIDE5NXQ5NyAyMjl0MzQgMjU2cTAgMTMzLTM0IDI1NXQtOTYgMjMwdC0xNTAgMTk0dC0xOTUgMTUwdC0yMjkgOTd0LTI1NiAzNHEtMTMzIDAtMjU1LTM0dC0yMzAtOTZ0LTE5NC0xNTB0LTE1MC0xOTV0LTk3LTIyOVQwIDk2MHEwLTEzMyAzNC0yNTV0OTYtMjMwdDE1MC0xOTR0MTk1LTE1MHQyMjktOTdUOTYwIDBtMCAxNzkycTExNCAwIDIyMC0zMHQxOTktODR0MTY5LTEzMHQxMzAtMTY4dDg0LTE5OXQzMC0yMjF0LTMwLTIyMHQtODQtMTk5dC0xMzAtMTY5dC0xNjgtMTMwdC0xOTktODR0LTIyMS0zMHEtMTE1IDAtMjIxIDMwdC0xOTggODR0LTE2OSAxMzB0LTEzMCAxNjh0LTg0IDE5OXQtMzAgMjIxcTAgMTE0IDMwIDIyMHQ4NCAxOTl0MTMwIDE2OXQxNjggMTMwdDE5OSA4NHQyMjEgMzBNODk2IDUxMmgxMjh2NjQwSDg5NnptMCA3NjhoMTI4djEyOEg4OTZ6Ii8+PC9zdmc+"
						width="17x"
						height="17x"
						alt="tempo"
					/>
				</section>
			</div>
			<button
				onclick={closeModal}
				class="button inline-flex h-12 w-40 items-center justify-center rounded-lg border-b-4 border-[#679424] bg-[#93d333] p-4 font-bold text-[#131f24]"
			>
				Concluir
			</button>
		</div>
	</div>
{/if}
