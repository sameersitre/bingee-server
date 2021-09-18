const axios = require("axios")

exports.axios = async function (URL) {
    let result = null
    console.log({ URL })
    await axios
        .get(URL)
        .then((res) => {
            console.log(`API Called: ${URL}`)
            result = res.data
        })
        .catch(function (error) {
            result = error
        })

    return result
}
