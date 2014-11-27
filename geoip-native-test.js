var geoip = require("geoip-native");
var ip = "207.97.227.239";
geoip.lookup(ip);

console.log("country: " + ip.name + " / " + ip.code);