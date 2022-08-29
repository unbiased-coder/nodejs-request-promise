const axios = require('axios').default;

(async () => {
    let request_url = 'http://localhost/my-api/request';
    response = await axios.get(request_url);
    console.log(response.data);
})();
