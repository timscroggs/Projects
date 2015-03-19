var redis = require('redis'),
    client = redis.createClient();

client.on('connect', function() {
    console.log('connected on port 6379');
});

client.set('name', 'Bill'); //optional third parameter that is a callback that looks like function(err, reply){if (err !== null){}else{response goes here}}; which is required on getters

client.get('name', function(err, reply){
    if(err !== null){
        console.log("ERROR");
    } else {
        //value of name is in reply
        console.log(reply);
    }
});

//*******
client.hmset('brownie', 'name', 'Clifford Brown', 'instrument', 'trumpet'); //creates a hash to store this 

client.hmset('brownie', {'name': 'Clifford Brown', 'instrument': 'trumpet' //same as one directly above, this one is translated as the first with the redis module
                        });

client.hgetall('brownie', function(err, reply) {
    if(err !== null) {
        console.log("ERROR");
    } else {
        //value of brownie is in reply
        console.log(reply); 
    }
});

client.hget('brownie', 'name', function(err, reply) {
    if(err !== null) {
        console.log("ERROR");
    } else {
        //value of brownie is in reply
        console.log(reply); 
    }
});


//*****
/*client.rpush(['things', 'one','two',3,4]);
client.lrange('things', 0, -1, function(err, reply) {
    if(err !== null) {
        console.log("ERROR");
    } else {
        console.log(reply); 
    }
});*/
client.sadd(['colors', 'red','yellow','blue']);
client.smembers('colors', function(err, reply) {
    if(err !== null) {
        console.log("ERROR");
    } else {
        console.log(reply); 
    }
});
client.exists('bird', function(err, reply) {
    if(err === 1) {
        console.log('bird lives');
    } else {
        console.log('flying in'); 
    }
});
client.del('things');
client.set('cityCount', 100);

