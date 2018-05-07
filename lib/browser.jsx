import React from 'react';

export default function Browser() {
	return (
		<span style={{"color":"#000","position":"absolute","marginLeft":"2px","marginTop":"2px","width":"15px","height":"15px","borderRadius":"50%","border":"solid 1px currentColor"}}>
			<span style={{"position":"absolute","left":"1px","top":"1px","width":"11px","height":"11px","borderRadius":"85% 15%","webkitTransform":"rotate(-45deg)","transform":"rotate(-45deg)","border":"solid 1px currentColor"}}/>
			<span style={{"position":"absolute","top":"7px","width":"15px","height":"1px","backgroundColor":"currentColor"}}/>
			
		</span>
	);
}
		