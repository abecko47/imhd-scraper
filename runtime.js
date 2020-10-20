
function scraperProvider(scraper) {
    const runScraper = async () => {
        await scraper.start()
    }

    const createScraper = async () => {
        return await scraper.createDriver()
    }

    const finishScraper = async () => {
        await scraper.stopDriver()
    }

    return {
        runScraper,
        createScraper,
        finishScraper
    }
}

module.exports = {scraperProvider}