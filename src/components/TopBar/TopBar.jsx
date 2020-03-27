import React from 'react';
import './TopBar.css';

export default class TopBar extends React.Component {
	render() {
		return (
			<header>
				<div className='heading'>Sorting Algorithm Visualizer</div>
				<div className='action'>
					<button onClick={this.props.reset}>Generate New Array</button>
					{/* <button onClick={this.props.mergeSort}>Merge Sort</button> */}
					<button onClick={this.props.bubbleSort}>Bubble Sort</button>
					<button onClick={this.props.selectiveSort}>Selective Sort</button>
					<button onClick={this.props.quickSort}>Quick Sort</button>
				</div>
			</header>
		);
	}
}
