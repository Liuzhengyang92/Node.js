const accountSid = 'AC27bb781328d8dc80fd7ff9366b520d49'
const authToken = '68cf76e4ca8441dca460592b987e8b28'
var twilio = require('twilio');
var client = new twilio(accountSid, authToken);
client.messages.create({
    body: `This is from Felix, how are you going bro?`,
    to: '+61452551219',
    from: '+61439566179',
//   mediaUrl: 'http://www.example.com/cheeseburger.png',

}).then((message) => console.log(message.sid)).done();