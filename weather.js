(function() {
var wthr = new XMLHttpRequest();

wthr.onreadystatechange = function() {
    if (wthr.readyState == 4 && wthr.status == 200){
        processData(wthr.responseText);
    }
}

wthr.open('GET', 'weather.php', true);
wthr.send(null);
})();

function processData(data) {
    weather = JSON.parse(data);
    var name = weather.name;
    var current = weather.weather[0].main;
    var temp = parseInt(weather.main.temp);
    insertText(name, current, temp);
}

function insertText(name, current, temp) {
    document.getElementById('location').setAttribute('text', 'text: '+name);
    document.getElementById('temp').setAttribute('text', 'text: '+temp+'°F');
    document.getElementById('weather').setAttribute('text', 'text: '+current);
}
