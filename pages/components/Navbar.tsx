import Image from 'next/image';
import Link from 'next/link';
import { RxCaretDown } from 'react-icons/rx';

const Navbar = () => {
	return (
		<nav className="bg-darkerblue font-primary">
			<div className="container mx-auto">
				<div className="flex items-center justify-between h-20">
					<div className="flex flex-shrink-0 h-16 w-16">
						<Image
							src="/assets/coad-logo.png"
							alt="COA-D Logo"
							height={100}
							width={100}
						/>
					</div>

					<div className="hidden md:flex">
						<ul className="flex space-x-16">
							<li>
								<Link href="/" className="text-white hover:text-gray-300">
									Home
								</Link>
							</li>
							<li>
								<a href="/about" className="text-white hover:text-gray-300">
									About Us
								</a>
							</li>
							<li className="relative">
								<a
									id="dropdown-link"
									className="text-white hover:text-gray-300">
									Services <RxCaretDown className="inline" size="20" />
								</a>
								<ul
									id="dropdown-list"
									className="absolute right-0 mt-2 w-32 bg-gray-800 rounded-md shadow-lg z-10 hidden">
									<li>
										<a
											href="#"
											className="block px-4 py-2 text-white hover:bg-gray-700">
											Option 1
										</a>
									</li>
									<li>
										<a
											href="#"
											className="block px-4 py-2 text-white hover:bg-gray-700">
											Option 2
										</a>
									</li>
									<li>
										<a
											href="#"
											className="block px-4 py-2 text-white hover:bg-gray-700">
											Option 3
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="#" className="text-white hover:text-gray-300">
									Offices
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
