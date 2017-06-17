import React, {Component} from 'react';

class Image extends Component {

	render() {
		return (
			<div className="agoodname-image">
				<img style={{width: "inherit", height: "inherit" }} src={this.props.link}/>
			</div>
		);
	}
}

Image.propTypes = {
	link: React.PropTypes.string
};

export default Image;