import React from 'react';

export default function Target() {
	return (
		<span style={{"color":"#000","position":"absolute","marginLeft":"2px","marginTop":"2px","width":"15px","height":"15px","borderRadius":"50%","border":"solid 1px currentColor"}}>
			<span style={{"position":"absolute","left":"-1px","top":"7px","width":"11px","height":"1px","borderLeft":"solid 3px currentColor","borderRight":"solid 3px currentColor"}}/>
			<span style={{"position":"absolute","left":"7px","top":"-1px","width":"1px","height":"11px","borderTop":"solid 3px currentColor","borderBottom":"solid 3px currentColor"}}/>
			
		</span>
	);
}
		