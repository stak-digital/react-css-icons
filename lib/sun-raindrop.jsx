import React from 'react';

export default function SunRaindrop() {
	return (
		<span style={{"color":"#000","position":"absolute","marginLeft":"6px","marginTop":"6px","width":"6px","height":"6px","border":"1px solid currentColor","borderRadius":"50%","boxShadow":"-8px 0 0 -3px currentColor,  8px 0 0 -3px currentColor,  0 -8px 0 -3px currentColor,  0 8px 0 -3px currentColor,  -6px -6px 0 -3px currentColor,  -6px 6px 0 -3px currentColor,  6px -6px 0 -3px currentColor,  6px 6px 0 -3px currentColor"}}>
			<span style={{"position":"absolute","left":"3px","top":"3px","width":"8px","height":"8px","borderRadius":"50% 0 50% 50%","webkitTransform":"rotate(-45deg)","transform":"rotate(-45deg)","color":"#fff","backgroundColor":"currentColor"}}/>
			<span style={{"position":"absolute","left":"4px","top":"4px","width":"4px","height":"4px","borderRadius":"50% 0 50% 50%","border":"solid 1px currentColor","webkitTransform":"rotate(-45deg)","transform":"rotate(-45deg)"}}/>
			
		</span>
	);
}
		