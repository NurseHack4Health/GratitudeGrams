const mongoose = require('mongoose');

const {
  COSMOSDB_HOST,
  COSMOSDB_PORT,
  COSMOSDB_DBNAME,
  COSMOSDB_USER,
  COSMOSDB_PASS,
} = process.env;


const connect = (callback = () => {}) => {
  mongoose.connect(
    `mongodb://${COSMOSDB_HOST}:${COSMOSDB_PORT}/${COSMOSDB_DBNAME}?ssl=true&replicaSet=globaldb`,
    {
      auth: {
        user: COSMOSDB_USER,
        password: COSMOSDB_PASS,
      },
    },
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`Connected to CosmosDB ${COSMOSDB_HOST}:${COSMOSDB_PORT}`);
        callback();
      }
    },
  );
};

module.exports = connect;
