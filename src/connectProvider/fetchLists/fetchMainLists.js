const configs = require('./configs');
const fetch = require('node-fetch');
const fs = require('fs');

const fetchLists = async () => {
  const tokenList = await fetch(
    'https://api.github.com/repos/MyEtherWallet/ethereum-lists/contents/dist/tokens'
  )
    .then(res => res.json())
    .catch(console.error);
  fs.writeFileSync(
    configs.MAIN_LISTS_PATH + '/tokens.json',
    JSON.stringify(tokenList)
  );
};

(async () => {
  try {
    await fetchLists();
    console.log('Done');
  } catch (e) {
    console.error(e);
  }
})();