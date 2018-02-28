/***********************************************************************
 * Copyright (c) 2018 Charles W. Roberts
 * All Rights Reserved
 *
 * No portion of this code may be copied or modified without the
 * prior written permission of Charles Roberts.
 *
 ***********************************************************************/

/**
 * @file Contains the api routes of the webserver
 * @author Charles Roberts
 * @copyright Charles Roberts 2018
 */

"use strict";

//var path = require('path');
//
let friends = require('../data/friends.js');


class Test
{
	constructor()
	{
		this.text = "hello";
	}
}

let testObject = new Test();

 module.exports = function(app) 
 {

	// API GET Requests
	// Below code handles when users "visit" a page.
	// In each of the below cases when a user visits a link
	// (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
	// ---------------------------------------------------------------------------
	// Total list of friend entries
	app.get('/api/friends', function(req, res) {
		res.json(friends);
	});


	// API POST Requests
	// Below code handles when a user submits a form and thus submits data to the server.
	// In each of the below cases, when a user submits form data (a JSON object)
	// ...the JSON is pushed to the appropriate JavaScript array
	// (ex. User fills out a reservation request... this data is then sent to the server...
	// Then the server saves the data to the tableData array)
	// ---------------------------------------------------------------------------
	
	function doApiFriendsPost(req, res)
	{
		// Capture the user input object
		let userInput  = req.body;
		let i          = 0;
		let j          = 0;
		let answers    = userInput['scores[]'];
		let matchName  = "";
		let matchPhoto = "";

		let winningScore = null;

		// Look at all the profiles
		for(i=0; i < friends.length; ++i)
		{
			let matchScore = 0;

			// Look at all the answers
			for(j = 0; j < 5; ++ j)
			{
				matchScore += Math.abs( friends[i].scores[j] - answers[j] );

			} // End of for(j = 0; j < userInput.scores.length; ++ j)

			if( (winningScore === null) || (matchScore < winningScore) )
			{
				winningScore = matchScore;
				matchName = friends[i].name;
				matchPhoto = friends[i].photo;
			}

		} // End of for(i=0; i < friends.length; ++i)

		// Send appropriate response
		res.json({status: 'OK', 'name': matchName, 'photo': matchPhoto});


	} // End of doApiFriendsPost()

	app.post('/api/friends', doApiFriendsPost ); 
	

};

  

  
 

