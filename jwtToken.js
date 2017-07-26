var token = 'www.index.html/token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJOYW1lIjoiQWFzaGlzaCBBZ2dhcndhbCIsIk1vYmlsZSBObzoiOjg4MDAyMzI4MzMsIkdyYWR1YXRpb24iOiJCQ0EifQ.wluZBI4GzjPdV7uk722R3AYW3s4zm8dAqm4oQThMITs';
try{
var obj=parseJwt(token);
document.write("correct");

document.write("\nTokken Value" + JSON.stringify(obj));
}
catch(e)
{
document.write("Incorrect tokken");
}

function parseJwt (token) {
	var splitToken=token.split('token=')[1];
   var base64Url = splitToken.split('.')[1];
   var base64 = base64Url.replace('-', '+').replace('_', '/');
   return JSON.parse(window.atob(base64));
};