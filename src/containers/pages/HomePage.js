import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import TextEntry from "../../components/textEntry/TextEntry";
import logo from 'images/logo.png';
import Title from "../../components/title/Title";
import Carousel from "../../components/carousel/Carousel";

class HomePage extends Component {

	render() {
		return (
			<div className="content">
				<img style={{width: "10%"}} src={logo}/>
				<Title>Starting with React.JS</Title>
				<TextEntry title="Some Sample Content">
					<p>{this.props.sampleContent1}</p>
				</TextEntry>
				<TextEntry title="Some Sample Content">
					<p>{this.props.sampleContent2}</p>
				</TextEntry>
				<Carousel images={[
					"https://www.ccbi.ac.nz/wp-content/uploads/2015/02/Visit-New-Zealand-Landscape-With-Road-and-Snowy-Mountains-Southern-Alps-New-Zealand-1600x1047.jpg",
					"https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297426881001_5280178297001-vs.jpg",
					"http://www.slh.com/globalassets/country-pages/hero-images/new_zealand2.jpg",
					"http://www.abercrombiekent.co.uk/newzealand/images/Landscape-NewZealand-1024x460.jpg",
					"https://backroads-web.s3.amazonaws.com/images/search/thumbnail/new-zealand-walking-hiking-tour.jpg"
				]}/>
				<TextEntry title="Some Sample Content">
					<p>{this.props.sampleContent3}</p>

					<p>{this.props.sampleContent4}</p>
				</TextEntry>
			</div>
		);
	}

}

HomePage.propTypes = {
	sampleContent1: PropTypes.string,
	sampleContent2: PropTypes.string,
	sampleContent3: PropTypes.string,
	sampleContent4: PropTypes.string,
};

let mapStateToProps = function (state) {
	return {
		sampleContent1: state.sampleReducer.sampleContent1,
		sampleContent2: state.sampleReducer.sampleContent2,
		sampleContent3: state.sampleReducer.sampleContent3,
		sampleContent4: state.sampleReducer.sampleContent4,
	};
};

export default connect(mapStateToProps)(HomePage);