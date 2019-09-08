module.exports = function(sequelize, DataTypes) {
    var Todos = sequelize.define('Todos', 
        {
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
            name: { type: DataTypes.STRING },
            done: { type: DataTypes.BOOLEAN }
        })
    return Todos
}