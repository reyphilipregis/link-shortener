import { Mongo } from 'meteor/mongo';
import validUrl from 'valid-url';
import {check, Match } from 'meteor/check';

// run codes in a secure fashion
Meteor.methods( {
	'links.insert' : (url) => {
		
		// validating the url
		check(
				url, 
				Match.Where( ( url ) => { 
			  		return validUrl.isUri(url) 
			  	}
			)
		);

		// generate the token
		const token = Math.random().toString(35).slice(-5);
		Links.insert( 
			{ 
				url, token, clicks : 0
			}
		);
	}
} );

export const Links = new Mongo.Collection('links');
