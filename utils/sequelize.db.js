const Sequelize = require("sequelize");
const { schema, utils } = require("../src/models/index.model");

const sequelize = new Sequelize(process.env.DB_URI, {
    logging: false,
    define: {
        timestamps: true,
        freezeTableName: true,
    },
    dialect: 'mysql'
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.login = require("../src/models/login/login.model.js")(sequelize, Sequelize);

schema.forEach(x => {
    console.log(x.model);
     if(x.model == 'login' || x.model == 'post' 
     ){ 
        console.log('if ', x.table);
    }
    else {
        db[x.model] = sequelize.define(x.table, x.path.schema, x.path.utils);
        db[x.model].associate = x.path.associate;
    }
});


Object.keys(db).forEach(function (modelName) {
    if (modelName != 'Sequelize' && modelName != 'sequelize') {
        if (db[modelName].associate) {
            db[modelName].associate(db[modelName], db)
        }
    }
})

module.exports = db;