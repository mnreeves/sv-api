import { sequelizeConnection } from './../utils/bootstrap_database_authenticate';
import { Model, InferAttributes, DataTypes, InferCreationAttributes, CreationOptional, Sequelize } from 'sequelize';

export class PostsTable extends Model<InferAttributes<PostsTable>, InferCreationAttributes<PostsTable>> {
  declare id: CreationOptional<number>;
  declare title: string;
  declare content: string;
  declare category: string;
  declare status: string;
}


export default function setupPostsTable() {
  PostsTable.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        field: 'Id'
      },
      title: {
        type: DataTypes.STRING(200),
        allowNull: false,
        field: 'Title'
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
        field: 'Content'
      },
      category: {
        type: DataTypes.STRING(100),
        allowNull: false,
        field: 'Category'
      },
      status: {
        type: DataTypes.STRING(100),
        field: 'Status'
      }
    },
    {
      sequelize: sequelizeConnection,
      timestamps: true,
      tableName: 'posts',
      createdAt: 'Created_date',
      updatedAt: 'Updated_date'
    }
  );

  PostsTable.sync({ alter: true });
}