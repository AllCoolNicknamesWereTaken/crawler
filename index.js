var request = require('request');
request('https://news.ycombinator.com/', function (error, response, body) {
  const cheerio = require('cheerio');
  const $ = cheerio.load(body);


      // console.log($('.commtext.c00').map((p) => p.children[0].data).join('\n'));


  for (i = 0; i < 5; i++) {
  console.log($('.storylink')[i].children[0].data);
  var req = require('request');
    req('https://news.ycombinator.com/item?id=' + $('tr .athing')[i].attribs.id, function (error, response, body) {
      const $ = cheerio.load(body);
      console.log('error:', error); // Print the error if one occurred
      console.log($('.commtext.c00').slice(0,1).text());
  });
}
});

// const cheerio = require('cheerio');
// const $ = cheerio.load(body);
// // console.log($.html());
// //console.log(body.events());
