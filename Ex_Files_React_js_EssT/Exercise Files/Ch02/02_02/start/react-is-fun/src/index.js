import React from 'react'
import ReactDom from 'react-dom'

var style = {
	backgroundColor: 'purple',
	color: 'white',
	fontFamily: 'Arial',
}

/*const title = React.createElement(
		'h1', 
		{id: 'title', className: 'header', style: style},
		'Hello World'
	)
*/

ReactDom.render(
	<div style={style}> 
	
	<h1> 'Hello World' </h1> 
	<p> 'Were glad youre here' </p>
	</div>,

	document.getElementById('root')
	)