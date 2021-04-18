import { MongoDBConfig } from '../types'
import { options } from './defaults'

const config: MongoDBConfig = {
  options: {
    ...options,
  },
  uri: 'mongodb+srv://alak:aws123@cluster0.cbrmb.mongodb.net/aws-mongo?retryWrites=true&w=majority',
}

export default config
