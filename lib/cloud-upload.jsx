import React from 'react';

export default function CloudUpload() {
	return (
		<span style={{"color":"#000","position":"absolute","marginLeft":"1px","marginTop":"9px","width":"5px","height":"6px","borderRadius":"4px 0 0 4px","borderLeft":"solid 1px currentColor","borderTop":"solid 1px currentColor","borderBottom":"solid 1px currentColor"}}>
			<span style={{"position":"absolute","top":"-7px","left":"4px","width":"12px","height":"12px","borderRadius":"50%","webkitTransform":"rotate(-45deg)","transform":"rotate(-45deg)","borderLeft":"solid 1px transparent","borderRight":"solid 1px currentColor","borderTop":"solid 1px currentColor","borderBottom":"solid 1px currentColor"}}/>
			<span style={{"position":"absolute","top":"5px","left":"5px","width":"9px","height":"2px","color":"#fff","backgroundColor":"currentColor"}}/>
			<span>
				<span style={{"position":"absolute","left":"3px","top":"4px","width":"4px","height":"4px","borderTop":"solid 1px currentColor","borderRight":"solid 1px currentColor","webkitTransform":"rotate(-45deg)","transform":"rotate(-45deg)"}}/>
				<span style={{"position":"absolute","top":"4px","left":"1px","width":"1px","height":"7px","backgroundColor":"currentColor","borderLeft":"solid 4px #fff","borderRight":"solid 4px #fff"}}/>
			</span>
		</span>
	);
}
		