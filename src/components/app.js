import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Search from './search';
import SearchResult from './search-result';


export default class App extends Component {
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Router onChange={this.handleRoute}>
					<Search path="/search/"/>
					<SearchResult path="/search-result"/>
				</Router>
			</div>
		);
	}
}
