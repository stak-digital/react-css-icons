import React from 'react';

export default function AudioSolid() {
	return (
		<span style={{"color":"#000","position":"absolute","marginLeft":"5px","marginTop":"8px","width":"9px","height":"7px","borderLeft":"solid 1px currentColor","borderRight":"solid 1px currentColor","borderBottom":"solid 1px currentColor","borderRadius":"0 0 50% 50%"}}>
			<span style={{"position":"absolute","left":"1px","top":"-6px","width":"5px","height":"10px","border":"solid 1px currentColor","borderRadius":"4px","backgroundColor":"currentColor"}}/>
			<span style={{"position":"absolute","left":"4px","bottom":"-4px","width":"1px","height":"4px","backgroundColor":"currentColor"}}/>
			
		</span>
	);
}
		