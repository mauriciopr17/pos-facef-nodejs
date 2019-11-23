import { list, create, detail, update, destroy } from "./posts.controllers";
import * as Schemas from './posts.schemas'


export default [
    {
      method: 'GET',
      path: '/posts',
      handler: list
    },
    {
      method: 'GET',
      path: '/posts/{id}',
      handler: detail,
      config:{
          validate:{
              params: Schemas.params
          }
      }
    },
    {
      method: 'POST',
      path: '/posts',
      handler: create,
      config:{
          validate:{
              payload: Schemas.payload 
          }
      }
    },
    {
        method: 'PUT',
        path: '/posts/{id}',
        handler: update,
        config:{ validate: Schemas.update }
     },
     {
        method: 'DELETE',
        path: '/posts/{id}',
        handler: destroy,
        config:{
            validate:{
                params: Schemas.params
            }
        }
     }

];

/*server.route({
    method: 'GET',
    path: '/',
    handler: async (request, h) => {
        return 'Hello hapi';
    }
});

//retorna todos
server.route({
    method: 'GET',
    path: '/posts',
    handler: async (request, h) => {
        return await Post.findAll();
    }
});

//rota de detalhe
server.route({
    method: 'GET',
    path: '/posts/{id}',
    handler: async (request, h) => {
        
        const { id } = request.params;
        //const post = data.find( post => post.id === parseInt(id) );
        return await Post.findByPk(id);

    }
});

server.route({
    method: 'POST',
    path: '/posts',
    handler:  async (request, h) => {
        const{ payload } = request;
        const post = await Post.create(payload);
        return h.response(post).code(CREATED);
    }
});

server.route({
    method: 'PUT',
    path: '/posts/{id}',
    handler:  async (request, h) => {
        const { params: { id }, payload } = request;
        await Post.update(payload, { where: { id } } );
        // fazendo com que seja retornado os dados alterados
        return post = await Post.findByPk(id);
    }
});    

server.route({
    method: 'DELETE',
    path: '/posts/{id}',
    handler:  async (request, h) => {
        const { id } = request.params;
        await Post.destroy( { where: { id } } );
        return h.response().code(NO_CONTENT);
    }
});  */