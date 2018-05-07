import React from 'react';

export default function MobileSolid() {
	return (
		<span style={{"color":"#000","position":"absolute","marginLeft":"4px","marginTop":"0px","width":"12px","height":"14px","borderRadius":"2px","borderLeft":"solid 1px currentColor","borderRight":"solid 1px currentColor","borderTop":"solid 3px currentColor","borderBottom":"solid 4px currentColor"}}>
			<span style={{"position":"absolute","left":"8px","top":"3px","width":"8px","height":"10px","color":"#fff","backgroundColor":"currentColor","borderRadius":"5px 0 0 5px"}}/>
			<span style={{"position":"absolute","bottom":"-3px","left":"5px","height":"2px","width":"2px","borderRadius":"50%","color":"white","backgroundColor":"currentColor"}}/>
			
		</span>
	);
}
		