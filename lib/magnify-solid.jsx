import React from 'react';

export default function MagnifySolid() {
	return (
		<span style={{"color":"#000","position":"absolute","marginTop":"2px","marginLeft":"3px","width":"12px","height":"12px","border":"solid 1px currentColor","backgroundColor":"currentColor","borderRadius":"100%","webkitTransform":"rotate(-45deg)","transform":"rotate(-45deg)"}}>
			<span style={{"position":"absolute","top":"12px","left":"5px","height":"6px","width":"1px","backgroundColor":"currentColor"}}/>
			
			<span>
				<span style={{"position":"absolute","width":"6px","height":"1px","color":"white","backgroundColor":"currentColor","webkitTransform":"rotate(90deg)","transform":"rotate(90deg)"}}/>
				<span style={{"position":"absolute","width":"6px","height":"1px","color":"white","backgroundColor":"currentColor"}}/>
			</span>
		</span>
	);
}
		