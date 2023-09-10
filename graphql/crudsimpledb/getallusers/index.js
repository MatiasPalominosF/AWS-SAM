const AWS = require("aws-sdk");

const dynamoDB = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = process.env.TABLE_CLIENT;

exports.handler = async (event) => {
  try {
    const params = {
      TableName: TABLE_NAME,
    };
    const result = await dynamoDB.scan(params).promise();

    return {
      statusCode: 200,
      body: JSON.stringify(result.Items),
    };
  } catch (error) {
    console.error("Error retrieving the users:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Error retrieving the users",
        error: error,
      }),
    };
  }
};
