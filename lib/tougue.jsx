import React from 'react';

export default function Tougue() {
	return (
		<span style={{"color":"#000","position":"absolute","marginLeft":"2px","marginTop":"2px","width":"16px","height":"16px","borderRadius":"50%","border":"solid 1px currentColor"}}>
			<span style={{"position":"absolute","left":"3px","top":"3px","width":"2px","height":"2px","borderRadius":"50%","border":"solid 1px currentColor"}}/>
			<span style={{"position":"absolute","right":"3px","top":"3px","width":"2px","height":"2px","borderRadius":"50%","border":"solid 1px currentColor"}}/>
			<span>
				
				<span style={{"position":"absolute","top":"-1px","right":"0px","width":"2px","height":"2px","borderRadius":"2px","borderTop":"solid 1px transparent","borderRight":"solid 1px transparent","borderBottom":"solid 1px currentColor","borderLeft":"solid 1px currentColor","webkitTransform":"rotate(-45deg)","transform":"rotate(-45deg)"}}/>
			</span>
		</span>
	);
}
		