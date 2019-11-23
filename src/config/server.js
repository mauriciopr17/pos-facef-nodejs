console.log('scr/config/server.js');

import Hapi from '@hapi/hapi';
import { Sequelize, Model, DataTypes } from 'sequelize';
import { CREATED, NO_CONTENT } from 'http-status';



//SQLite
const sequelize = new Sequelize('sqlite:blog.sqlite');

const data = [
    {
        //id: 1,
        title: 'Novo post',
        content: 'Olá amigos, noss primeiro post'
    },
    {
        //id: 2,
        title: 'Outro post',
        content: 'Olá amigos, estamos a todo vapor produzindo conteúdo aqui'
    }
];



const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

//    console.log('chegou 2');

//registrando plugins
await server.register([
    {
      plugin: require('hapi-sequelizejs'),
      options: [
        {
          name: 'fitafit',  //é um atributo dentro deste projeto para identificar o banco que estou trabalhando
          models: [
            './src/api/**/**.models.js'
          ],
          sequelize,
          sync: true
        }
      ]
    },
    {
      plugin: require('hapi-router'),
      options: {
        routes: 'src/api/**/**.routes.js'
      }
    }
  ]);


server.route(
    {
    method: 'GET',
    path: '/',
    handler: async (request, h) => {
      return 'Hello hapi';
    }
  });



    try{
        //{force: true}
        //await sequelize.sync({force: true});
        await sequelize.sync();
        //força o insert no banco da lista do json data
        //Post.bulkCreate(data);
    }catch(error){
        throw new Error(error);
    }
    
    await server.start();

    console.log('Server running on %s', server.info.uri);

};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
})

init();