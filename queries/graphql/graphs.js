const AWS = require('aws-sdk');
const RDS = new AWS.RDS({ region: 'us-east-1' });

const updateUserInDB = async (userid, username) => {
  try {
    // Update the user with the specified userid and set the username
    const params = {
      TableName: 'Users',
      Key: {
        userid: userid
      },
      UpdateExpression: 'SET username = :username',
      ExpressionAttributeValues: {
        ':username': username
      }
    };
    await RDS.updateItem(params).promise();
  } catch (err) {
    throw new Error(`Error updating user: ${err.message}`);
  }
};

module.exports = {
  updateUserInDB
};
