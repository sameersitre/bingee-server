exports.restruct_ott = function (data) {
    return {
        id: parseInt(data.id),
        type: data.type,
        locations: data.collection.locations,
    }
}
