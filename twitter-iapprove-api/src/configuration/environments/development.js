module.exports = {
    version: process.env.APP_VERSION || 'v1',
    port: process.env.PORT || 4000,
    timezone: process.env.TIMEZONE,
    logging: {
        maxsize: 100 * 1024, // 100mb
        maxFiles: 2,
        colorize: false
    },
    DATABASE_URL: './db.sqlite3'
}