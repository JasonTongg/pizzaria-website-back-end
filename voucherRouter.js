import Express from 'express';
import {getAllProduct, createProduct, deleteProduct, getProductsById} from './voucher.js'

const Router = Express.Router();

Router.get('/', getAllProduct);
Router.get('/:id', getProductsById);
Router.post('/', createProduct);
Router.delete('/:id', deleteProduct);

export default Router;
