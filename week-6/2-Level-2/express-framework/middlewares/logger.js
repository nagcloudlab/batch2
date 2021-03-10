

const logger = (req, res, next) => {
    const start = +new Date()
    const out = process.stdout
    const url = req.url
    const method = req.method
    res.on('finish', () => {
        const end = +new Date()
        const duration = end - start
        const message = `${method} to ${url} \n took ${duration} ms \n\n`
        out.write(message)
    })
    next()
}

module.exports = logger