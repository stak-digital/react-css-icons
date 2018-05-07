import React from 'react';
import {render} from 'react-dom';
import Battery from '../lib/battery.jsx';
import BatteryFull from '../lib/battery-solid.jsx';
import Card from '../lib/card.jsx';
import Camera from '../lib/camera.jsx';
import Relieved from '../lib/relieved-smiley.jsx';

function App() {
	return (
		<div className="container">
			<Battery />
			<BatteryFull />
			<Card />
			<Camera />
			<Relieved />
		</div>
	);
}

render(
	<App />,
	document.getElementById('root')
);