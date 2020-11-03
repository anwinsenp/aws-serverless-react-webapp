const AWS = require("aws-sdk");
const dynamondb = new AWS.DynamoDB({
    region: "ap-south-1",
    apiVersion: "2012-08-10"
})

exports.handler = (event, context, callback) => {
    const params = {
        Item: {
            id: {
                S: event.id
            },
            title: {
                S: event.title
            },
            watchHref: {
                S: event.watchHref
            },
            authorId: {
                S: event.authorId
            },
            length: {
                S: event.length
            },
            category: {
                S: event.category
            }
        },
        TableName: "courses"
    };

    dynamondb.putItem(params, (err, data) => {
        if (err) {
            console.log(err);
            callback(err)
        } else {
            const item = {
                id: params.Item.id.S,
                title: params.Item.title.S,
                watchHref: params.Item.watchHref.S,
                authorId: params.Item.authorId.S,
                length: params.Item.length.S,
                category: params.Item.category.S
            };

            callback(null, item);
        }
    });
};