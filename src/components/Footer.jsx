import { Link } from 'react-router-dom'
import { BsFacebook, BsInstagram, BsTwitter, BsFillTelephoneFill } from "react-icons/bs";

const Footer = () => {
    return (
        <div>
            <footer id='footer'>
                <Link to="/">
                    <div className='reactlibmarcafooter'>
                    <h2>
                        <img src="./img/icon.png" width="75" height="70" />
                        <br />
                            React Books
                        </h2>
                    </div>
                </Link>
                <div className='redesocias'>
                    <h2>Nossas redes sociais</h2>
                    <a href="/"><p><BsFacebook /> Facebook</p></a>
                    <a href="/"><p><BsInstagram /> Instagram</p></a>
                    <a href="/"><p><BsTwitter /> Twitter</p></a>
                </div>
                <div className='contatos'>
                    <h2>Contatos</h2>
                    <p><BsFillTelephoneFill /> (11) 4002-8922</p>
                    <p><BsFillTelephoneFill /> (11) 4002-8922</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer