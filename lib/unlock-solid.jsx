import React from 'react';

export default function UnlockSolid() {
	return (
		<span style={{"color":"#000","position":"absolute","marginLeft":"3px","marginTop":"10px","width":"13px","height":"6px","borderRadius":"1px","border":"solid 1px currentColor","backgroundColor":"currentColor"}}>
			<span style={{"position":"absolute","left":"3px","top":"-8px","width":"5px","height":"3px","borderRadius":"4px 4px 0 0","borderTop":"solid 1px currentColor","borderLeft":"solid 1px currentColor","borderRight":"solid 1px currentColor"}}/>
			<span style={{"position":"absolute","left":"3px","top":"-4px","width":"1px","height":"3px","backgroundColor":"currentColor"}}/>
			
		</span>
	);
}
		