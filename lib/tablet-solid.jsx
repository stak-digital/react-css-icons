import React from 'react';

export default function TabletSolid() {
	return (
		<span style={{"color":"#000","position":"absolute","marginLeft":"2px","marginTop":"1px","width":"15px","height":"14px","borderRadius":"2px","borderLeft":"solid 1px currentColor","borderRight":"solid 1px currentColor","borderTop":"solid 2px currentColor","borderBottom":"solid 3px currentColor"}}>
			<span style={{"position":"absolute","top":"1px","left":"0","height":"13px","width":"15px","border":"none"}}/>
			<span style={{"position":"absolute","bottom":"-2px","left":"6px","width":"3px","height":"1px","color":"white","backgroundColor":"currentColor"}}/>
			
		</span>
	);
}
		