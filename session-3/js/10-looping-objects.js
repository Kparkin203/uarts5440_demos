 var flight = {
 	airline: "Oceanic",
 	number: 815,
 	departure: {
 		IATA: "SYD",
 		time: "2004-09-22 14:55",
 		city: "Sydney"
 	},
 	arrival: {
 		IATA: "LAX",
 		time: "2004-09-23 10:42",
 		city: "Los Angeles"
 	}
 };
 var name;
 for (name in flight) {
 	if (typeof flight[name] !== 'function') {
 		console.log(name + ': ' + flight[name]);
 	}
 }