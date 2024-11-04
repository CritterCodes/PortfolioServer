import { MongoClient } from 'mongodb';
import Constants from '../lib/constants.lib.js';

class Database {
  _instance = null;

  init = async (config) => {
    const client = new MongoClient(config.url, {
      minPoolSize: config.minPoolSize,
      maxPoolSize: config.maxPoolSize,
    });
    try {
      await client.connect();
      console.log('mongodb connected');
    } catch (err) {
      console.error(`Error connecting to mongoDB. Error: ${err}`);
    }
    this._instance = client.db(config.database);
  };

  getDb = () => {
    return this._instance;
  };

  // Example collection
  /*dbUsers = () => {
    return this._instance.collection(Constants.USERS_COLLECTION);
  };*/

  // Add more collections here
}

export const db = new Database();