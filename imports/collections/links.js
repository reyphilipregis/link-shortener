import { Mongo } from 'meteor/mongo';

// run codes in a secure fashion
Meteor.methods( {
	'links.insert' : (url) => {
		console.log('attempting to save ' + url)
	}
} );

export const Links = new Mongo.Collection('links');
