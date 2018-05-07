import React from 'react';

export default function Outdent() {
	return (
		<span style={{"color":"#000","position":"absolute","marginLeft":"2px","marginTop":"6px","width":"17px","height":"8px","borderTop":"solid 1px currentColor","borderBottom":"solid 1px currentColor"}}>
			<span style={{"position":"absolute","top":"2px","right":"0","width":"11px","height":"2px","borderTop":"solid 1px currentColor","borderBottom":"solid 1px currentColor"}}/>
			<span style={{"position":"absolute","top":"1px","left":"-3px","width":"0","height":"0","borderTop":"solid 3px transparent","borderBottom":"solid 3px transparent","borderLeft":"solid 3px transparent","borderRight":"solid 3px currentColor"}}/>
			
		</span>
	);
}
		