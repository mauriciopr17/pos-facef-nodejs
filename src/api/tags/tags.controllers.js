import { CREATED } from 'http-status';
import TagsDAO from './tags.dao';


const tagsDAO = new TagsDAO();

export async function list(request, h){
    //request.param recebe a os parâmetros da rota
    return await tagsDAO.findAll( request.params );    
}


export async function detail(request, h){
    
    const { params } = request;
    return await tagsDAO.findByID( params );
    ///???return await tagsDAO.findOne( { where: request.params }  ); //?????

}


export async function create(request, h){
    const { payload } = request;
    const tags = await tagsDAO.create(payload);

    return h.response(tags).code(CREATED);

}

export async function update(request, h){
    const{ payload, params: { id } } = request;

    return await tagsDAO.update(id, payload);
}


//delete
export async function destroy(request, h){
    const{ id } = request.params;

    return await tagsDAO.destroy(id);
}