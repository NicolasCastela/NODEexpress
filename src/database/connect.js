const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://nickcastela:${process.env.MONGODB_PASSWORD}@nicolas.r6dwduk.mongodb.net/?retryWrites=true&w=majority`
    ),
      console.log("Api funcionando corretamente.");
  } catch (error) {
    console.error(error);
    console.log("Ocorreu um erro ao conectar ao banco de dados MONGODB");
  }
};

module.exports = connectToDatabase;
