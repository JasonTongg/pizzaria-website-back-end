import Express from 'express';
import {getAllProduct, createProduct, deleteProduct} from './Message.js'

const Router = Express.Router();

Router.get('/', getAllProduct);
Router.post('/', createProduct);
Router.delete('/:id', deleteProduct);

export default Router;
