import { APIGatewayEvent, Context, Callback } from "aws-lambda";
import mongoEvent from "../handlers/mongo-handler";

describe('Unit test for app handler', function () {
  it('verifies successful response', async () => {
    const event = { body: "Test Body" } as APIGatewayEvent;
    const context = {} as Context;
    const callback = {} as Callback;

    const response = await mongoEvent(event, context, callback);

    console.log(response)

    expect(response.statusCode).toEqual(200);
    expect(response.body).toBeTruthy();
  });
});
