const { mkdirSync, lstatSync, readdirSync, readFileSync, writeFileSync } = require('fs');
const { join } = require('path');
const convertStyles = require('./convert-styles');
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
		const componentFileName = `${kebabCase(componentName).slice(1)}.jsx`;

		return {
			name: componentName,
			code: `import React from 'react';

export default function ${componentName}() {
	return (
		<span style={${JSON.stringify(convertStyles(icon.main))}}>
			${icon.before !== '' ? `<span style={${JSON.stringify(convertStyles(icon.before))}}/>` : ''}
			${icon.after !== '' ? `<span style={${JSON.stringify(convertStyles(icon.after))}}/>` : ''}
			${icon.i !== '' ? `<span>
				${icon.iAfter !== '' ? `<span style={${JSON.stringify(convertStyles(icon.iAfter))}}/>` : ''}
				${icon.iBefore !== '' ? `<span style={${JSON.stringify(convertStyles(icon.iBefore))}}/>` : ''}
			</span>` : ''}
		</span>
	);
}
		`,
			fileName: componentFileName,
			importName: `${componentName}Icon`,
			importCode: `import ${componentName}Icon from 'react-css-icons/lib/${componentFileName}'`,
		};
	});

	const isLibFolderCreated = readdirSync('.').find(dir => dir === 'lib');

	if (!isLibFolderCreated) {
		mkdirSync('./lib');
	}

	components.forEach(component => {
		writeFileSync(`lib/${kebabCase(component.name).slice(1)}.jsx`, component.code);
	});

	writeFileSync('docs/src/data.json', JSON.stringify(components, null, '\t'));

	const exportedComponents = `
${components.reduce((acc, curr) => {
	return `${acc}\nimport ${curr.importName} from '../../lib/${curr.fileName}'`;	
}, '')}
		
export default {
	${components.reduce((acc, curr) => {
		return `${acc}\n\t${curr.importName},`;	
	}, '')}
};`;

	writeFileSync('docs/src/components.jsx', exportedComponents);
})();