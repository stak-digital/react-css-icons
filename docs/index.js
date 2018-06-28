import React from 'react';
import {render} from 'react-dom';
import copy from 'clipboard-copy';
import Components from './components.jsx';
import componentData from './data.json';

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<h1>
					React CSS Icons
				</h1>
				<p>
					Click an icon to copy the import to clipboard
				</p>
				{componentData.map(component => {
					return <span key={component.name} onClick={() => {
						copy(component.importCode);
					}} style={{cursor: 'pointer', width: 20, height: 20}}>
					{Components[component.importName]()}
				</span>;
				})}
			</div>
		);
	}
}

render(
	<App />,
	document.getElementById('root')
);