const {scraperProvider} = require('./runtime')
const {imhdKe} = require('./imhd-ke/scraper')
const {apiProvider} = require('./imhd-ke/api')

const webdriver = require('selenium-webdriver')
const imhd = imhdKe(webdriver)

const runtime = scraperProvider(imhd)

const start = Math.floor(Date.now() / 1000)
console.log(`Start: ${start}`)

setImmediate(async () => {
    const driver = await runtime.createScraper()
    const imhdApi = apiProvider(driver)
    imhd.setApi(imhdApi)

    await runtime.runScraper()
    await runtime.finishScraper()
    const finish = Math.floor(Date.now() / 1000)
    console.log(`Finish: ${finish}`)
    console.log(`Scraper went ${finish - start} seconds.`)
})
