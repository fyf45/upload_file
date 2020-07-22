const devConfig = {
    host: "localhost",
    database: "fyf",
    user: "root",
    password: "fyf123456"
}

const proConfig = {
    host: "xx.xx.xx.xx",
    database: "fyf",
    port: 3306,
    password: "fyf123456"
}
module.exports = process.env.NODE_ENV === 'development' ? devConfig : proConfig;