module.exports = sql => {
    sql.query(
        'SELECT TABLE_NAME FROM information_schema.TABLES WHERE TABLE_NAME = "image"', (err, res) => {
            if (res.length) return;
            sql.query(`CREATE TABLE \`image\` (
                \`id\` INT NOT NULL AUTO_INCREMENT,
                \`file_key\` VARCHAR(45) NOT NULL,
                \`file_name\` VARCHAR(45) NOT NULL,
                PRIMARY KEY (\`id\`)
            )`)
        }
    )
}