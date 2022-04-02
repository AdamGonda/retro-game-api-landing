<script>
  import gsap from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  import { onMount } from 'svelte'
  import Navigation from './Navigation.svelte'
  import Prism from './PrismJS.svelte'
  import doc from './doc'
  import { fly } from 'svelte/transition'

  let options = ['Overview', 'Snake', 'Space Invaders', 'Tetris']
  let selected = 0

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger)
    const tl = gsap.timeline()

    tl.to('#c2', {
      rotation: -120,
      transformOrigin: '50% 50%',
      scrollTrigger: {
        scrub: 2,
        start: 'top',
      },
    })
      .to('#c3', {
        scrollTrigger: {
          scrub: true,
          start: 'top',
        },
        y: -50,
      })
      .to('#c4', {
        scrollTrigger: {
          scrub: true,
          start: 'top',
        },
        y: -100,
        x: 50,
      })
      .to('#c5', {
        scrollTrigger: {
          scrub: true,
          start: 'top',
        },
        y: -170,
        x: 150,
      })
      .to('#small-squares', {
        scrollTrigger: {
          scrub: true,
          start: 'top',
        },
        y: -10,
      })
  })

  function onSelect(idx) {
    selected = idx
  }
</script>

<Navigation
  {...{
    options,
    selected,
    onSelect,
  }}
/>

{#key selected}
  <div in:fly={{ y: 100, duration: 500 }} id="doc">
    {#if selected == 0}
      <Prism language="markdown" code={doc[0]} />
    {/if}
    {#if selected == 1}
      <Prism language="javascript" code={doc[1]} />
    {/if}
    {#if selected == 2}
      <Prism language="javascript" code={doc[2]} />
    {/if}
    {#if selected == 3}
      <Prism language="javascript" code={doc[3]} />
    {/if}
  </div>
{/key}

