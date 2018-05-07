import React from 'react';

export default function CloudSolid() {
	return (
		<span style={{"color":"#000","position":"absolute","marginLeft":"1px","marginTop":"9px","width":"5px","height":"6px","borderRadius":"4px 0 0 4px","backgroundColor":"currentColor","borderLeft":"solid 1px currentColor","borderTop":"solid 1px currentColor","borderBottom":"solid 1px currentColor"}}>
			<span style={{"position":"absolute","top":"-7px","left":"4px","width":"12px","height":"12px","borderRadius":"50%","webkitTransform":"rotate(-45deg)","transform":"rotate(-45deg)","backgroundColor":"currentColor","borderLeft":"solid 1px transparent","borderRight":"solid 1px currentColor","borderTop":"solid 1px currentColor","borderBottom":"solid 1px currentColor"}}/>
			<span style={{"position":"absolute","top":"0","left":"4px","width":"7px","height":"6px","backgroundColor":"currentColor","borderBottom":"solid 1px currentColor"}}/>
			
		</span>
	);
}
		