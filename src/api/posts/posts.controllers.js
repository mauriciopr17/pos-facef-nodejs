import { CREATED } from 'http-status';
import PostsDAO from './posts.dao';

const postDAO = new PostsDAO();

export async function list(request, h){
    return await postDAO.findAll();    
}


export async function detail(request, h){
    const { id } = request.params;

    return await postDAO.findByID(id);

}


export async function create(request, h){
    const { payload } = request;
    const post = await postDAO.create(payload);

    return h.response(post).code(CREATED);

}

export async function update(request, h){
    const{ payload, params: { id } } = request;

    return await postDAO.update(id, payload);
}


//delete
export async function destroy(request, h){
    const{ id } = request.params;

    return await postDAO.destroy(id);
}