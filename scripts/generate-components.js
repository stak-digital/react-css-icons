const { mkdirSync, lstatSync, readdirSync, readFileSync, writeFileSync } = require('fs');
const { join } = require('path');
const pascalCase = require('pascal-case');
const kebabCase = require('kebab-case');

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
		const componentName = icon.iconName.replace('SrcIcons', '');
		return {
			name: componentName,
			code: `import React from 'react';

export default function ${componentName}() {
	return (
		<span>
			${icon.i !== '' ? `<span></span>` : ''}
		</span>
	);
}
		`
		};
	});

	const isLibFolderCreated = readdirSync('.').find(dir => dir === 'lib');

	if (!isLibFolderCreated) {
		mkdirSync('./lib');
	}

	components.forEach(component => {
		writeFileSync(`lib/${kebabCase(component.name).slice(1)}.jsx`, component.code);
	});
})();