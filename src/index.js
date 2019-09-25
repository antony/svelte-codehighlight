import CodeHighlight from './CodeHighlight.svelte'

window.BEYONK = window.BEYONK || {}
window.BEYONK.CodeHighlight = function () {
  const codeBlocks = document.querySelectorAll('[data-code-highlight]')
  codeBlocks.forEach(b => {
    const code = b.innerHTML
    const locs = JSON.parse(b.dataset.locs)

    b.innerHTML = ''

    new CodeHighlight({
      target: b,
      props: {
        code,
        locs
      }
    })
  })
}
