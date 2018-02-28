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
// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
let path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) 
{
	// HTML GET Requests
	// Below code handles when users "visit" a page.
	// In each of the below cases the user is shown an HTML page of content
	// --------------------------------------------------------------------------
	
	app.get("/survey", function(req, res) 
	{
		res.sendFile(path.join(__dirname, '../public/survey.html'));
	});

	// If no matching route is found default to home
	app.get("/home", function(req, res) 
	{
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});

	// If no matching route is found default to home
	app.get("*", function(req, res) 
	{
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});

	
};
