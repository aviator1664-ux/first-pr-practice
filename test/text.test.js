'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { capitalize, slugify, truncate, wordCount } = require('../src/text');

test('capitalize', async (t) => {
  await t.test('uppercases the first letter', () => {
    assert.equal(capitalize('hello'), 'Hello');
  });
  await t.test('leaves an already capitalized string alone', () => {
    assert.equal(capitalize('Hello'), 'Hello');
  });
  await t.test('returns an empty string unchanged', () => {
    assert.equal(capitalize(''), '');
  });
  await t.test('leaves a leading digit alone', () => {
    assert.equal(capitalize('1st place'), '1st place');
  });
});

test('slugify', async (t) => {
  await t.test('lowercases and drops punctuation', () => {
    assert.equal(slugify('Hello, World!'), 'hello-world');
  });
  await t.test('trims surrounding whitespace', () => {
    assert.equal(slugify('  Hello World  '), 'hello-world');
  });
  await t.test('collapses runs of spaces and hyphens', () => {
    assert.equal(slugify('a  --  b'), 'a-b');
  });
  await t.test('strips leading and trailing hyphens', () => {
    assert.equal(slugify('--draft--'), 'draft');
  });
});

test('truncate', async (t) => {
  await t.test('returns short strings unchanged', () => {
    assert.equal(truncate('Hello', 10), 'Hello');
  });
  await t.test('keeps a string exactly at the limit', () => {
    assert.equal(truncate('Hello', 5), 'Hello');
  });
  await t.test('cuts and appends an ellipsis', () => {
    assert.equal(truncate('Hello, World!', 8), 'Hello...');
  });
  await t.test('never exceeds the limit when max is tiny', () => {
    assert.equal(truncate('Hello', 3), '...');
    assert.equal(truncate('Hello', 2), '..');
  });
});

test('wordCount', async (t) => {
  await t.test('counts words separated by single spaces', () => {
    assert.equal(wordCount('one two three'), 3);
  });
  await t.test('treats any run of whitespace as one separator', () => {
    assert.equal(wordCount('  one\ttwo\n three  '), 3);
  });
  await t.test('returns 0 for empty or blank strings', () => {
    assert.equal(wordCount(''), 0);
    assert.equal(wordCount('   '), 0);
  });
});
