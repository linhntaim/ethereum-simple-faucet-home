const fs = require('fs')

const vendors = {
    // './node_modules/bootstrap/dist': './public/vendors/bootstrap/dist',
}
Object.keys(vendors).forEach(source => {
    const destination = vendors[source]
    if (!fs.existsSync(destination)) {
        fs.mkdirSync(destination, {recursive: true})
    }
    fs.cpSync(source, destination, {recursive: true})
})
