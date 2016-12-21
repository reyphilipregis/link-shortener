import React, {Component}  from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Links } 		   from '../../imports/collections/links';

class LinkList extends Component {
	constructor(props) {
		super(props);
	}

	renderRows() {
		return this.props.links.map( (link) => {
			const { url, token, clicks, _id } = link; 
			const shortLink 			 = `http://localhost:3000/${token}`;

			return (
				<tr key = { _id }>
					<td>{ url }</td>
					<td>
						<a target = "__blank" href = { shortLink }>{ shortLink }</a>
					</td>
					<td>{ clicks }</td>
				</tr>
			);
		} );
	}

	render() {
		return (
			<table className = "table">
				<thead>
					<tr>
						<th>URL</th>
						<th>Address</th>
						<th>Clicks</th>
					</tr>
				</thead>
				<tbody>
					{ this.renderRows() }
				</tbody>
			</table>
		);
	}
}

export default createContainer( () => {

	Meteor.subscribe('links');

	return { links: Links.find({}).fetch() };

}, LinkList );
