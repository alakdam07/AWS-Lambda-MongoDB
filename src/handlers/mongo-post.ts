import { Response } from '../utils/lambda-response'
import runWarm from '../utils/run-warm'
import connect from '../services/mongodb/connect';

export interface ITodo {
  todo: string;
  status: boolean;
}
/**
 * Mongo-Handler
 */
export async function mongoPost(event: AWSLambda.APIGatewayEvent): Promise<Response> {

  const client = await connect('editor');
  const requestBody = JSON.parse(event.body || '{}');

  const Item: ITodo = {
    todo: requestBody.todo,
    status: false,
  }

  await client
    .db('Todo')
    .collection('todo').insertOne(Item)

  try {
    return {
      statusCode: 200,
      body: JSON.stringify(requestBody),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
}

export default runWarm(mongoPost)
