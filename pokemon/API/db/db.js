const { MongoClient } = require("mongodb");
const connectionString =
  "mongodb+srv://EnzoVianney:J4tIRMX1MHrYpwjv@cluster0.7e5obqd.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let dbConnection;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      if (err || !db) {
        return err;
      }
      
      //remplacer whatever par le nom de votre DB !
      dbConnection = db.db("pokemon");
      console.log("Successfully connected to MongoDB.");
    });
  },

  getDb: function () {
    return dbConnection;
  },
};
