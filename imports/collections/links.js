import { Mongo } from 'meteor/mongo';
import validUrl from 'valid-url';
import {check, Match } from 'meteor/check';

// run codes in a secure fashion
Meteor.methods( {
	'links.insert' : (url) => {
		
		// validating the url
		check(url, 
			  Match.Where( ( url ) => { 
			  		return validUrl.isUri(url) 
			  	}
			  )
		);
	}
} );

export const Links = new Mongo.Collection('links');
