<script>
  import { onMount } from 'svelte';
	export let faqs
  let activeIndex = null; // Track the active (expanded) question index

  // Function to toggle the active question
  function toggleQuestion(index) {
    activeIndex = activeIndex === index ? null : index;
  }

  // Function to initialize the first question as active on component mount
  onMount(() => {
    activeIndex = 0; // Set the initial active question index here
  });
</script>

<div class="mt-[6rem] container md:px-[3rem]">
		<h1 class="text-center mt-[5rem] font-black text-3xl text-primary p-0 m-0">FAQ</h1>
  {#each faqs as { question, answer }, index}
    <div class="my-2">
      <button
        class="w-full flex justify-between items-center py-4 px-6 focus:outline-none border-none hover:bg-[#222] focus:bg-[#222]"
        class:selected={activeIndex === index}
        on:click={() => toggleQuestion(index)}
      >
        <span class="text-md text-left font-medium">{question}</span>
        <svg
          class="w-6 h-6 transform transition-transform"
          class:rotate-180={activeIndex === index}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {#if activeIndex === index}
        <div class="py-4 px-6 bg-[rgb(25,25,25)]">
          <p class="text-gray-300">{answer}</p>
        </div>
      {/if}
    </div>
  {/each}
</div>

<style>
  .rotate-180 {
    transform: rotate(180deg);
  }
</style>