import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import LinkCreate from './components/link_create';
import { Links } from '../imports/collections/links';

class App extends Component {
	render () {
		return (
			<h1>
				<Header />
				<LinkCreate />
			</h1>
		);
	}
}

Meteor.startup( () => {
	ReactDOM.render( <App />, document.querySelector('.render-target') );
} )
