import { DynamoDBClient, ScanCommand } from '@aws-sdk/client-dynamodb';
import { unmarshall } from '@aws-sdk/util-dynamodb';

const client = new DynamoDBClient({});

export const handler = async (event: any) => {

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hola Mundo! 🚀',
    }),
  };
};