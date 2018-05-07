import React from 'react';

export default function GrinSolid() {
	return (
		<span style={{"color":"#000","position":"absolute","marginLeft":"2px","marginTop":"2px","width":"16px","height":"16px","borderRadius":"50%","border":"solid 1px currentColor","backgroundColor":"currentColor"}}>
			<span style={{"position":"absolute","left":"4px","top":"4px","width":"2px","height":"2px","borderRadius":"50%","color":"white","backgroundColor":"currentColor"}}/>
			<span style={{"position":"absolute","right":"4px","top":"4px","width":"2px","height":"2px","borderRadius":"50%","color":"white","backgroundColor":"currentColor"}}/>
			<span>
				
				<span style={{"position":"absolute","left":"3px","top":"0px","width":"2px","height":"4px","color":"white","borderLeft":"solid 1px currentColor","borderRight":"solid 1px currentColor"}}/>
			</span>
		</span>
	);
}
		