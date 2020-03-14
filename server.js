const { ApolloServer} = require('apollo-server');
const mongoose = require('mongoose');
const User = require('./models/User');
const Post = require('./models/Post');
const fs = require('fs');
const path = require('path');

const filepath=path.join(__dirname,'typeDefs.gql');
const typeDefs=fs.readFileSync(filepath,'utf-8');
const resolvers= require('./resolvers');

require('dotenv').config({ path : 'variables.env'});

mongoose
    .connect(process.env.MONGO_URI, { userNewUrlParser: true})
    .then(()=> console.log("DB CONNECTED"))
    .catch(err => console.error(errr));

 
const server= new ApolloServer({
    typeDefs ,
    resolvers,
    context:{
        User,
        Post
    }
});

server.listen(4500).then(( {url})=> {
    console.log(`server listening ${url}`);
});
