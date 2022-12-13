import './stlye.css'
function Header({ searchProducts }) {


    return (
        <header className='headerPage'>
            <div className="conatiner--logo">
                <h2 className="logo--burguer">Burguer</h2>
                <h3 className="logo--kenzie">Kenzie</h3>
            </div>

            <form
                className="header--form"
                onSubmit={(event) => {
                    event.preventDefault()
                    searchProducts(event.target[0].value)
                }}
            >

                <input type="text"
                    className="header--form--input"
                    placeholder="Digitar Pesquisa"
                    onChange={(event) => {
                        event.preventDefault()
                        searchProducts(event.target.value)
                    }}
                />

                <button
                    className="header--form--btn"
                    type="submit"
                >
                    Pesquisar
                </button>
            </form>
        </header>
    )
}

export default Header