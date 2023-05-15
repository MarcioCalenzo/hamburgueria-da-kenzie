import ProductCard from './Products/index.jsx'
import './stlye.css'

export default function ProductList({ handleCart, filteredProducts }) {

    return (
        <section className='list--products'>
            {filteredProducts.map(elem => <ProductCard key={elem.id} products={elem} handleCart={handleCart} />)}

        </section>
    )
}
