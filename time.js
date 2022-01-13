Data = new Date();

var Date = new Date();
document.getElementById('time-new').innerHTML = (`${Data.getDate()}.${Data.getMonth()+1}.${Data.getFullYear()}, ${Date.getHours()}:${Date.getMinutes()}`);