import Image from 'next/image';
import {
	AiFillFacebook,
	AiFillInstagram,
	AiFillMail,
	AiFillTwitterSquare,
} from 'react-icons/ai';
import coad_logo_white from '../../public/assets/coad-logo-white.png';

const Footer = () => {
	return (
		<footer className="py-8 bg-darkerblue">
			<div className="container mx-auto">
				<div className="flex justify-between">
					<div className="mb-0">
						<a href="#" className="flex items-center">
							<Image
								src={coad_logo_white}
								className="h-32 w-auto mr-3"
								alt="COA-D Logo"
							/>
						</a>
						<p className="self-center text-sm whitespace-nowrap text-white font-extralight">
							Copyright &copy; 2022{' '}
							<span className="font-semibold tracking-wider">COA-D</span>
						</p>
						<p className="self-center text-sm whitespace-nowrap text-white font-extralight">
							Developed by{' '}
							<span className="font-semibold tracking-wider">
								COA-D Systems Development
							</span>
						</p>
						<p className="self-center text-sm whitespace-nowrap text-white font-extralight">
							All Rights Reserved
						</p>
					</div>
					<div className="flex flex-col items-center">
						<h2 className="text-2xl font-secondary tracking-widest font-semibold text-white ">
							Connect with us!
						</h2>
						<div className="flex flex-row space-x-8">
							<a
								href="#"
								className="text-white hover:text-gray-900 dark:hover:text-white">
								<AiFillMail size={30} />
								<span className="sr-only">Email page</span>
							</a>
							<a
								href="#"
								className="text-white hover:text-gray-900 dark:hover:text-white">
								<AiFillFacebook size={30} />
								<span className="sr-only">Facebook page</span>
							</a>
							<a
								href="#"
								className="text-white hover:text-gray-900 dark:hover:text-white">
								<AiFillInstagram size={30} />
								<span className="sr-only">Instagram page</span>
							</a>
							<a
								href="#"
								className="text-white hover:text-gray-900 dark:hover:text-white">
								<AiFillTwitterSquare size={30} />
								<span className="sr-only">Twitter page</span>
							</a>
						</div>
					</div>
				</div>
			</div>
			<script src="/script.js" defer></script>
		</footer>
	);
};

export default Footer;
