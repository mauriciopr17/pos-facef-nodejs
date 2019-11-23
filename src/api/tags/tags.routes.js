import { list, create, detail, update, destroy } from "./tags.controllers";
import * as Schemas from './tags.schemas'
//post/postid/tag

export default [
    {
      method: 'GET',
      path: '/posts/{postid}/tags',
      handler: list
    },
    {
      method: 'GET',
      path: '/posts/{postid}/tags/{id}',
      handler: detail,
      config:{
          validate:{
              params: Schemas.params
          }
      }
    },
    {
      method: 'POST',
      path: '/posts/{postid}/tags',
      handler: create,
      config:{
          validate:{
              payload: Schemas.payload 
          }
      }
    },
    {
        method: 'PUT',
        path: '/posts/{postid}/tags{id}',
        handler: update,
        config:{ validate: Schemas.update }
     },
     {
        method: 'DELETE',
        path: '/posts/{postid}/tags/{id}',
        handler: destroy,
        config:{
            validate:{
                params: Schemas.params
            }
        }
     }

];

