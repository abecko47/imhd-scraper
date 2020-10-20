const local = require('./local')

function apiProvider(driver) {
    const openKE = () => {
        driver.get(local.links.ROAD_PLANNER)
    }

    return {
        openKE
    }
}

module.exports = {apiProvider}