import { instances } from 'hapi-sequelizejs';
import { create } from 'domain';



const Post = instances.getModel('Post');

export default class PostsDAO{
    findAll(){
        return Post.findAll();
    }
    
    findByID(id){
        return Post.findByPk(id);
    }
    
    create( post ){
        return Post.create( post );
    }

    //utilizado async apenas quando precisa aguardar algum retorno
    async update(id, post){
        await Post.update(post, { where: { id } } );
        return await this.findByID(id);
    }

    destroy(id){
        return Post.destroy( { where: { id } })
    }

}


