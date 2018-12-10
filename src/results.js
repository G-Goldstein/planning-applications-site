import React, { Component } from 'react';
import Application from './application';
import InfiniteScroll from 'react-infinite-scroller';

class Results extends Component {
	constructor(props) {
		super(props);
		this.state = {
			results: [],
			hasMore: true
		}
		this.fetchPage = this.fetchPage.bind(this);
	}

	fetchPage(page) {
		let itemsOnPage = 25;
		let offset = (page-1)*itemsOnPage;
		fetch(`https://planning-applications-database.herokuapp.com/application?offset=${offset}&search=${this.props.search}`)
			.then(response =>
				{ response.json()
				.then(results => {
					let hasMore = (results.length >= itemsOnPage);
					this.setState({results: this.state.results.concat(results), hasMore: hasMore});
			})
		})
	}

	render() {
		let applications = this.state.results.map(result => <Application {...result} key={result.reference} />)
		let end = null;
		if (!this.state.hasMore) {
			end = <div className='text-center p-3 text-muted'>End of search</div>
		}
		return (
			<div>
				<InfiniteScroll
					loadMore={this.fetchPage}
					useWindow={true}
					hasMore={this.state.hasMore}
					threshold={500}
					key={this.props.search}
				>
					{applications}
				</InfiniteScroll>
				{end}
			</div>
		)
	}
}

export default Results;