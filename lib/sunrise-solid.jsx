import React from 'react';

export default function SunriseSolid() {
	return (
		<span style={{"color":"#000","position":"absolute","marginLeft":"6px","marginTop":"9px","width":"6px","height":"6px","borderRadius":"50%","border":"1px solid currentColor","backgroundColor":"currentColor","borderBottom":"solid 1px transparent","boxShadow":"-8px 0 0 -3px currentColor,  8px 0 0 -3px currentColor,  0 -8px 0 -3px currentColor,  -6px -6px 0 -3px currentColor,  6px -6px 0 -3px currentColor"}}>
			<span style={{"position":"absolute","left":"-6px","top":"5px","width":"18px","height":"1px","backgroundColor":"currentColor","borderTop":"solid 1px #fff"}}/>
			
			<span>
				
				<span style={{"position":"absolute","left":"-1px","top":"-1px","width":"0","height":"0","borderBottom":"solid 2px currentColor","borderLeft":"solid 2px transparent","borderRight":"solid 2px transparent"}}/>
			</span>
		</span>
	);
}
		