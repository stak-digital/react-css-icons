import React from 'react';

export default function NavigateSolid() {
	return (
		<span style={{"color":"#000","position":"absolute","marginLeft":"6px","marginTop":"-1px","width":"14px","height":"18px","webkitTransform":"rotate(45deg)","transform":"rotate(45deg)"}}>
			<span style={{"position":"absolute","left":"0","top":"-17px","width":"0","height":"0","borderTop":"solid 18px transparent","borderBottom":"solid 18px currentColor","borderLeft":"solid 7px transparent","borderRight":"solid 7px transparent"}}/>
			<span style={{"position":"absolute","left":"0","top":"9px","width":"0","height":"0","color":"white","borderTop":"solid 5px transparent","borderBottom":"solid 5px currentColor","borderLeft":"solid 7px transparent","borderRight":"solid 7px transparent"}}/>
			
		</span>
	);
}
		