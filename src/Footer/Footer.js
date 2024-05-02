import imageF from '../Assets/icon-facebook.png';
import imageI from '../Assets/icon-instagram.png';
import imageY from '../Assets/icon-youtube.png';
import './Footer.css'
const Footer = ()=>{

	return(
		<div>
			<div className='footer-container'>
				<div className='fototer-left'>
					<h4 className='footer-title'>Contact</h4>
					<div className='footer-link'>
						<p>363 Penn Ave, Newmarket</p>
						<p>E-mail contact@kid.s.book.com</p>
						<p>+1 437 2311537</p>
					</div>
				</div>
				
				<div className='footer-center'>
				<h4 className='footer-title'>Service</h4>
				<div className='footer-link'>
					<p>Home</p>
					<p>Shop</p>
					<p>Shipping</p>
					<p>Legal&Privacy</p>
				</div>
				</div>
				

				<div className='footer-right'>
					<h4 className='Footer-title'>Sosial media</h4>
					<span>
						<img className='footer-icon' src={imageF} alt ="icon"/>
						</span>
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





