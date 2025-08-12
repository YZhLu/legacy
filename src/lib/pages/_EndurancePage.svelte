<script lang="ts">
	import { Progress } from '@skeletonlabs/skeleton-svelte';

	let { levels } = $props();

</script>


<div class="flex flex-col items-center justify-center pt-4">
    <span class="pb-4 text-3xl font-bold">Let’s learn Math!</span>
    <span class="pb-4 text-xl font-bold">something something something</span>
    <button class="w-96 rounded-2xl bg-[#1cb0f6] p-4 px-5 font-bold text-[#1b1324]"
        >RAND OPS</button
    >
    <section class="flex flex-col p-8 pt-8">
        <span class="text-xl font-bold">Radiciação</span>
        <span>Each syllable has one of five tones</span>
        <div class="flex flex-row items-center justify-start gap-3 py-4">
            {#each levels as item}
                <a class="button outline-none" href="specifics/endurance/radiciacao/{item.value}">
                    <div
                        class="h-16 w-20 rounded-md border-b-4 border-white p-2 text-white outline-2 outline-white"
                    >
                        <div
                            class="grid grid-cols-1 grid-rows-2 items-center justify-center text-center"
                        >
                            <span class="text-md font-bold">{item.value}x</span>
                            <!-- <span class="text-sm">{item.subInfo}</span> -->
                            <Progress value={item.progress} max={10} meterBg="bg-[#ffc700]" />
                        </div>
                    </div>
                </a>
            {/each}
        </div>
    </section>
    <section class="flex flex-col p-8 pt-8">
        <span class="text-xl font-bold">Operações com Radicais</span>
        <span>Each syllable has one of five tones</span>
        <div class="flex flex-row items-center justify-start gap-3 py-4">
            {#each levels as item}
                <a
                    class="button outline-none"
                    href="specifics/endurance/operacoesComRadicais/{item.value}"
                >
                    <div
                        class="h-16 w-20 rounded-md border-b-4 border-white p-2 text-white outline-2 outline-white"
                    >
                        <div
                            class="grid grid-cols-1 grid-rows-2 items-center justify-center text-center"
                        >
                            <span class="text-md font-bold">{item.value}x</span>
                            <!-- <span class="text-sm">{item.subInfo}</span> -->
                            <Progress value={item.progress} max={10} meterBg="bg-[#ffc700]" />
                        </div>
                    </div>
                </a>
            {/each}
        </div>
    </section>
    <section class="flex flex-col p-8 pt-8">
        <span class="text-xl font-bold">Equações do 2º grau</span>
        <span>Each syllable has one of five tones</span>
        <div class="flex flex-row items-center justify-start gap-3 py-4">
            {#each levels as item}
                <a
                    class="button outline-none"
                    href="specifics/endurance/equacoesSegundoGrau/{item.value}"
                >
                    <div
                        class="h-16 w-20 rounded-md border-b-4 border-white p-2 text-white outline-2 outline-white"
                    >
                        <div
                            class="grid grid-cols-1 grid-rows-2 items-center justify-center text-center"
                        >
                            <span class="text-md font-bold">{item.value}x</span>
                            <!-- <span class="text-sm">{item.subInfo}</span> -->
                            <Progress value={item.progress} max={10} meterBg="bg-[#ffc700]" />
                        </div>
                    </div>
                </a>
            {/each}
        </div>
    </section>
    <section class="flex flex-col p-8 pt-8">
        <span class="text-xl font-bold">Equações Biquadradas e Equações Irracionais</span>
        <span>Each syllable has one of five tones</span>
        <div class="flex flex-row items-center justify-start gap-3 py-4">
            {#each levels as item}
                <a
                    class="button outline-none"
                    href="specifics/endurance/equacoesBiquadradasEIracionais/{item.value}"
                >
                    <div
                        class="h-16 w-20 rounded-md border-b-4 border-white p-2 text-white outline-2 outline-white"
                    >
                        <div
                            class="grid grid-cols-1 grid-rows-2 items-center justify-center text-center"
                        >
                            <span class="text-md font-bold">{item.value}x</span>
                            <!-- <span class="text-sm">{item.subInfo}</span> -->
                            <Progress value={item.progress} max={10} meterBg="bg-[#ffc700]" />
                        </div>
                    </div>
                </a>
            {/each}
        </div>
    </section>
    <section class="flex flex-col p-8 pt-8">
        <span class="text-xl font-bold">Sistemas de Equações</span>
        <span>Each syllable has one of five tones</span>
        <div class="flex flex-row items-center justify-start gap-3 py-4">
            {#each levels as item}
                <a
                    class="button outline-none"
                    href="specifics/endurance/sistemasEquacoes/{item.value}"
                >
                    <div
                        class="h-16 w-20 rounded-md border-b-4 border-white p-2 text-white outline-2 outline-white"
                    >
                        <div
                            class="grid grid-cols-1 grid-rows-2 items-center justify-center text-center"
                        >
                            <span class="text-md font-bold">{item.value}x</span>
                            <!-- <span class="text-sm">{item.subInfo}</span> -->
                            <Progress value={item.progress} max={10} meterBg="bg-[#ffc700]" />
                        </div>
                    </div>
                </a>
            {/each}
        </div>
    </section>
    <section class="flex flex-col p-8 pt-8">
        <span class="text-xl font-bold">Funções</span>
        <span>Each syllable has one of five tones</span>
        <div class="flex flex-row items-center justify-start gap-3 py-4">
            {#each levels as item}
                <a class="button outline-none" href="specifics/endurance/funcoes/{item.value}">
                    <div
                        class="h-16 w-20 rounded-md border-b-4 border-white p-2 text-white outline-2 outline-white"
                    >
                        <div
                            class="grid grid-cols-1 grid-rows-2 items-center justify-center text-center"
                        >
                            <span class="text-md font-bold">{item.value}x</span>
                            <!-- <span class="text-sm">{item.subInfo}</span> -->
                            <Progress value={item.progress} max={10} meterBg="bg-[#ffc700]" />
                        </div>
                    </div>
                </a>
            {/each}
        </div>
    </section>
    <section class="flex flex-col p-8 pt-8">
        <span class="text-xl font-bold">Inequações do 2º grau</span>
        <span>Each syllable has one of five tones</span>
        <div class="flex flex-row items-center justify-start gap-3 py-4">
            {#each levels as item}
                <a
                    class="button outline-none"
                    href="specifics/endurance/inequacoesSegundoGrau/{item.value}"
                >
                    <div
                        class="h-16 w-20 rounded-md border-b-4 border-white p-2 text-white outline-2 outline-white"
                    >
                        <div
                            class="grid grid-cols-1 grid-rows-2 items-center justify-center text-center"
                        >
                            <span class="text-md font-bold">{item.value}x</span>
                            <!-- <span class="text-sm">{item.subInfo}</span> -->
                            <Progress value={item.progress} max={10} meterBg="bg-[#ffc700]" />
                        </div>
                    </div>
                </a>
            {/each}
        </div>
    </section>
    <section class="flex flex-col p-8 pt-8">
        <span class="text-xl font-bold">Semelhança de Triângulos</span>
        <span>Each syllable has one of five tones</span>
        <div class="flex flex-row items-center justify-start gap-3 py-4">
            {#each levels as item}
                <a
                    class="button outline-none"
                    href="specifics/endurance/semelhancaTriangulos/{item.value}"
                >
                    <div
                        class="h-16 w-20 rounded-md border-b-4 border-white p-2 text-white outline-2 outline-white"
                    >
                        <div
                            class="grid grid-cols-1 grid-rows-2 items-center justify-center text-center"
                        >
                            <span class="text-md font-bold">{item.value}x</span>
                            <!-- <span class="text-sm">{item.subInfo}</span> -->
                            <Progress value={item.progress} max={10} meterBg="bg-[#ffc700]" />
                        </div>
                    </div>
                </a>
            {/each}
        </div>
    </section>
    <section class="flex flex-col p-8 pt-8">
        <span class="text-xl font-bold">Triângulo Retângulo</span>
        <span>Each syllable has one of five tones</span>
        <div class="flex flex-row items-center justify-start gap-3 py-4">
            {#each levels as item}
                <a
                    class="button outline-none"
                    href="specifics/endurance/trianguloRetangulo/{item.value}"
                >
                    <div
                        class="h-16 w-20 rounded-md border-b-4 border-white p-2 text-white outline-2 outline-white"
                    >
                        <div
                            class="grid grid-cols-1 grid-rows-2 items-center justify-center text-center"
                        >
                            <span class="text-md font-bold">{item.value}x</span>
                            <!-- <span class="text-sm">{item.subInfo}</span> -->
                            <Progress value={item.progress} max={10} meterBg="bg-[#ffc700]" />
                        </div>
                    </div>
                </a>
            {/each}
        </div>
    </section>
    <section class="flex flex-col p-8 pt-8">
        <span class="text-xl font-bold">Relações Métricas em um Triângulo Qualquer</span>
        <span>Each syllable has one of five tones</span>
        <div class="flex flex-row items-center justify-start gap-3 py-4">
            {#each levels as item}
                <a
                    class="button outline-none"
                    href="specifics/endurance/relacoesMetricasTrianguloQualquer/{item.value}"
                >
                    <div
                        class="h-16 w-20 rounded-md border-b-4 border-white p-2 text-white outline-2 outline-white"
                    >
                        <div
                            class="grid grid-cols-1 grid-rows-2 items-center justify-center text-center"
                        >
                            <span class="text-md font-bold">{item.value}x</span>
                            <!-- <span class="text-sm">{item.subInfo}</span> -->
                            <Progress value={item.progress} max={10} meterBg="bg-[#ffc700]" />
                        </div>
                    </div>
                </a>
            {/each}
        </div>
    </section>
    <section class="flex flex-col p-8 pt-8">
        <span class="text-xl font-bold">Circunferência e Polígonos Regulares</span>
        <span>Each syllable has one of five tones</span>
        <div class="flex flex-row items-center justify-start gap-3 py-4">
            {#each levels as item}
                <a
                    class="button outline-none"
                    href="specifics/endurance/circunferenciaEPoligonosRegulares/{item.value}"
                >
                    <div
                        class="h-16 w-20 rounded-md border-b-4 border-white p-2 text-white outline-2 outline-white"
                    >
                        <div
                            class="grid grid-cols-1 grid-rows-2 items-center justify-center text-center"
                        >
                            <span class="text-md font-bold">{item.value}x</span>
                            <!-- <span class="text-sm">{item.subInfo}</span> -->
                            <Progress value={item.progress} max={10} meterBg="bg-[#ffc700]" />
                        </div>
                    </div>
                </a>
            {/each}
        </div>
    </section>
</div>