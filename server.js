var express = require('express');
var app = express();
var l = console.log;

app.use(express.logger('dev'));

var geoip = require('geoip-lite');

app.get('/api', function(req, res){
	var ip = req.connection.remoteAddress;
    console.log(ip);
	//var ip = "207.97.227.239";

	var geo = geoip.lookup(ip);	

	if (geo)
		var toSendBack = [geo.country, geo.region, geo.city].join(",");
	else
		var toSendBack = "Unknown";
	
	// l(toSendBack);
	res.json(toSendBack);
});
app.get('/api/location', function(req, res){
    //var ip = req.connection.remoteAddress;
    var ip = "207.97.227.239";

    var geo = geoip.lookup(ip);

    if (geo)
        var toSendBack = [geo.country, geo.region, geo.city].join(",");
    else
        var toSendBack = "Unknown";

    // l(toSendBack);
    res.json(toSendBack);
});

l("Listening to 8080 ...");
app.listen(8080);