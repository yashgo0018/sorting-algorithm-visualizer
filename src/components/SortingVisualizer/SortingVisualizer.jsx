import React from 'react';
import './SortingVisualizer.css';
import BubbleSort from '../../algorithms/BubbleSort';
import SelectiveSort from '../../algorithms/SelectiveSort';

import TopBar from '../TopBar/TopBar';
export default class SortingVisualizer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			array: []
		};
		this.update = this.update.bind(this);
	}

	componentDidMount() {
		this.update();
		window.addEventListener('resize', this.update);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.update);
	}

	update() {
		this.resetArray(
			window.innerWidth < 1500 ? parseInt(window.innerWidth / 10) : 150,
			parseInt((window.innerHeight * 3) / 5)
		);
	}

	bubbleSort() {
		BubbleSort(this.state.array, array => this.setArray(array));
	}

	selectiveSort() {
		SelectiveSort(this.state.array, array => this.setArray(array));
	}

	setArray(array) {
		this.setState({ array });
	}

	resetArray(noOfBars, maxHeight) {
		const newArray = [];
		for (let i = 0; i < noOfBars; i++) {
			newArray.push({
				n: Math.round(Math.random() * maxHeight),
				active: false
			});
		}
		this.setState({ array: newArray });
		// console.log(this.testAlgorithm(BubbleSort, newArray));
	}

	render() {
		const { array } = this.state;

		return (
			<div style={{ height: '100vh', overflow: 'hidden' }}>
				<TopBar
					reset={() => this.update()}
					bubbleSort={() => this.bubbleSort()}
					selectiveSort={() => this.selectiveSort()}
				></TopBar>
				<div className='showcase'>
					{array.map((value, idx) => (
						<div
							className={'array-bar' + (value.active ? ' active' : '')}
							key={idx}
							style={{ height: `${value.n}px` }}
						>
							.
						</div>
					))}
				</div>
			</div>
		);
	}

	testAlgorithm(algo, array) {
		console.log(this.state.array);
		let sorted = algo(array);
		return sorted === array.sort((a, b) => a - b);
	}
}
