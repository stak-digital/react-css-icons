import React from 'react';

export default function Mustache() {
	return (
		<span style={{"color":"#000","position":"absolute","width":"6px","height":"6px","borderRadius":"50%","boxShadow":"5px 8px 0 0 currentColor,  10px 8px 0 0 currentColor"}}>
			<span style={{"position":"absolute","left":"1px","top":"4px","width":"7px","height":"4px","borderRadius":"0 0 0 100%","border":"0 solid transparent","borderBottom":"6px solid currentColor","webkitTransformOrigin":"right 7px","transformOrigin":"right 7px","webkitTransform":"rotate(-40deg)","transform":"rotate(-40deg)"}}/>
			<span style={{"position":"absolute","left":"13px","top":"4px","width":"7px","height":"4px","border":"0 solid transparent","borderBottom":"6px solid currentColor","borderRadius":"0 0 100% 0","webkitTransformOrigin":"left 7px","transformOrigin":"left 7px","webkitTransform":"rotate(40deg)","transform":"rotate(40deg)"}}/>
			<span>
				<span style={{"position":"absolute","left":"13px","top":"6px","width":"6px","height":"3px","color":"white","border":"0 solid transparent","borderBottom":"4px solid currentColor","borderRadius":"0 0 100% 0","webkitTransformOrigin":"left 5px","transformOrigin":"left 5px","webkitTransform":"rotate(40deg)","transform":"rotate(40deg)"}}/>
				<span style={{"position":"absolute","left":"2px","top":"6px","width":"6px","height":"3px","color":"white","border":"0 solid transparent","borderBottom":"4px solid currentColor","borderRadius":"0 0 0 100%","webkitTransformOrigin":"right 5px","transformOrigin":"right 5px","webkitTransform":"rotate(-40deg)","transform":"rotate(-40deg)"}}/>
			</span>
		</span>
	);
}
		