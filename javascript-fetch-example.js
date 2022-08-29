(async () => {
    let res;
    let request_url = 'http://localhost/my-api/request';

    response = await fetch(request_url);
    data = await response.json();
    console.log(data);
})();
