//CRUD 

/*const mongodb = require('mongodb')
    ,MongoClient = mongodb.MongoClient
    ,connectionURL = 'mongodb://127.0.0.1:27017'
    ,databeName = 'task-manager'
    ,ObjectID = mongodb.ObjectID*/

const dbName = 'task-manager'
    ,connectionURL = 'mongodb://127.0.0.1:27017'
    ,{MongoClient, ObjectID} = require('mongodb')

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if(error) {
        return console.log('Unable to connect to database');
    }

    const db = client.db(dbName)

    db.collection('users').deleteOne({
        name: 'Tulio'
    }).then((result) => {
        console.log(result);
        
    })
   
})
