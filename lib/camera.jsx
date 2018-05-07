import React from 'react';

export default function Camera() {
	return (
		<span style={{"color":"#000","position":"absolute","marginLeft":"2px","marginTop":"5px","width":"16px","height":"10px","borderRadius":"1px","border":"solid 1px currentColor"}}>
			<span style={{"position":"absolute","left":"5px","top":"2px","width":"4px","height":"4px","borderRadius":"3px","border":"solid 1px currentColor"}}/>
			<span style={{"position":"absolute","right":"2px","top":"-2px","width":"4px","height":"1px","borderRadius":"1px 1px 0 0","backgroundColor":"currentColor"}}/>
			
		</span>
	);
}
		