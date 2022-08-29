const XMLHttpRequest = require('xhr2');

(async () => {
    let request_url = 'http://localhost/my-api/request';
    let xhr = new XMLHttpRequest();

    xhr.open('GET', request_url, true);
    xhr.onload = function(){
        let data = JSON.parse(xhr.responseText);
        console.log('Received response: ', data);
    };
    
    xhr.send();
})();
