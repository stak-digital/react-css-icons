import React from 'react';

export default function Heart() {
	return (
		<span style={{"color":"#000","position":"absolute","marginTop":"6px","marginLeft":"5px","width":"9px","height":"9px","borderLeft":"solid 1px currentColor","borderBottom":"solid 1px currentColor","webkitTransform":"rotate(-45deg)","transform":"rotate(-45deg)"}}>
			<span style={{"position":"absolute","top":"-5px","left":"-1px","width":"8px","height":"5px","borderRadius":"5px 5px 0 0","borderTop":"solid 1px currentColor","borderLeft":"solid 1px currentColor","borderRight":"solid 1px currentColor"}}/>
			<span style={{"position":"absolute","top":"0px","left":"8px","width":"5px","height":"8px","borderRadius":"0 5px 5px 0","borderTop":"solid 1px currentColor","borderRight":"solid 1px currentColor","borderBottom":"solid 1px currentColor"}}/>
			
		</span>
	);
}
		