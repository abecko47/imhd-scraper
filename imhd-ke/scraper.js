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
    }

    const setApi = (apiProvider) => {
        api = apiProvider
    }

    return {
        createDriver,
        start,
        driver,
        setApi
    }
}


module.exports = {imhdKe}