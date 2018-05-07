import React from 'react';

export default function CloudLightning() {
	return (
		<span style={{"color":"#000","position":"absolute","marginLeft":"1px","marginTop":"9px","width":"5px","height":"6px","borderRadius":"4px 0 0 4px","borderLeft":"solid 1px currentColor","borderTop":"solid 1px currentColor","borderBottom":"solid 1px currentColor"}}>
			<span style={{"position":"absolute","top":"-7px","left":"4px","width":"12px","height":"12px","borderRadius":"50%","webkitTransform":"rotate(-45deg)","transform":"rotate(-45deg)","borderLeft":"solid 1px transparent","borderRight":"solid 1px currentColor","borderTop":"solid 1px currentColor","borderBottom":"solid 1px currentColor"}}/>
			<span style={{"position":"absolute","top":"5px","left":"5px","width":"9px","height":"2px","color":"#fff","backgroundColor":"currentColor"}}/>
			<span>
				<span style={{"position":"absolute","top":"-1px","left":"4px","width":"0","height":"0","borderLeft":"solid 4px currentColor","borderBottom":"solid 7px transparent"}}/>
				<span style={{"position":"absolute","top":"-6px","left":"2px","width":"0","height":"0","borderRight":"solid 4px currentColor","borderTop":"solid 7px transparent"}}/>
			</span>
		</span>
	);
}
		