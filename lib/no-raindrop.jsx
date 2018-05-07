import React from 'react';

export default function NoRaindrop() {
	return (
		<span style={{"color":"#000","position":"absolute","marginLeft":"5px","marginTop":"5px","width":"10px","height":"10px","border":"solid 1px currentColor","borderRadius":"6px 6px 6px 0","webkitTransform":"rotate(135deg)","transform":"rotate(135deg)"}}>
			
			<span style={{"position":"absolute","top":"5px","left":"-5px","width":"19px","height":"1px","backgroundColor":"currentColor"}}/>
			
		</span>
	);
}
		