function checkHour () {
	var d = new Date();
	var h = d.getHours();
	return h;
}

var hour = checkHour();

var el = document.getElementById('test');
el.innerHTML = 'This should return the hour, which is ' + hour + '.';
var body = document.getElementById('container');

if (hour >= 5 && hour <= 19){
	body.className = 'day';
}	else {
		body.className = 'night';
}