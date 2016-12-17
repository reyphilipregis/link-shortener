import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';

class App extends Component {
	render () {
		return (
			<h1>
				<Header />
			</h1>
		);
	}
}

Meteor.startup(() => {
	ReactDOM.render(<App />, document.querySelector('.render-target'));
})
