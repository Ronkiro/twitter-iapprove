const fetch = require('node-fetch')

module.exports = () => {
    const getFromHash =  (hashtag, resulttype, count) => {
        return fetch(`https://api.twitter.com/1.1/search/tweets.json?q=%23${hashtag}&resultType=${resulttype}&count=${count}`,
        {
            headers: {
                "Authorization": `Bearer ${process.env.TWITTER_BEARER_KEY}`
            }
        }).then(r => r.json());
    }

    return {
        getFromHash
    }
}