import { MongoClient, Db, Collection } from 'mongodb';

let client = null;

const getDatabase = async () => {
    if (!client) {
        console.log('Connecting to database', process.env.MongoDBUrl);
        client = await MongoClient.connect(process.env.MongoDBUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    }
    return client.db();
};

const getCollection = async (name) => {
    const database = await getDatabase();
    return database.collection(name);
};

export { getCollection, getDatabase };