import { useEffect, useState } from 'react';
import Api from './components/Api';
import Cart from './components/Cart';
import Header from './components/Header';
import ProductList from './components/ProductList';
import './styles/GlobalStlye.css'
import './styles/App.css'

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([])


  useEffect(() => {
    Api
      .get()
      .then((resp) => {

        const { data } = resp
        setProducts(data)
        setFilteredProducts(data)

      })
      .catch((err) => console.error(err))
  }, [])

  function searchProducts(event) {

    event.length ?

      setFilteredProducts(products.filter(elem =>
        elem.name.toLowerCase().includes(event.toLowerCase()) || elem.category.toLowerCase().includes(event.toLowerCase())))
      :
      setFilteredProducts(products)

  }

  function handleCart(id) {
    const product = products.find(elem => elem.id === id)
    if (currentSale.every(elem => elem.id !== product.id)) {
      setCurrentSale([...currentSale, product])
    }
  }

  function filterCart(transaction) {
    if (currentSale.length > 0) {
      const attFiltered = currentSale.filter(
        elem => elem !== transaction
      )
      setCurrentSale(attFiltered)
    }
  }


  return (
    <div className="App">
      <Header searchProducts={searchProducts} />

      <main>
        <ProductList
          handleCart={handleCart}
          filteredProducts={filteredProducts} />

        <Cart currentSale={currentSale}
          filterCart={filterCart}
          setCurrentSale={setCurrentSale} />
      </main>
    </div>
  )
}

export default App
