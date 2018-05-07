'use strict';

const camelCase = require('camel-case');
const quote = require('quote')({quotes: '\''});
const jsStringEscape = require('js-string-escape');
const _ = require('lodash');

function cssLine2ReactJsInlineStyle(acc, line) {
	const parts = line.split(': ');
	const key = camelCase(parts[0]);
	let value = parts[1];

	if (key.includes('content')) {
		return acc;
	}

	if (value === '@light') {
		value = 'weight.light';
	} else if (value === '@regular') {
		value = 'weight.regular';
	} else if (value === '@medium') {
		value = 'weight.medium';
	} else if (isNaN(Number(value))) {
		value = jsStringEscape(value);
	}

	return {
		...acc,
		[key]: value
	};
}

function css2ReactJsInlineStyle(css) {
	const lines = css.split('\n');
	return _.compact(lines).slice(1, lines.length - 2).map(line => line.replace(';', '')).reduce(cssLine2ReactJsInlineStyle, {});
}

module.exports = css2ReactJsInlineStyle;