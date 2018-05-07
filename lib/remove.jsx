import React from 'react';

export default function Remove() {
	return (
		<span style={{"color":"#000","position":"absolute","marginLeft":"3px","marginTop":"10px"}}>
			<span style={{"position":"absolute","width":"15px","height":"1px","backgroundColor":"currentColor","webkitTransform":"rotate(45deg)","transform":"rotate(45deg)"}}/>
			<span style={{"position":"absolute","width":"15px","height":"1px","backgroundColor":"currentColor","webkitTransform":"rotate(-45deg)","transform":"rotate(-45deg)"}}/>
			
		</span>
	);
}
		