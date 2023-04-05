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
								<Link href="/about" className="text-white hover:text-gray-300">
									About Us
								</Link>
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
										<Link
											href="#"
											className="block px-4 py-2 text-white hover:bg-gray-700">
											Option 1
										</Link>
									</li>
									<li>
										<Link
											href="#"
											className="block px-4 py-2 text-white hover:bg-gray-700">
											Option 2
										</Link>
									</li>
									<li>
										<Link
											href="#"
											className="block px-4 py-2 text-white hover:bg-gray-700">
											Option 3
										</Link>
									</li>
								</ul>
							</li>
							<li>
								<Link
									href="/organizations"
									className="text-white hover:text-gray-300">
									Organizations
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
