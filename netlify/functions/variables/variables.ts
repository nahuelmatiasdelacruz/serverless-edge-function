import type {Handler, HandlerEvent, HandlerContext} from '@netlify/functions';

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  
  const myImportantVariable = process.env.MY_IMPORTANT_VARIABLE;

  if(!myImportantVariable) throw ('Missing myImportantVariable');
  console.log('Hola mundo desde los logs (handler)');
  return {
    statusCode: 200,
    body: JSON.stringify({
      myImportantVariable
    }),
    headers: {
      'Content-Type':'application/json'
    }
  }
}

export {handler};