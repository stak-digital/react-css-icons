import React from 'react';

export default function SearchSolid() {
	return (
		<span style={{"color":"black","position":"absolute","marginTop":"2px","marginLeft":"3px","width":"12px","height":"12px","border":"solid 1px currentColor","borderRadius":"100%","webkitTransform":"rotate(-45deg)","transform":"rotate(-45deg)"}}>
			<span style={{"position":"absolute","top":"12px","left":"5px","width":"1px","height":"6px","backgroundColor":"currentColor"}}/>
			<span style={{"position":"absolute","left":"1px","top":"1px","width":"10px","height":"10px","backgroundColor":"currentColor","borderRadius":"50%"}}/>
			
		</span>
	);
}
		