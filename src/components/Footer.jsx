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
                <Link to="/">
                    <img src="" alt="" />
                </Link>
            </article>
        </div>
    </footer>
  )
}

export default Footer