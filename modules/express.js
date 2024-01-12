const express = require('express')
const port = 8080;
const app = express()
app.use(express.json())
const UserModel = require('../src/models/user.model')

app.get('/', (req, res) => {
  res.status(200).send("hello")
})
app.get('/users', (_, res) => {
  const users = [
    {
      name: 'Nicolas Castela',
      email: 'nickcastela@hotmail.com'
    },
    {
      name: 'Marcel Gayzin',
      email: 'marcelgay@hotmail.com'
    }
  ];
  JSON.stringify(users)
  res.status(200).send(users)

});

app.post('/users', async (req, res) => {
  try {
  const user = UserModel.create(req.body);
  res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message)
  }
})




app.listen(port, () => console.log(`running in ${port}`))
