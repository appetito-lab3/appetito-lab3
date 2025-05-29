import { TesloProduct } from '@/interfaces/teslo-products.response';
import { petitoApi } from '../../../config/api/petitoApi';
import { ProductMapper } from '../../../interfaces/mappers/product.mapper';
//import type { Product } from '../../domain/entities/product';


export const getProductsByPage = async (page: number, limit: number = 20) => {


  console.log({page, limit});

  try {

    const { data } = await petitoApi.get<TesloProduct[]>(`/api/products?offset=${ page * 10 }&limit=${ limit }`);

    const products = data.map(  ProductMapper.tesloProductToEntity );
    console.log( products  );
    return products;

  } catch (error) {
    console.log(error);
    throw new Error('Error getting products');

  }
};