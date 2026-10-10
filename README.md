# first-pr-practice

Tiny string helpers for Node.js, with no dependencies. This repository exists to practice the pull request workflow.

## Usage

```js
const { capitalize, slugify, truncate, wordCount } = require('./src/text');

capitalize('hello');          // 'Hello'
slugify('Hello, World!');     // 'hello-world'
truncate('Hello, World!', 8); // 'Hello...'
wordCount('one two  three');  // 3
```

## Requirements

Node.js 18 or newer.
