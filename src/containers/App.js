import React, { Component } from 'react';
import Deck from '../components/Deck';
import Slide from '../components/Slide';
import slides from '../components/slides/index';
import { connect } from 'react-redux';
import { nextSlide, prevSlide } from '../actions/SlideActions';
import './normalize.less';

const LEFT_ARROW = 37,
	RIGHT_ARROW = 39;

@connect((state) => ({
	currentSlide: state.currentSlide
}), {
	nextSlide,
	prevSlide
})
export default class App extends Component {
	constructor(props) {
		super(props);
		this.handleKeyDown = this.handleKeyDown.bind(this);
	}

	componentDidMount() {
		window.addEventListener('keydown', this.handleKeyDown);
	}
	componentWillUnmount() {
		window.removeEventListener('keydown', this.handleKeyDown);
	}

	handleKeyDown(e) {
		const { currentSlide, nextSlide, prevSlide } = this.props;
		switch (e.keyCode) {
			case LEFT_ARROW:
				if (currentSlide !== 0) {
					prevSlide()
				}
				break;
			case RIGHT_ARROW:
				if (currentSlide < slides.length - 1) {
					nextSlide();
				}
				break;
		}
	}

	render() {
		return (
			<div>
				<Deck currentSlide={this.props.currentSlide}>
					{this.renderSlides()}
				</Deck>
			</div>
		);
	}

	renderSlides() {
		return slides.map((content, index) =>
				<Slide key={index}>{content}</Slide>
		);
	}
}

