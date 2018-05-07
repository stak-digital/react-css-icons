import React from 'react';

export default function TargetSolid() {
	return (
		<span style={{"color":"#000","position":"absolute","marginLeft":"2px","marginTop":"2px","width":"15px","height":"15px","borderRadius":"50%","border":"solid 1px currentColor","backgroundColor":"currentColor"}}>
			<span style={{"position":"absolute","left":"-1px","top":"7px","width":"13px","height":"1px","color":"white","borderLeft":"solid 2px currentColor","borderRight":"solid 2px currentColor"}}/>
			<span style={{"position":"absolute","left":"7px","top":"-1px","width":"1px","height":"13px","color":"white","borderTop":"solid 2px currentColor","borderBottom":"solid 2px currentColor"}}/>
			
		</span>
	);
}
		