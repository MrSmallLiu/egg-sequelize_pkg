module.exports = app => {
    const { STRING, INTEGER } = app.Sequelize;
    const DcxtCdb = app.model.define(
        "dcxt_cdb",
        {
            data_id: {
                type: INTEGER,
                primaryKey: true
            },
            tycd_name: STRING(255),
            tycd_tz: INTEGER
        },
        {
            timestamps: true,
            underscored: true,
            freezeTableName: true,
            tableName: "dcxt_cdb"
        }
    );
    return DcxtCdb;
};