import React from 'react';

class Button extends React.Component {

	render() {
		return (
			<button onClick = {this.props.onClick} >Refresh
				{this.props.children}
			</button>
		);
	}
}

export { Button };
//export default Button;