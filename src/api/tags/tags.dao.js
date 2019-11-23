import { instances } from 'hapi-sequelizejs';
import { create } from 'domain';



const Tag = instances.getModel('Tag');


export default class TagsDAO{
    findAll( where ){
        
        return Tag.findAll( { where } );
        
    }
    
    findByID( where ){
        return Tag.findOne({ where });
    }
    
    create( tag ){
        return Tag.create( tag );
    }

    //utilizado async apenas quando precisa aguardar algum retorno
    async update(id, tag){
        await Tag.update(tag, { where: { id } } );
        return await this.getByID(params.id);
    }

    destroy( where ){
        return Tag.destroy( { where } )
    }

}


