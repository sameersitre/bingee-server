var express = require("express")
var logger = require("morgan")

require("dotenv").config()
var path = require("path")
var cookieParser = require("cookie-parser")
var apiRouter = require("./routes/api")
var apiResponse = require("./helpers/apiResponse")
var cors = require("cors")
var app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))
app.use(cors())
app.use(logger("dev"))
app.use("/api/", apiRouter)

app.all("*", function (req, res) {
    return apiResponse.notFoundResponse(res, "Page not found")
})

app.use((err, req, res) => {
    if (err.name == "UnauthorizedError") {
        return apiResponse.unauthorizedResponse(res, err.message)
    }
})
let PORT = 3500
app.listen(PORT, "127.0.0.1", function () {
    console.log(
        `nodejs listening at ${PORT}
        \n#############################
        \n       @@@@@@@@@@@@@@
        \n#############################\n\n`
    )
})
