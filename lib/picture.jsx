import React from 'react';

export default function Picture() {
	return (
		<span style={{"color":"#000","position":"absolute","marginLeft":"2px","marginTop":"2px","width":"15px","height":"15px","borderRadius":"2px","border":"solid 1px currentColor"}}>
			<span style={{"position":"absolute","left":"2px","top":"2px","width":"2px","height":"2px","borderRadius":"50%","border":"solid 1px currentColor"}}/>
			<span style={{"position":"absolute","left":"2px","top":"9px","width":"12px","height":"8px","borderTop":"solid 1px currentColor","borderRight":"solid 1px currentColor","webkitTransform":"rotate(-45deg)","transform":"rotate(-45deg)"}}/>
			
		</span>
	);
}
		