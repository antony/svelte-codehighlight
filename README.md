<p align="center">
  <img width="186" height="90" src="https://user-images.githubusercontent.com/218949/44782765-377e7c80-ab80-11e8-9dd8-fce0e37c235b.png" alt="Beyonk" />
</p>

# Svelte CodeHighlight

by [@antony](https://github.com/antony)

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com) [![svelte-v3](https://img.shields.io/badge/svelte-v3-blueviolet.svg)](https://svelte.dev)

## About

Provides an interactive code-highlighter for presentations!

Uses [highlight.js](https://highlightjs.org/) under the hood.

## Roadmap

* Theme configurability
* CSS Animations
* More languges (hljs)

### Usage

```jsx
<script>
  import CodeHighlight from '@beyonk/svelte-codehighlight

  const code = `
    import Foo from 'bar'

    function baz () {
      new Foo()
    }

    const qux = baz()

    console.log('quux', qux)
  `

  const locs = [
    { line: 1 },
    { line: 4 },
    { line: 7 },
    { line: 3, length: 3 },
    { line: 9 }
  ]
</script>

<CodeHighlight {code} {locs} />

```

Then use `[` and `]` keys to move between highlighted blocks of code.