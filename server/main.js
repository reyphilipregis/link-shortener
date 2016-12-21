import { Meteor } from 'meteor/meteor';
import { Links }  from '../imports/collections/links';

Meteor.startup(() => {
  
	// create a publication for the client-side (REACT) to subscribe
	Meteor.publish('links', function() {
		return Links.find({});
	} );

});
