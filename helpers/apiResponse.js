exports.testSuccessResponse = function (res, message, data) {
    return res.status(200).json(data)
}

exports.successResponse = function (res, message, data) {
    var resData = {
        status: 1,
        message: message,
        ...data,
    }
    return res.status(200).json(resData)
}

exports.ErrorResponse = function (res, message) {
    var data = {
        status: 0,
        message: message,
    }
    return res.status(500).json(data)
}

exports.notFoundResponse = function (res, msg) {
    var data = {
        status: 0,
        message: msg,
    }
    return res.status(404).json(data)
}

exports.validationErrorWithData = function (res, msg, data) {
    var resData = {
        status: 0,
        message: msg,
        data: data,
    }
    return res.status(400).json(resData)
}

exports.unauthorizedResponse = function (res, msg) {
    var data = {
        status: 0,
        message: msg,
    }
    return res.status(401).json(data)
}
