const { ApolloServer,gql} = require('apollo-server');
const mongoose = require('mongoose');

require('dotenv').config({ path : 'variables.env'});

mongoose
    .connect(process.env.MONGO_URI, { userNewUrlParser: true})
    .then(()=> console.log("DB CONNECTED"))
    .catch(err => console.error(errr));

const typeDefs = gql`
    type Query {
        getTodos: [Todo]
    }
    type Todo {
        task: String
        completed: Boolean
    } 
`;
 
const server= new ApolloServer({
    typeDefs  
});

server.listen(4500).then(( {url})=> {
    console.log(`server listening ${url}`);
});
