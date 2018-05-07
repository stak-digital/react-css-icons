import React from 'react';

export default function CardSolid() {
	return (
		<span style={{"color":"#000","position":"absolute","marginLeft":"2px","marginTop":"4px","width":"15px","height":"10px","borderRadius":"1px","border":"solid 1px currentColor","backgroundColor":"currentColor"}}>
			<span style={{"position":"absolute","top":"1px","left":"-1px","width":"17px","height":"2px","color":"white","backgroundColor":"currentColor"}}/>
			<span style={{"position":"absolute","right":"1px","bottom":"2px","width":"4px","height":"1px","color":"white","backgroundColor":"currentColor"}}/>
			
		</span>
	);
}
		