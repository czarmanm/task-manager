// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID;
const log = console.log;
const { MongoClient, ObjectID, GridFSBucket } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser : true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return log('Unable to connect to database');
    }

    const db = client.db(databaseName);
    
    // db.collection('users').findOne({ name: 'Jen' }, (error, user) => {
    //     if (error) {
    //         log('Unable to fetch')
    //     }

    //     log(user)
    // })

    // db.collection('users').find({ age: 44 }).toArray((error, users) => {
    //     log(users)
    // })

    // db.collection('tasks').findOne({ _id: ObjectID("5faef783de7111c8c7f61eb9") }, (error, task) => {
    //     if (error) {
    //         log('Unable to fetch data')
    //     }
    //     log(task)
    // })

    // db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    //     log(tasks)
    // })

    // db.collection('users').updateOne({ 
    //     _id: new ObjectID("5faeb97328bc33c2a4c3fd41") 
    // }, {
    //     $inc : {
    //         age: 3
    //     }
    // }).then((result) => {
    //     log(result)
    // }).catch((error) => {
    //     log(error)
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     log(result)
    // }).catch((error) => {
    //     log(error)
    // })

    // db.collection('users').deleteMany({
    //     age: 44
    // }).then((result) => {
    //     log(result)
    // }).catch((error) => {
    //     log(error)
    // })

    db.collection('tasks').deleteOne({
        description: "Read about Microservices"
    }).then((result) => {
        log(result)
    }).catch((error) => {
        log(error)
    })
});