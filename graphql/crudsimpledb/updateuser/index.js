const AWS = require("aws-sdk");

const dynamoDB = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = process.env.TABLE_CLIENT;

exports.handler = async (event) => {
  try {
    if (event.httpMethod === "PUT" || event.httpMethod === "PATCH") {
      const userId = event.pathParameters.userId;

      const updatedUserData = JSON.parse(event.body);

      const params = {
        TableName: TABLE_NAME,
        Key: {
          id: userId,
        },
        UpdateExpression: "set nameuser = :nameuser, email = :email",
        ExpressionAttributeValues: {
          ":nameuser": updatedUserData.nameuser,
          ":email": updatedUserData.email,
        },
        ReturnValues: "ALL_NEW",
      };

      const result = await dynamoDB.update(params).promise();

      return {
        statusCode: 200,
        body: JSON.stringify(result.Attributes),
      };
    } else {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Request not valid" }),
      };
    }
  } catch (error) {
    console.error("Error updating user:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Error updating user",
        error: error,
      }),
    };
  }
};
