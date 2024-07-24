import { Sequelize } from 'sequelize';

// sequelize (db name, usuario_bd, contraseña){host}
const db = new Sequelize('blogs', 'root', '', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
})

export default db