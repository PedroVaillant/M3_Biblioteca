import { Link } from 'react-router-dom'
import { BsFacebook, BsInstagram, BsTwitter, BsFillTelephoneFill } from "react-icons/bs";

import Styles from '../styles/Footer.css'

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
                    <a href="https://web.facebook.com"><p><BsFacebook /> Facebook</p></a>
                    <a href="https://www.instagram.com"><p><BsInstagram /> Instagram</p></a>
                    <a href="https://twitter.co "><p><BsTwitter /> Twitter</p></a>
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