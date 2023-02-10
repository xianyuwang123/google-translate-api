'use strict';

const translate = require('@saipulanuar/google-translate-api');
const tunnel = require('tunnel');

function hello(event, context, callback) {
  const text = event.pathParameters.text || ''

  translate(text, {to: 'zh-CN'}).then(res => {
    console.log(res)
    console.log(res.text);
    //=> I speak English
    console.log(res.from.language.iso);
    //=> nl
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        text: res.text
      }),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Access-Control-Allow-Origin'
      }
    };
    callback(null, response)
  }).catch(err => {
    console.error(err);
    callback(err)
  })
}

exports.hello = hello;
