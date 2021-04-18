import { Response } from '../utils/lambda-response'
import runWarm from '../utils/run-warm'
import connect from '../services/mongodb/connect';


/**
 * Mongo-Handler
 */
export async function mongoEvent(): Promise<Response> {

  const client = await connect('editor');

  // const allAccounts = await client
  //   .db('sample_analytics')
  //   .collection('accounts')
  //   .find()
  //   .toArray();

  // const sellers = await client
  //   .db()
  //   .collection('sellers')
  //   .find({
  //     firebaseCreatedAt: {
  //       $gte: date,
  //     },
  //   })
  //   .toArray();

  const finalApi = await client
    .db('sample_analytics')
    .collection('accounts')
    .aggregate(
      [
        {
          $lookup:
          {
            from: "transactions",
            localField: "account_id",
            foreignField: "account_id",
            as: "transactions"
          }
        },
        {
          "$project": {
            "products": 1.0,
            "transactions.transaction_count": 1.0,
            "transactions.transactions": 1.0,
          }
        },
        { $limit: 5 }
      ]
    ).toArray()
  try {
    return {
      statusCode: 200,
      body: JSON.stringify(finalApi),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
}

export default runWarm(mongoEvent)
