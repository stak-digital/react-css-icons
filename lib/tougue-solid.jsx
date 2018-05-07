import React from 'react';

export default function TougueSolid() {
	return (
		<span style={{"color":"#000","position":"absolute","marginLeft":"2px","marginTop":"2px","width":"16px","height":"16px","borderRadius":"50%","border":"solid 1px currentColor","backgroundColor":"currentColor"}}>
			<span style={{"position":"absolute","left":"4px","top":"4px","width":"2px","height":"2px","borderRadius":"50%","color":"white","backgroundColor":"currentColor"}}/>
			<span style={{"position":"absolute","right":"4px","top":"4px","width":"2px","height":"2px","borderRadius":"50%","color":"white","backgroundColor":"currentColor"}}/>
			<span>
				
				<span style={{"position":"absolute","top":"-1px","right":"0px","width":"2px","height":"2px","borderRadius":"2px","color":"white","borderTop":"solid 1px transparent","borderRight":"solid 1px transparent","borderBottom":"solid 1px currentColor","borderLeft":"solid 1px currentColor","webkitTransform":"rotate(-45deg)","transform":"rotate(-45deg)"}}/>
			</span>
		</span>
	);
}
		