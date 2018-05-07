import React from 'react';

export default function Link() {
	return (
		<span style={{"color":"#000","position":"absolute","marginLeft":"8px","marginTop":"10px","width":"7px","height":"1px","backgroundColor":"currentColor","webkitTransform":"rotate(-45deg)","transform":"rotate(-45deg)"}}>
			<span style={{"position":"absolute","top":"-3px","left":"-7px","width":"8px","height":"5px","borderRadius":"2px","border":"solid 1px currentColor"}}/>
			<span style={{"position":"absolute","top":"-3px","right":"-7px","width":"8px","height":"5px","borderRadius":"2px","border":"solid 1px currentColor"}}/>
			
		</span>
	);
}
		