const request = require('request');
const cheerio = require('cheerio');

const req = (url) => {
  return new Promise ((resolve, reject) => {
    request(url, (err, resp, body) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(body);
    });
  });
}

async function main () {
  try {
    const body = await req('https://news.ycombinator.com/');
    const $ = cheerio.load(body);
    for (i = 0; i < 6; i++) {
      console.log($('.storylink')[i].children[0].data);
      var requ = require('request');
      const body1 = await req('https://news.ycombinator.com/item?id=' + $('tr .athing')[i].attribs.id);
      const $1 = cheerio.load(body1);
      console.log($1('.commtext.c00').slice(0,1).text());
    }
  } catch(error) {
    console.log(error);
  }

}
main();

// var request = request.defaults({jar: true});
//
// request.post('https://profil.wp.pl/login.html', {form:{login_username:'oliwia_bar', password:''}})
