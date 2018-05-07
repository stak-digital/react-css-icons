import React from 'react';

export default function Retweet() {
	return (
		<span style={{"color":"#000","position":"absolute","marginLeft":"3px","marginTop":"5px","width":"13px","height":"9px","borderRadius":"1px","border":"solid 1px currentColor"}}>
			<span style={{"position":"absolute","left":"-3px","top":"-2px","width":"0","height":"0","borderTop":"solid 3px white","borderBottom":"solid 3px currentColor","borderLeft":"solid 3px white","borderRight":"solid 3px white"}}/>
			<span style={{"position":"absolute","right":"-3px","bottom":"-2px","width":"0","height":"0","borderTop":"solid 3px currentColor","borderBottom":"solid 3px white","borderLeft":"solid 3px white","borderRight":"solid 3px white"}}/>
			
		</span>
	);
}
		