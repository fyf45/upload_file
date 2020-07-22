module.exports = function (sql) {
    sql.query('SELECT TABLE_NAME FROM information_schema.TABLES WHERE TABLE_NAME = "image"', function (err, res) {
        if (res.length)
            return;
        sql.query("CREATE TABLE `image` (\n                `id` INT NOT NULL AUTO_INCREMENT,\n                `file_key` VARCHAR(45) NOT NULL,\n                `file_name` VARCHAR(45) NOT NULL,\n                PRIMARY KEY (`id`)\n            )");
    });
};
