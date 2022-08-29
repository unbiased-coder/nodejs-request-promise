function request_promise()
{
    let request_url = 'http://localhost/my-api/request';
    
    return new Promise(function(resolve, reject){
        request(request_url, 
            function (err, resp, body) {
                if (err)
                    return reject(err);
                try {
                    resolve(JSON.parse(body).data);
                }
                catch(e) {
                    reject(e);
                }
            }
        );
    });
}

request_promise()
.then(function(result) {
    console.log('Successfully made request with result: ', result);
})
.catch(function(err) {
    console.err('Failed making request with error: ', err);
});
