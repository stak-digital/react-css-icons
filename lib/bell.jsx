import React from 'react';

export default function Bell() {
	return (
		<span style={{"color":"#000","position":"absolute","marginLeft":"5px","marginTop":"2px","width":"9px","height":"10px","border":"solid 1px currentColor","borderRadius":"5px 5px 0 0"}}>
			<span style={{"position":"absolute","bottom":"-5px","left":"2px","width":"3px","height":"3px","borderRadius":"50%","border":"solid 1px currentColor"}}/>
			<span style={{"position":"absolute","bottom":"-2px","left":"-3px","width":"15px","height":"0px","borderTop":"solid 1px currentColor","borderBottom":"solid 1px white"}}/>
			
		</span>
	);
}
		