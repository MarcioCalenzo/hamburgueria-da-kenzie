import './stlye.css'
import { FiTrash2 } from 'react-icons/fi'

export default function Cart({ currentSale, filterCart, setCurrentSale }) {

    const totalCart = () => {
        return currentSale.reduce((soma, atual) => soma + atual.price, 0)
    }

    return (
        <>
            {currentSale.length > 0 ? (
                <aside className='cart'>
                    <div className='cart--title'>
                        <h3>Carrinho de Compras</h3>
                    </div>
                    <div className='cart--container'>
                        {currentSale.map(elem => {
                            return (
                                <div className='cart--product' key={elem.id}>
                                    <img className='cart--product--img' src={elem.img} alt={elem.name} />
                                    <div className='cart--product--cont'>
                                        <div className='cart--product--descr'>
                                            <h3>{elem.name}</h3>
                                            <span>{elem.category}</span>
                                        </div>
                                        <button
                                            onClick={() => filterCart(elem)}
                                        >
                                            <FiTrash2 />
                                        </button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='cart--value'>
                        <div>
                            <hr />
                        </div>
                        <div className='cart--value--total'>
                            <span className='cart--value--name'>
                                Total
                            </span>
                            <span className='cart--value--value'>
                                {`R$ ${totalCart().toFixed(2)}`}
                            </span>
                        </div>
                        <div className='cart--value--btn'>
                            <button
                                onClick={() => setCurrentSale([])}
                            >
                                Remover Todos
                            </button>
                        </div>
                    </div>
                </aside>
            ) : (
                <aside className='cart--empty'>
                    <div className='cart--title'>
                        <h3>Carrinho de Compras</h3>
                    </div>
                    <div className='empty--container'>
                        <h3 className='empty--container--h3'>Sua sacola está vazia</h3>
                        <span className='empty--container--span'>Adicione itens</span>
                    </div>
                </aside>
            )}


        </>
    )
}