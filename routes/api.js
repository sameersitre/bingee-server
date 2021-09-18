var express = require("express")
var router = express.Router()
const BingeController = require("../controllers/BingeController")

router.post("/test", BingeController.test)

//  TRENDING ALL/TV/MOVIE DAY
router.post("/trending", BingeController.trendingList)

router.post("/search", BingeController.searchList)

router.post("/filter", BingeController.filterList)

router.post("/upcoming", BingeController.upcomingList)

router.post("/getDetails", BingeController.getDetails)

router.post("/getVideos", BingeController.getVideos)

router.post("/getRecommendations", BingeController.getRecommends)

router.post("/getSeasons", BingeController.getSeasons)

router.post("/getOTTPlatforms", BingeController.getOTTStreams)

router.post("/getCastDetails", BingeController.getCastDetails)

router.post("/info", BingeController.getInfo)

router.post("/feedback", BingeController.getFeedback)

module.exports = router
