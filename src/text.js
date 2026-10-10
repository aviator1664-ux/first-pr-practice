'use strict';

/**
 * Uppercase the first character of a string.
 * @param {string} str
 * @returns {string}
 */
function capitalize(str) {
  if (str.length === 0) return str;
  return str[0].toUpperCase() + str.slice(1);
}

/**
 * Turn a string into a URL-friendly slug.
 * "Hello, World!" -> "hello-world"
 * @param {string} str
 * @returns {string}
 */
function slugify(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/[\s-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Shorten a string to at most `max` characters, ending with "..." when cut.
 * @param {string} str
 * @param {number} max
 * @returns {string}
 */
function truncate(str, max) {
  if (str.length <= max) return str;
  if (max <= 3) return '.'.repeat(max);
  return str.slice(0, max - 3) + '...';
}

/**
 * Count whitespace-separated words.
 * @param {string} str
 * @returns {number}
 */
function wordCount(str) {
  const trimmed = str.trim();
  if (trimmed === '') return 0;
  return trimmed.split(/\s+/).length;
}

module.exports = { capitalize, slugify, truncate, wordCount };
