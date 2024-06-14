const AWS = require('aws-sdk');
const lambda = new AWS.Lambda();
const { URL } = require('url');

exports.handler = async (event, context) => {
    let response;
    try {
        switch (event.httpMethod) {
            case 'GET':
                if (event.path === '/hearbeat') {
                    response = {
                        statusCode: 200,
                        body: JSON.stringify({ message: 'OK' })
                    };
                } else {
                    response = {
                        statusCode: 404,
                        body: JSON.stringify({ message: 'Not Found' })
                    };
                }
                break;
            default:
                response = {
                    statusCode: 405,
                    body: JSON.stringify({ message: 'Method Not Allowed' })
                };
        }
    } catch (err) {
        console.error(err);
        response = {
            statusCode: 500,
            body: JSON.stringify({ message: 'Internal Server Error' })
        };
    }
    return response;
};
