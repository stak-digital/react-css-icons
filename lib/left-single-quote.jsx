import React from 'react';

export default function LeftSingleQuote() {
	return (
		<span style={{"color":"#000","position":"absolute","marginLeft":"6px","marginTop":"5px","width":"9px","height":"11px"}}>
			<span style={{"position":"absolute","top":"3px","width":"6px","height":"6px","borderRadius":"50%","border":"solid 1px currentColor"}}/>
			<span style={{"position":"absolute","left":"0","top":"0","width":"12px","height":"12px","borderRadius":"50%","borderLeft":"solid 1px currentColor","borderTop":"solid 1px transparent","borderRight":"solid 1px transparent","borderBottom":"solid 1px transparent","webkitTransform":"rotate(45deg)","transform":"rotate(45deg)"}}/>
			
		</span>
	);
}
		