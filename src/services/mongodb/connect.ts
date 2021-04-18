import mongodb from 'mongodb'
import config from '../../config/mongodb'

/**
 * Connect to mongodb
 */
export default async function connect(applicationName: string): Promise<mongodb.MongoClient> {
  const { options = {}, uri } = config.applications[applicationName]
  return await mongodb.MongoClient.connect(uri, options)
}
