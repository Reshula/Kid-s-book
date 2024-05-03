import imageF from '../Assets/icon-facebook.png';
import imageI from '../Assets/icon-instagram.png';
import imageY from '../Assets/icon-youtube.png';
import './Footer.css';
import { motion } from "framer-motion";
const Footer = ()=>{

	return(
		<div>
			<div className='footer-container'>
				<div className='fototer-left'>
					<h4 className='footer-title'>Contact</h4>
					<div className='footer-link'>
						<p className='par'>363 Penn Ave, Newmarket</p>
						<p className='par'>E-mail contact@kid.s.book.com</p>
						<p className='par'>+1 437 2311537</p>
					</div>
				</div>
				
				<div className='footer-center'>
				<h4 className='footer-title'>Service</h4>
				<div className='footer-link'>
					<p className='par'>Home</p>
					<p className='par'>Shop</p>
					<p className='par'>Shipping</p>
					<p className='par'>Legal&Privacy</p>
				</div>
				</div>
				

				<div className='footer-right'>
					<h4 className='Footer-title'>Sosial media</h4>
					<motion.span className="social-icon" whileHover={{scale: 1.2, color: '#fffff'}}>
						<img className='footer-icon' src={imageF} alt ="icon"/>
					</motion.span>
						<span>
						<img className='footer-icon'src={imageI} alt ="icon"/>
						</span>
						<span>
						<img className='footer-icon'src={imageY} alt ="icon"/>
						</span>
				</div>
		

				
				

			</div>
			<div className='footer-botom'>
				<p>Developed by Reyhana Musayeva

For educational purposes</p></div>
		</div>
	)




}
export default Footer;





