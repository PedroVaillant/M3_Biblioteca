import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav id="navbar">
            <Link to="/">
                <div className='reactlibmarca'>
                    <h2>
                        <img src="./img/icon.png" width="85" height="80" />
                        <br />
                        React Books
                    </h2>
                </div>
            </Link>
            <div className='navbaropcoes'>
                <ul>
                    <Link to="/livros"><li>Livros</li></Link>
                    <Link to="/sobre"><li>Sobre nós</li></Link>
                    <Link to="/"><li>TESTE</li></Link>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar