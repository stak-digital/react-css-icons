import React from 'react';

export default function Focus() {
	return (
		<span style={{"color":"#000","position":"absolute","marginLeft":"2px","marginTop":"2px","width":"15px","height":"15px","borderRadius":"1px","border":"solid 1px currentColor"}}>
			<span style={{"position":"absolute","left":"3px","top":"-2px","width":"9px","height":"19px","color":"white","backgroundColor":"currentColor","webkitTransformOrigin":"center","transformOrigin":"center"}}/>
			<span style={{"position":"absolute","left":"3px","top":"-2px","width":"9px","height":"19px","color":"white","backgroundColor":"currentColor","webkitTransformOrigin":"center","transformOrigin":"center","webkitTransform":"rotate(90deg)","transform":"rotate(90deg)"}}/>
			
		</span>
	);
}
		