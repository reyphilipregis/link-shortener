import { Meteor }   from 'meteor/meteor';
import { Links }    from '../imports/collections/links';
import { WebApp }   from 'meteor/webapp';
import ConnectRoute from 'connect-route';

Meteor.startup(() => {
  
	// create a publication for the client-side (REACT) to subscribe
	Meteor.publish('links', function() {
		return Links.find({});
	} );

});


const middleware = ConnectRoute( function (router) {
	router.get('/:token', (req, res) => {
		console.log(req.params.token);
		res.end('====');
	} );
} );

WebApp.connectHandlers.use( middleware );
