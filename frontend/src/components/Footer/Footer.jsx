import "../../styles/footer/footer.css";
import { FaInstagram } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { AiOutlineLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="footer">
			<section id="footer__data">
				<p className="footer__copy">
					Copyright &copy; QuantumScript Services 2024
				</p>
				<ul className="footer__social">
					<li>
						<a
							href="https://www.instagram.com/quantumscript.web"
							target="_blank"
							rel="noopener noreferrer"
							className="footer__social--icon"
						>
							<FaInstagram />
						</a>
					</li>
					<li>
						<a
							href="mailto:contact.quantumscript@gmail.com"
							target="_blank"
							rel="noopener noreferrer"
							className="footer__social--icon"
						>
							<MdOutlineMailOutline />
						</a>
					</li>
					<li>
						<a
							href="https://www.linkedin.com/company/quantumscript-services/"
							target="_blank"
							rel="noopener noreferrer"
							className="footer__social--icon"
						>
							<AiOutlineLinkedin />
						</a>
					</li>
				</ul>
			</section>
			<section id="footer__payments">
				<ul>
					<li>
						<img
							src="/img/logos-payments/BinanceCoin-Logo.wine.webp"
							alt="Binance" loading="lazy" 
						/>
					</li>
					<li>
						<img
							src="/img/logos-payments/Bitcoin-Logo.wine.webp"
							alt="Bitcoin" loading="lazy"
						/>
					</li>
					<li>
						<img src="/img/logos-payments/Ethereum-Logo.wine.webp" alt="Ether" loading="lazy" />
					</li>
					<li>
						<img src="/img/logos-payments/Tether-Logo.wine.webp" alt="Tether - USDT" loading="lazy" />
					</li>
					<li>
						<img
							src="/img/logos-payments/Mastercard-Logo.wine.webp"
							alt="Mastercard" loading="lazy"
						/>
					</li>
					<li>
						<img src="/img/logos-payments/Visa_Inc.-Logo.wine.webp" alt="Visa" loading="lazy" />
					</li>
					<li>
						<img src="/img/logos-payments/Mercado-pago.webp" alt="Mercado Pago" loading="lazy" />
					</li>
				</ul>
			</section>
			<section id="footer__terms">
				<Link id="footer__terms--link" to="/terms">
					Términos y condiciones
				</Link>
			</section>
		</footer>
	);
};

export default Footer;

