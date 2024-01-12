const mongoose = require('mongoose');

const connectToDatabase = async () => {
  try {
    await mongoose.connect(`mongodb+srv://nickcastela:${process.env.MONGODB_PASSWORD}@nicolas.r6dwduk.mongodb.net/?retryWrites=true&w=majority`),
      console.log('conectado com sucesso')
      }catch (error) {
    console.error(error);
    console.log('Ocorreu um erro ao conectar ao banco de dados MONGODB')
  }
}

module.exports = connectToDatabase;
