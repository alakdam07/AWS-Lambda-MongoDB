import { MongoClientOptions } from 'mongodb'

/**
 * MongoDB config
 */
export interface MongoDBApplicationsConfig {
  [application: string]: MongoDBConfig
}

export interface MongoDBConfig {
  options: MongoClientOptions,
  uri: string,
}
