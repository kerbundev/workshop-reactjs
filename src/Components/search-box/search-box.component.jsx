import React, { Component } from 'react';
import './seach-box.styles.scss';

import CustomButton from '../custom-button/custom-button.component';

class SearchBox extends Component {
	handleClick = () => {
		if (this.refs.searchValue.value !== '') {
			this.props.getInputText(this.refs.searchValue.value);
		} else {
			this.props.getInputText('');
		}
	};

	render() {
		return (
			<div className="search-box">
				<input
					className="search"
					type="search"
					placeholder="Search"
					ref="searchValue"
				/>
				<CustomButton handleClick={this.handleClick} type="submit">
					Search
				</CustomButton>
			</div>
		);
	}
}
export default SearchBox;