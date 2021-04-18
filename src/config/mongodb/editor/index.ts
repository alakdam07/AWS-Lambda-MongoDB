import { MongoDBConfig } from '../types'
import env from '../../env'
import development from './development'
import production from './production'

/**
 * Get editor mongodb config
 */
function getConfig(): MongoDBConfig {
  console.log(`Using ${env} environment for mongodb editor...`)
  switch (env) {
    case 'development':
      return development
    default:
      return production
  }
}

export default getConfig()
