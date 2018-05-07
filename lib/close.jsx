import React from 'react';

export default function Close() {
	return (
		<span style={{"color":"#000","position":"absolute","marginTop":"0","marginLeft":"0","width":"21px","height":"21px"}}>
			<span style={{"position":"absolute","top":"10px","width":"21px","height":"1px","backgroundColor":"currentColor","webkitTransform":"rotate(-45deg)","transform":"rotate(-45deg)"}}/>
			<span style={{"position":"absolute","top":"10px","width":"21px","height":"1px","backgroundColor":"currentColor","webkitTransform":"rotate(45deg)","transform":"rotate(45deg)"}}/>
			
		</span>
	);
}
		