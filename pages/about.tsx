import Image from 'next/image';
import coalpaca from '../public/assets/coalpaca.png';

const About = () => {
	return (
		<div>
			<section className="bg-white h-[calc(100vh-64px)] relative overflow-hidden">
				<div className="container mx-auto px-4 py-32 flex flex-col">
					<div className="w-3/5 mx-auto">
						<h1 className="text-6xl font-semibold text-left text-yellow font-secondary tracking-wider">
							Council of Organizations of the Ateneo-Davao
						</h1>
						<p className="text-justify indent-12 font-primary text-black mt-8">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Blanditiis laborum, eaque incidunt deleniti sunt ipsa, asperiores
							commodi aut rerum aliquid culpa dignissimos ad! Veritatis ea
							consequuntur porro dignissimos, maiores reiciendis sunt incidunt
							ab laboriosam natus necessitatibus, dolores, fugit eum deleniti
							quis nulla! Vero consequatur odio soluta eveniet laborum eaque
							nobis dolorem asperiores omnis magnam ducimus fugiat similique,
							alias qui voluptates ipsa non maxime veniam doloremque officiis
							debitis, iure repellat ex? Quo sed, provident facilis dolorum
							doloremque asperiores sit voluptatum, sequi ad blanditiis veniam
							suscipit. Vitae amet quo eveniet sit tempora harum, corporis id
							rerum alias minima sequi quasi reiciendis sapiente!
						</p>
						<p className="text-justify indent-12 font-primary text-black mt-8">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Blanditiis laborum, eaque incidunt deleniti sunt ipsa, asperiores
							commodi aut rerum aliquid culpa dignissimos ad! Veritatis ea
							consequuntur porro dignissimos, maiores reiciendis sunt incidunt
							ab laboriosam natus necessitatibus, dolores, fugit eum deleniti
							quis nulla! Vero consequatur odio soluta eveniet laborum eaque
							nobis dolorem asperiores omnis magnam ducimus fugiat similique,
							alias qui voluptates ipsa non maxime veniam doloremque officiis
							debitis, iure repellat ex? Quo sed, provident facilis dolorum
							doloremque asperiores sit voluptatum, sequi ad blanditiis veniam
							suscipit. Vitae amet quo eveniet sit tempora harum, corporis id
							rerum alias minima sequi quasi reiciendis sapiente!
						</p>
					</div>
				</div>
				<Image
					src={coalpaca}
					alt="coa-lpaca"
					className="absolute min-w-auto hidden md:hidden lg:flex -right-[500px] -bottom-32"
				/>
			</section>

			<section className="bg-white h-[calc(100vh-64px)] relative overflow-hidden">
				<svg className="w-full absolute top-0" viewBox="0 0 900 600">
					<defs>
						<pattern
							id="img1"
							patternUnits="userSpaceOnUse"
							width="100"
							height="100">
							<image
								xlinkHref="assets/pattern-1-x.png"
								x="0"
								y="0"
								preserveAspectRatio="none"
								width="100"
								height="44"
							/>
						</pattern>
					</defs>
					<rect height="64px" width="100%" fill="url(#img1)" />
				</svg>

				<div className="container mx-auto px-4 py-32 flex flex-col justify-center items-center">
					<div className="w-3/5 mx-auto">
						<div className="flex flex-col mt-12">
							<h1 className="text-5xl text-left text-yellow font-secondary tracking-wider">
								Vision
							</h1>
							<p className="text-justify indent-12 font-primary text-black mt-6">
								Lorem, ipsum dolor sit amet consectetur adipisicing elit.
								Blanditiis laborum, eaque incidunt deleniti sunt ipsa,
								asperiores commodi aut rerum aliquid culpa dignissimos ad!
								Veritatis ea consequuntur porro dignissimos, maiores reiciendis
								sunt incidunt ab laboriosam natus necessitatibus, dolores, fugit
								eum deleniti quis nulla! Vero consequatur odio soluta eveniet
								laborum eaque nobis dolorem asperiores omnis magnam ducimus
								fugiat similique, alias qui voluptates ipsa non maxime veniam
								doloremque officiis debitis, iure repellat ex? Quo sed,
								provident facilis dolorum doloremque asperiores sit voluptatum,
								sequi ad blanditiis veniam suscipit. Vitae amet quo eveniet sit
								tempora harum, corporis id rerum alias minima sequi quasi
								reiciendis sapiente!
							</p>
						</div>
						<div className="flex flex-col mt-12">
							<h1 className="text-5xl text-left text-yellow font-secondary tracking-wider">
								Mission
							</h1>
							<p className="text-justify indent-12 font-primary text-black mt-6">
								Lorem, ipsum dolor sit amet consectetur adipisicing elit.
								Blanditiis laborum, eaque incidunt deleniti sunt ipsa,
								asperiores commodi aut rerum aliquid culpa dignissimos ad!
								Veritatis ea consequuntur porro dignissimos, maiores reiciendis
								sunt incidunt ab laboriosam natus necessitatibus, dolores, fugit
								eum deleniti quis nulla! Vero consequatur odio soluta eveniet
								laborum eaque nobis dolorem asperiores omnis magnam ducimus
								fugiat similique, alias qui voluptates ipsa non maxime veniam
								doloremque officiis debitis, iure repellat ex? Quo sed,
								provident facilis dolorum doloremque asperiores sit voluptatum,
								sequi ad blanditiis veniam suscipit. Vitae amet quo eveniet sit
								tempora harum, corporis id rerum alias minima sequi quasi
								reiciendis sapiente!
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="bg-white relative overflow-hidden">
				<svg className="w-full absolute top-0" viewBox="0 0 900 600">
					<defs>
						<pattern
							id="img1"
							patternUnits="userSpaceOnUse"
							width="100"
							height="100">
							<image
								xlinkHref="assets/pattern-1-x.png"
								x="0"
								y="0"
								preserveAspectRatio="none"
								width="100"
								height="44"
							/>
						</pattern>
					</defs>
					<rect height="64px" width="100%" fill="url(#img1)" />
				</svg>

				<div className="container mx-auto px-4 py-32 flex flex-col justify-center items-center">
					<div className="w-3/5 mx-auto">
						<div className="flex flex-col mt-12">
							<h1 className="text-5xl text-left text-yellow font-secondary tracking-wider">
								Offices and Assemblages
							</h1>
							<p className="text-justify indent-12 font-primary text-black mt-6">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Dignissimos porro ullam unde quaerat doloribus ut eaque, ea
								dolore quidem accusantium magnam voluptatum provident dolorem
								necessitatibus placeat perspiciatis quas, quod rem?
							</p>
						</div>
						<div className="flex space-x-16 mt-8">
							<button className="w-1/2 bg-yellow text-black px-8 py-4 rounded-md font-primary text-2xl hover:bg-darkblue z-10">
								OFFICES
							</button>
							<button className="w-1/2 bg-yellow text-black px-8 py-4 rounded-md font-primary text-2xl hover:bg-darkblue z-10">
								ASSEMBLAGES
							</button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default About;
