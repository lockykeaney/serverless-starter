const headers = {
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
}

export const hello = (event, context, callback) => {
    const response = {
        statusCode: 200,
        headers,
        body: {
            message: `This is a test`
        }
    }
    callback(null, response)
}
