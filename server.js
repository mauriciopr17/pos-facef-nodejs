
const Hapi = require('@hapi/hapi');

const { Sequelize, Model, DataTypes } = require('sequelize');
const { CREATED } = require('http-status');
const { NO_CONTENT } = require('http-status');

/*
const sequelize = new Sequelize('blognodejs', 'root', 'senha'{
    dialect: 'mysql'
});
*/

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

//
class Post extends Model{}
Post.init({
    title: DataTypes.STRING,
    content: DataTypes.TEXT
}, { sequelize, modelName: 'post' });


    server.route({
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
    });    

    
    try{
        //{force: true}
        //await sequelize.sync({force: true});
        await sequelize.sync();
        //força o insert no banco da lista do json data
        Post.bulkCreate(data);
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

