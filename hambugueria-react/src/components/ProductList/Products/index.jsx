import './style.css'

export default function ProductCard({ products, handleCart }) {

    return (
        <div className='card--product'>
            <div className='product--container--img'>
                <img className='product--img' src={products.img} alt={products.name} />
            </div>
            <h3 className='product--name'>{products.name}</h3>
            <h4 className='product--category'>{products.category}</h4>
            <p className='product--price'>{`R$ ${products.price.toFixed(2)}`}</p>

            <button className='product--btn' onClick={() => handleCart(products.id)}>
                Adicionar
            </button>
        </div>
    )
}