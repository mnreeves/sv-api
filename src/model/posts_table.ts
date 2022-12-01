import { sequelizeConnection } from './../utils/bootstrap_database_authenticate';
import { Model, InferAttributes, DataTypes, InferCreationAttributes, CreationOptional, Sequelize } from 'sequelize';

export class PostsTable extends Model<InferAttributes<PostsTable>, InferCreationAttributes<PostsTable>> {
  declare id: CreationOptional<number>;
  declare title: string;
  declare content: string;
  declare category: string;
  declare status: 'Publish' | 'Draft' | 'Thrash';
  declare createdAt: Date;
  declare updatedAt: Date;
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
        field: 'Status',
        defaultValue: 'Draft'
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'Created_date',
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'Updated_date',
        defaultValue: Sequelize.fn('now')
      },
    },
    {
      sequelize: sequelizeConnection,
      timestamps: false,
      underscored: true,
      tableName: 'posts'
    }
  );

  PostsTable.sync();
}