const { lstatSync, readdirSync, readFileSync } = require('fs');
const { join } = require('path');
const pascalCase = require('pascal-case');

const isDirectory = source => lstatSync(source).isDirectory();
const getDirectories = source => readdirSync(source).map(name => join(source, name)).filter(isDirectory);

(() => {
	const directories = getDirectories('./src/icons');
	const icons = directories.map(directory => {
		return {
			iconName: pascalCase(directory),
			after: readFileSync(`${directory}/after.css`, {encoding: 'utf-8'}),
			before: readFileSync(`${directory}/before.css`, {encoding: 'utf-8'}),
			i: readFileSync(`${directory}/i.css`, {encoding: 'utf-8'}),
			iAfter: readFileSync(`${directory}/i-after.css`, {encoding: 'utf-8'}),
			iBefore: readFileSync(`${directory}/i-before.css`, {encoding: 'utf-8'}),
			main: readFileSync(`${directory}/main.css`, {encoding: 'utf-8'}),
		}
	});

	const components = icons.map(icon => {
		return `
import React from 'react';

export default function ${icon.iconName.replace('SrcIcons', '')}() {
	return (
		<span />
	);
}
		`;
	});

	console.log(components);
})();