'use strict';

/**
 * egg-sequelize_pkg default config
 * @member Config#sequelizePkg
 * @property {String} SOME_KEY - some description
 */
exports.sequelizePkg = {
    dialect: "postgres", // support: mysql, mariadb, postgres, mssql
    database: "test",
    host: "127.0.0.1",
    port: "5432",
    username: "postgres",
    password: "postgres",
    timezone: "+08:00",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    define: {
        timestamps: false,
        underscored: true,
        freezeTableName: true
    },
    // logging: {
    //   info: function () { },
    //   apply: function () { }
    // }
    logging: function () { }
};
