const AWS = require("aws-sdk");
const { generate } = require("short-uuid");

const dynamoDB = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = process.env.TABLE_CLIENT;

exports.handler = async (event) => {
  try {
    const { body } = event;
    const userData = JSON.parse(body);
    console.log(userData);

    const userId = generate();
    const date = new Date();

    const params = {
      TableName: TABLE_NAME,
      Item: {
        id: userId,
        nameuser: userData.nameuser,
        email: userData.email,
        createAt: date.toLocaleDateString(),
        updateAt: date.toLocaleDateString(),
      },
    };

    await dynamoDB.put(params).promise();

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "User created successfully." }),
    };
  } catch (error) {
    console.error("Error creating user:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Error creating user.",
        error: error,
      }),
    };
  }
};
