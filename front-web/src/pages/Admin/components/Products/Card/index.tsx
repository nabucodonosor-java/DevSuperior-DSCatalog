import React from 'react';
import { Product } from 'core/types/Products';
import ProductPrice from 'core/components/ProductPrice';
import { Link } from 'react-router-dom';
import './styles.scss';

type Props = {
    product: Product;
    onRemove: (productId: number) => void;
}
 
const Card = ({ product, onRemove }: Props) => {

    return (
        <div className="card-base product-card-admin">
            <div className="text-center border-right py-3 border-img">
                <img src={product.imgUrl}
                    alt={product.name} className="product-card-img-admin" />
            </div>
            <div className="card-content">
                <h3 className="product-card-name-admin">
                    {product.name}
                </h3>
                <ProductPrice price={product.price} />
                <div>

                    <span className="badge rounded-pill bg-secondary mr-2">
                        {product?.categories.map(c => " - " + c.name + " - ")}
                    </span>

                </div>
            </div>
            <div className="btn-container">
                <Link
                    to={`/admin/products/${product.id}`}
                    type="button"
                    className="btn btn-outline-secondary btn-block border-radius-10 btn-product"
                >
                    EDITAR
                </Link>

                <button
                    type="button"
                    className="btn btn-outline-danger btn-block border-radius-10 btn-product"
                    onClick={() => onRemove(product.id)}
                >
                    EXCLUIR
                </button>
            </div>
        </div>
    )
}

export default Card;