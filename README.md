# Technical Challenge Defontana Junior AWS Serverless Engineer

This repository contains a serverless application developed with AWS SAM, Node.js, Appsync,
Lambda, Api Gateway, DynamoDB and StepFunctions. The application offers CRUD (Create, Read, Update, Delete) operations to manage users and Pets. Furthermore, it provides CRUD operations for use through GraphQL.

## Prerequisites

Before running the application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [AWS CLI](https://aws.amazon.com/cli/)
- [AWS SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)
- [Postman](https://www.postman.com/) (optional, for API testing)

## Initial Setup

Before the first deployment of the application, you need to perform an initial setup. Run the following command in your terminal:

```bash
npm run firstdeploy
```

This command will build the application and deploy it to AWS. During the process, you will be guided to configure the application, including creating AWS resources such as a DynamoDB table and an API Gateway.

## Running the Application

Once the initial setup is completed, you can use the following command to deploy and update the application on AWS:

```bash
npm run deploy
```

This will compile the application and deploy it to AWS without the need for a new initial setup.

## API Testing

You can use Postman or similar tools to perform API testing. Here is an example of how to test the API:

1. Open Postman.
2. Create a new request and select the desired HTTP method (GET, POST, PUT, DELETE).
3. Configure the request URL to point to your API Gateway, e.g., https://your-api-id.execute-api.your-region.amazonaws.com/your-stage/your-resource.
4. Configure headers as needed, e.g., the "Content-Type" header for JSON body requests.
5. In the request body, provide the necessary data in JSON format.
6. Click "Send" to make the request and receive the API's response.
