const { MongoClient } = require("mongodb")
// const uri = `mongodb://${process.env.USERNAME}:${process.env.PASSWORD}@${process.env.CLUSTER_URL}/?authMechanism=${process.env.AUTH_MECHANISM}`

//NO AUTH
const uri = `mongodb://${process.env.CLUSTER_URL}/`
exports.client = new MongoClient(uri, {
  //   useNewUrlParser: true,
  useUnifiedTopology: true,
  //   useMongoClient: true
})
