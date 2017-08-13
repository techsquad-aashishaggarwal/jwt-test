var token =window.location.href;
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
