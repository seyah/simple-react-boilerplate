import React, {Component} from 'react';
import Image from "../image/Image";
import './Carousel.scss';
import Panel from "../panel/Panel";
import TextEntry from "../textEntry/TextEntry";
import Button from "../button/Button";

class Carousel extends Component {

	constructor(props) {
		super(props);

		this.tick = this.tick.bind(this);
		this.incrementIndex = this.incrementIndex.bind(this);

		this.state = {
			activeIndex: 0
		}
	}

	componentDidMount() {
		this.timer = setInterval(this.tick, 5000);
	}

	componentWillUnmount(){
		clearInterval(this.timer);
	}

	tick(){
		let {activeIndex} = this.state;

		this.setState({
			activeIndex: activeIndex >= this.props.images.length - 1 ? 0 : activeIndex + 1
		})
	}

	incrementIndex(k){
		clearInterval(this.timer);
		let x = this.state.activeIndex + (k >= 0 ? 1 : -1);
		if(x >= this.props.images.length - 1){
			x = 0;
		} else if (x < 0) {
			x = this.props.images.length -1;
		}
		this.setState({
			activeIndex: x
		})
	}

	render() {
		return (
			<div className="carousel">
				<Image link={this.props.images[this.state.activeIndex]}/>
				<Panel>
					<TextEntry title="New Zealand">
						Some sample co0ntent...
					</TextEntry>
					<ControlPanel onClick={this.incrementIndex}/>
				</Panel>
			</div>
		);
	}
}

Carousel.propTypes = {
	images: React.PropTypes.array
};

export default Carousel;

class ControlPanel extends Component {

	render() {
		return (
			<div className="control-panel">
				<Button text={"<"} onClick={() => this.props.onClick(-1)}/>
				<Button text={">"} onClick={() => this.props.onClick(1)}/>
			</div>
		);
	}

}

ControlPanel.propTypes = {
	onClick: React.PropTypes.func
};