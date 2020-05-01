const express = require('express');
const graphqlHTTP = require('express-graphql');

const mongoose = require('mongoose');
const app = express();


mongoose.connect(
  'mongodb://localhost:auth/auth',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
mongoose.set('useCreateIndex', true);


mongoose.connection.once('open', () => {
  console.log('connected to database');
})

app.use('/graphiql', graphqlHTTP({ schema: require('./schema.js'), graphiql: true}));

app.listen(8080, () => {
  console.log('Server running succefully...')
})