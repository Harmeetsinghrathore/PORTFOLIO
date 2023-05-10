exports._throw400 = (response, error) => {
    return response.status(400).json({
        Status : "ERROR",
        Message : "Bad request",
        Error : error
    })
}

exports._throw401 = (response, error) => {
    return response.status(401).json({
        Status : "FAILURE",
        Message : "Not authenticated",
        Error : error
    })
}

exports._throw500 = (response, error) => {
    return response.status(500).json({
        Status : "ERROR",
        Message : "Internal server error",
        Error : error
    })
}

