import React, {Component} from 'react';
import "./Button.scss";

class Button extends Component {

	render() {
		let {text, onClick} = this.props;

		return (
			<div className="button" onClick={onClick}>
				{text}
			</div>
		);
	}
}

Button.propTypes = {
	text: React.PropTypes.string,
	onClick: React.PropTypes.func
};

export default Button;