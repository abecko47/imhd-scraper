const local = require('./local')

function apiProvider(driver) {
    const openKE = () => {
        driver.get(local.links.ROAD_PLANNER)
        waitForPageLoad()
    }

    const searchPath = async (from, to) => {
        const startInput = await driver.findElement({css: '#start'})
        const finishInput = await driver.findElement({css: '#destination'})

        startInput.sendKeys(from)
        finishInput.sendKeys(`${to}\n`)
        await driver.sleep(local.sleep.SMALL)
    }

    const getSearch = async () => {
        const table = await driver.findElement({css: '#RoutePlanner-journey-list'})
        const paths = await table.findElements({css: 'tr'})

        return await paths
    }

    const waitForPageLoad = () => {
        driver.wait(function() {
            return driver.executeScript('return document.readyState').then(function(readyState) {
                return readyState === 'complete'
            })
        })
    }

    return {
        openKE,
        searchPath,
        getSearch
    }
}

module.exports = {apiProvider}