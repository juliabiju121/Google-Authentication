const axios = require('axios');
const https = require('https');
const get_profile_data = async access_token => {
    console.log(access_token);
    return await axios({
        method: 'post',
        url: `https://www.googleapis.com/oauth2/v3/userinfo?alt=json&access_token=${access_token}`,
        httpsAgent: new https.Agent({rejectUnauthorized: false})
    });
};

module.exports = get_profile_data
