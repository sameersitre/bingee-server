const axios = require("axios")
const restructure = require("../helpers/jsonRestructure")
const apiURL = require("./apiURL")
const apiCall = require("./apiCall")

exports.ottStreams = async function (params) {
    try {
        let streamAvailablity = null
        await axios
            .get(apiURL.ottStreamURL(params), {
                headers: {
                    "x-rapidapi-key": process.env.RAPIDAPI_UTELLY_API_KEY,
                },
            })
            .then((res) => {
                console.log("rapidapi-utelly api called.")
                streamAvailablity = res.data
            })
            .catch((error) => {
                streamAvailablity = error
            })
        return streamAvailablity.collection.locations
        // return restructure.restruct_ott(streamAvailablity.)
    } catch (error) {}
}

exports.castDetails = async function (params) {
    console.log("castDetails", params)
    let castList = null
    let allDetails = []
    await axios
        .get(apiURL.castDetailsURL(params), {
            headers: {
                "x-rapidapi-key": process.env.RAPIDAPI_UTELLY_API_KEY,
            },
        })
        .then((res) => {
            console.log("rapidapi-imdb api called.")
            return res.data.cast
        })
        .then(async (res) => {
            for (let i = 0; i < res.length; i++) {
                let fullActorDetails = {}
                let actorDetails = await apiCall.axios(apiURL.actorDetailsURL(res[i]))
                fullActorDetails = {
                    ...res[i],
                    profile_path: actorDetails.person_results[0].profile_path,
                }

                allDetails.push(fullActorDetails)
            }
        })
        .catch((error) => {
            castList = error
        })
    console.log(allDetails)
    return { ...params, cast: allDetails }
}
