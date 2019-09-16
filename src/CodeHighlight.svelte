<svelte:window on:keypress={kp} />

<script>
	import { onMount } from 'svelte'
  import hljs from 'highlight.js'
  import javascript from 'highlight.js/lib/languages/javascript'
  import 'highlight.js/styles/monokai.css'
  hljs.registerLanguage('javascript', javascript)
  
  export let code = ''
  export let locs = []

  let block = null
	let blocks = []
	let current = 0
	
	onMount(() => {
		const lines = code.trim().split('\n')
		blocks = locs.reduce((curr, { line, length = 1 }) => {
      const { value } = hljs.highlightAuto(lines.slice(line, line + length).join('\n'))
			curr.push({
				before: lines.slice(0, line).join('\n'),
				context: value,
				after: lines.slice(line + length).join('\n')
			})
			return curr
		}, [])
  })
  
  function kp (e) {
    if (e.key === ']') {
      current = current < blocks.length - 1 ? current + 1 : current
    }

    if (e.key === '[') {
      current = current > 0 ? current - 1 : 0
    }
  }
</script>

{#if blocks.length}
<pre class="hljs code vitriol">
<span class="faded">{blocks[current].before}</span>
<span class="current">{@html blocks[current].context}</span>
<span class="faded">{blocks[current].after}</span>
</pre>
{/if}

<style>
  .faded {
    opacity: 0.5;
  }

  .current {
    filter: brightness(1.25);
   }
</style>