
function scraperProvider(scraper, api) {
    const runScraper = async () => {
        await scraper.start()
    }

    const createScraper = async () => {
        return await scraper.createDriver()
    }

    return {
        runScraper,
        createScraper
    }
}

module.exports = {scraperProvider}