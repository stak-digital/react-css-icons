import React from 'react';

export default function TagSolid() {
	return (
		<span style={{"color":"#000","position":"absolute","marginLeft":"4px","marginTop":"3px","width":"7px","height":"7px","borderRadius":"1px 1px 1px 0","borderLeft":"solid 1px currentColor","borderTop":"solid 1px currentColor","backgroundColor":"currentColor"}}>
			<span style={{"position":"absolute","left":"1px","top":"1px","width":"9px","height":"10px","borderRadius":"1px","borderLeft":"solid 1px currentColor","borderRight":"solid 1px currentColor","borderBottom":"solid 1px currentColor","backgroundColor":"currentColor","webkitTransform":"rotate(-45deg)","transform":"rotate(-45deg)"}}/>
			<span style={{"position":"absolute","left":"3px","top":"3px","width":"2px","height":"2px","borderRadius":"50%","color":"white","backgroundColor":"currentColor"}}/>
			
		</span>
	);
}
		