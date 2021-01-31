import {Sequelize, DataTypes} from 'sequelize';

const dbName = process.env.POSTGRES_DB || '';
const dbUser = process.env.POSTGRES_USER || '';
const dbPassword = process.env.POSTGRES_PASSWORD || '';
const dbHost = process.env.DB_HOST || '';
const dbPort = process.env.DB_PORT || '';

const db: any = {};

let sequelize: any;
sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  pool: {
    max: 1,
    min: 0,
  },
  define: {
    freezeTableName: true,
  },
  dialect: 'postgres',
  host: dbHost,
  port: parseInt(dbPort, 10),
  ssl: true,
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

const credential = db.sequelize.define(
  'credential',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deletedAt: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: 'credential',
    timestamps: true,
  }
);

const user = db.sequelize.define(
  'user',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    experience: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    deletedAt: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: 'user',
    timestamps: true,
  }
);

credential.belongsTo(user, {foreignKey: 'id'});
user.hasOne(credential, {foreignKey: 'id'});

db.credential = credential;
db.user = user;

export default db;
