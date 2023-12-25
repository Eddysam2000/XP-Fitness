import { Link } from "react-router-dom"
import Logo from '../images/logo.png'
import { FaFacebook } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
        <div className="container footer_container">
            <article>
                <Link to="/" className="logo">
                    <img src={Logo} alt="Footer Logo" />
                </Link>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis illum deleniti, perferendis fugit cumque similique? Consequuntur eaque enim in?
                </p>
                <div className="footer_socials">
                    <a href="https://linkedin.com/" target="_blank"></a>
                </div>
            </article>
        </div>
    </footer>
  )
}

export default Footer