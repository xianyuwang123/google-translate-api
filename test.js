const translate = require('@saipulanuar/google-translate-api');
const tunnel = require('tunnel');

translate('こんにちは', {to: 'zh-CN'}, {
  agent: tunnel.httpsOverHttp({
    proxy: {
      host: 'localhost',
      port: '4780',
    }
})}).then(res => {
  console.log(res)
  console.log(res.text);
  //=> I speak English
  console.log(res.from.language.iso);
  //=> nl
}).catch(err => {
  console.error(err);
})