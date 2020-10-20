const {scraperProvider} = require('./runtime')
const {imhdKe} = require('./imhd-ke/scraper')
const {apiProvider} = require('./imhd-ke/api')

const webdriver = require('selenium-webdriver')
const imhd = imhdKe(webdriver)

const runtime = scraperProvider(imhd)

setImmediate(async () => {
    const driver = await runtime.createScraper()
    const imhdApi = apiProvider(driver)
    imhd.setApi(imhdApi)

    await runtime.runScraper()
})
