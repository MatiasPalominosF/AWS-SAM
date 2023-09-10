const AWS = require("aws-sdk");

const dynamoDB = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = process.env.TABLE_CLIENT;

exports.handler = async (event) => {
  try {
    const userId = event.pathParameters.userId;

    const params = {
      TableName: TABLE_NAME,
      Key: {
        id: userId,
      },
    };

    await dynamoDB.delete(params).promise();

    return {
      statusCode: 204,
      body: JSON.stringify({ message: "User deleted" }),
    };
  } catch (error) {
    console.error("Error deleting user:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error deleting user" }),
    };
  }
};
