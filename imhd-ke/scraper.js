const local = require('./local')

function imhdKe(webdriver) {
    let api, driver
    const createDriver = async () => {
        driver = new webdriver.Builder()
            .forBrowser('chrome')
            .build()
        await driver.manage().window().maximize()

        return driver
    }

    const start = async () => {
        api.openKE()
        await api.searchPath(local.stops.LUNIK_VIII, local.stops.TUKE)
        const paths = await api.getSearch()

        for await (let path of paths) {
            console.log(await path.getText())
        }
    }

    const setApi = (apiProvider) => {
        api = apiProvider
    }

    const stopDriver = async () => {
        await driver.quit()
    }

    return {
        createDriver,
        start,
        driver,
        setApi,
        stopDriver
    }
}


module.exports = {imhdKe}