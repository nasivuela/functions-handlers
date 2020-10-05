exports.handler = function(event, context, callback){
    console.log('Hello, World from function!', event)
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({ msg: 'Hello, World from function!' }),
    })
  }