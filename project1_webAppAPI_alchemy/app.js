/**
   Copyright 2014 AlchemyAPI

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/


var express = require('express');
var consolidate = require('consolidate');

var app = express();
var server = require('http').createServer(app);

//Create the AlchemyAPI object
var AlchemyAPI = require('./alchemyapi');
var alchemyapi = new AlchemyAPI();

// all environments
app.engine('dust',consolidate.dust);
app.set('views',__dirname + '/views');
app.set('view engine', 'dust');
app.set('port', process.env.PORT || 3000);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', example);



var port = process.env.PORT || 3000;
server.listen(port, function(){
	console.log('Express server listening on port ' + port);
	console.log('To view the example, point your favorite browser to: localhost:3000'); 
});



var demo_text = "Dear all I am writing to encourage you to submit work for the Downtown Digital Project event on Thursday, April 16th. This is a one-night showcase of digital media work at the Center for Craft, Creativity & Design’s outdoor space in large digital projection format. Some of you might be familiar with outdoor projections and digital mappings, this event is the first of it’s kind happening in downtown Asheville. An unique opportunity to showcase your work with the creative circle, friends and families in the Asheville community. Here is a link to the press release and the RFP http://www.ashevilledowntown.org/ada-seeks-digital-media-artists-projection-showcase The application process is very simple and straightforward. Let me know if you have any questions. Looking forward to seeing you and your work there. The Asheville Downtown Association is seeking digital media artists to apply for Downtown Digital: A New Media Arts Showcase. Downtown Digital will feature works by digital media artists in a one-night showcase at the Center for Craft, Creativity & Design’s outdoor space on Thursday, April 16. Student, emerging or professional artists may apply to be featured at the event. Media submitted should last no longer than 12 minutes. Judges from the Asheville Area Arts Council, UNCA, Center for Craft, Creativity & Design and the Asheville Downtown Association will select entries based on quality of work, creativity and overall fit in the display. Please send work or a sample of work along with this completed application via YouTube or Vimeo by March 27 to submit@ashevilledowntown.org. Once artists are notified of their acceptance, a link to upload files will be sent. For more information, contact Jamie Carpenter, event and operations manager, atjamie@ashevilledowntown.org. best, Lei";
var demo_url = 'http://www.npr.org/2013/11/26/247336038/dont-stuff-the-turkey-and-other-tips-from-americas-test-kitchen';
var demo_html = '<html><head><title>Node.js Demo | AlchemyAPI</title></head><body><h1>Did you know that AlchemyAPI works on HTML?</h1><p>Well, you do now.</p></body></html>';


function example(req, res) {
	var output = {};

	//Start the analysis chain
	entities(req, res, output);
}


function entities(req, res, output) {
	alchemyapi.entities('text', demo_text,{ 'sentiment':1 }, function(response) {
		output['entities'] = { text:demo_text, response:JSON.stringify(response,null,4), results:response['entities'] };
		keywords(req, res, output);
	});
}


function keywords(req, res, output) {
	alchemyapi.keywords('text', demo_text, { 'sentiment':1 }, function(response) {
		output['keywords'] = { text:demo_text, response:JSON.stringify(response,null,4), results:response['keywords'] };
		concepts(req, res, output);
	});
}


function concepts(req, res, output) {
	alchemyapi.concepts('text', demo_text, { 'showSourceText':1 }, function(response) {
		output['concepts'] = { text:demo_text, response:JSON.stringify(response,null,4), results:response['concepts'] };
		sentiment(req, res, output);
	});
}


function sentiment(req, res, output) {
	alchemyapi.sentiment('html', demo_html, {}, function(response) {
		output['sentiment'] = { html:demo_html, response:JSON.stringify(response,null,4), results:response['docSentiment'] };
		text(req, res, output);
	});
}


function text(req, res, output) {
	alchemyapi.text('url', demo_url, {}, function(response) {
		output['text'] = { url:demo_url, response:JSON.stringify(response,null,4), results:response };
		author(req, res, output);
	});
}


function author(req, res, output) {
	alchemyapi.author('url', demo_url, {}, function(response) {
		output['author'] = { url:demo_url, response:JSON.stringify(response,null,4), results:response };
		language(req, res, output);
	});
}


function language(req, res, output) {
	alchemyapi.language('text', demo_text, {}, function(response) {
		output['language'] = { text:demo_text, response:JSON.stringify(response,null,4), results:response };
		title(req, res, output);
	});
}


function title(req, res, output) {
	alchemyapi.title('url', demo_url, {}, function(response) {
		output['title'] = { url:demo_url, response:JSON.stringify(response,null,4), results:response };
		relations(req, res, output);
	});
}


function relations(req, res, output) {
	alchemyapi.relations('text', demo_text, {}, function(response) {
		output['relations'] = { text:demo_text, response:JSON.stringify(response,null,4), results:response['relations'] };
		category(req, res, output);
	});
}


function category(req, res, output) {
	alchemyapi.category('text', demo_text, {}, function(response) {
		output['category'] = { text:demo_text, response:JSON.stringify(response,null,4), results:response };
		feeds(req, res, output);
	});
}


function feeds(req, res, output) {
	alchemyapi.feeds('url', demo_url, {}, function(response) {
		output['feeds'] = { url:demo_url, response:JSON.stringify(response,null,4), results:response['feeds'] };
		microformats(req, res, output);
	});
}


function microformats(req, res, output) {
	alchemyapi.microformats('url', demo_url, {}, function(response) {
		output['microformats'] = { url:demo_url, response:JSON.stringify(response,null,4), results:response['microformats'] };
		taxonomy(req, res, output);
	});
}


function taxonomy(req, res, output) {
	alchemyapi.taxonomy('url', demo_url, {}, function(response) {
		output['taxonomy'] = { url:demo_url, response:JSON.stringify(response,null,4), results:response };
		combined(req, res, output);
	});
}

function combined(req, res, output) {
	alchemyapi.combined('url', demo_url, {}, function(response) {
		output['combined'] = { url:demo_url, response:JSON.stringify(response,null,4), results:response };
		image(req, res, output);
	});
}

function image(req, res, output) {
	alchemyapi.image('url', demo_url, {}, function(response) {
		output['image'] = { url:demo_url, response:JSON.stringify(response,null,4), results:response };
		image_keywords(req, res, output);
	});
}

function image_keywords(req, res, output) {
	alchemyapi.image_keywords('url', demo_url, {}, function(response) {
		output['image_keywords'] = { url:demo_url, response:JSON.stringify(response,null,4), results:response };
		res.render('example',output);
	});
}

