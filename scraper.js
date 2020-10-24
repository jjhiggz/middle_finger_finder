let Scraper = require('images-scraper');
let fs = require('fs')

const google = new Scraper({
    puppeteer: {
        headless: true,
    }
});

(async () => {
    const results = await google.scrape('dogs', 2000);
    resultsJSON = JSON.stringify(results)
    console.log(results)
    fs.writeFile('./middle_finger_pictures.json', resultsJSON, err => {
        if(err){
            console.log( 'error in writing file',err )
        } else {
            console.log(' were good to go')
        }
    } )
})();