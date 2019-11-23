import { Model } from 'sequelize';

export default ( sequelize, dataTypes ) =>{

class Tag extends Model{}

    Tag.init({
        name: dataTypes.STRING,
        postId: dataTypes.INTEGER
    }, { sequelize, modelName: 'Tag' } );

    //fazendo relacionamento
    //belongsTo => pertence à, tag pertence à post
    Tag.associate = models =>{
        models.Tag.belongsTo(models.Post, { as: 'post' });
    }
    
    return Tag;

};