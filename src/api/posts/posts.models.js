import { Model } from 'sequelize';

export default( sequelize, DataTypes) => {
    class Post extends Model{}

    Post.init({
        title: DataTypes.STRING,
        content: DataTypes.TEXT
    }, { sequelize, modelName: 'Post' });

    return Post;
};