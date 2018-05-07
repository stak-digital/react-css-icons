import React from 'react';

export default function FloatSolid() {
	return (
		<span style={{"color":"#000","position":"absolute","marginLeft":"2px","marginTop":"2px","width":"7px","height":"7px","borderRadius":"50%","border":"solid 5px currentColor"}}>
			<span style={{"position":"absolute","top":"3px","left":"-5px","width":"17px","height":"1px","webkitTransform":"rotate(-45deg)","transform":"rotate(-45deg)","color":"white","backgroundColor":"currentColor"}}/>
			<span style={{"position":"absolute","top":"3px","left":"-5px","width":"17px","height":"1px","webkitTransform":"rotate(45deg)","transform":"rotate(45deg)","color":"white","backgroundColor":"currentColor"}}/>
			
		</span>
	);
}
		