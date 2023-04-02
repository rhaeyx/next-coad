export default function Home() {
	return (
		<div>
			{/* HERO */}
			<section className="bg-white h-[calc(100vh-64px)] relative">
				<div className="container mx-auto max-w-screen-xl overflow-y-auto px-4 py-32 flex items-center flex-col">
					{/* <h1 className="text-7xl font-extrabold whitespace-nowrap tracking-widest ">PINAGHABING HANGARIN</h1>
    <h2 className="text-3xl font-bold whitespace-nowrap font-secondary text-4xl tracking-widest">Council of Organizations of the Ateneo-Davao</h2> */}
					<h1 className="text-7xl font-extrabold whitespace-nowrap tracking-widest absolute top-96">
						PINAGHABING HANGARIN
					</h1>
					<h2 className="font-bold whitespace-nowrap absolute bottom-32 font-secondary text-4xl tracking-widest">
						Council of Organizations of the Ateneo-Davao
					</h2>
				</div>
			</section>

			<section className="bg-darkblue h-[500px] relative overflow-y-hidden">
				<div className="container mx-auto py-24">
					<h2 className="text-5xl font-bold text-left text-yellow font-secondary tracking-wider">
						About Us
					</h2>
					<p className="text-white font-secondary text-md mt-8 text-xl w-[800px]">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed iure
						atque asperiores laudantium minus reprehenderit nostrum consequuntur
						hic, aspernatur distinctio, reiciendis quos amet deleniti magnam
						odit provident voluptas, temporibus nulla doloribus repudiandae!
					</p>
					<a href="#">
						<button className="block mt-16 rounded bg-yellow px-8 py-3 text-md font-medium text-black shadow ">
							LEARN MORE
						</button>
					</a>
				</div>
				<img
					src="/assets/coalpaca.png"
					alt="coa-lpaca"
					className="absolute min-w-auto hidden md:hidden lg:flex h-[660px] right-0 -bottom-72"
				/>
			</section>

			<section className="bg-white h-[1024px] relative overflow-hidden">
				<div className="container w-[70%] mx-auto py-24 flex justify-center flex-col">
					<div className="mx-auto">
						<h2 className="text-5xl text-darkblue mb-8 font-bold text-left font-secondary tracking-wider">
							Events and Updates Year 2023
						</h2>
					</div>

					<div
						id="events"
						className="px-24 pb-12 rounded border-solid border-2 border-[#113B58]">
						<div id="month" className="mt-12">
							<h3 className="text-4xl font-extrabold text-left text-yellow font-primary ">
								January
							</h3>
							<div className="flex flex-wrap mt-4">
								<div className="border-solid border border-[#F7BA44] rounded px-8 py-2 text-left max-w-[23%] flex flex-col grow shrink-0 basis-[21%] mr-3 mt-5">
									<h4 className="text-md text-darkblue font-secondary font-bold">
										Event Name
									</h4>
									<p className="text-sm text-darkblue font-secondary">
										Sample Date
									</p>
								</div>
								<div className="border-solid border border-[#F7BA44] rounded px-8 py-2 text-left max-w-[23%] flex flex-col grow shrink-0 basis-[21%] mr-3 mt-5">
									<h4 className="text-md text-darkblue font-secondary font-bold">
										Event Name
									</h4>
									<p className="text-sm text-darkblue font-secondary">
										Sample Date
									</p>
								</div>
								<div className="border-solid border border-[#F7BA44] rounded px-8 py-2 text-left max-w-[23%] flex flex-col grow shrink-0 basis-[21%] mr-3 mt-5">
									<h4 className="text-md text-darkblue font-secondary font-bold">
										Event Name
									</h4>
									<p className="text-sm text-darkblue font-secondary">
										Sample Date
									</p>
								</div>
								<div className="border-solid border border-[#F7BA44] rounded px-8 py-2 text-left max-w-[23%] flex flex-col grow shrink-0 basis-[21%] mr-3 mt-5">
									<h4 className="text-md text-darkblue font-secondary font-bold">
										Event Name
									</h4>
									<p className="text-sm text-darkblue font-secondary">
										Sample Date
									</p>
								</div>
								<div className="border-solid border border-[#F7BA44] rounded px-8 py-2 text-left max-w-[23%] flex flex-col grow shrink-0 basis-[21%] mr-3 mt-5">
									<h4 className="text-md text-darkblue font-secondary font-bold">
										Event Name
									</h4>
									<p className="text-sm text-darkblue font-secondary">
										Sample Date
									</p>
								</div>
								<div className="border-solid border border-[#F7BA44] rounded px-8 py-2 text-left max-w-[23%] flex flex-col grow shrink-0 basis-[21%] mr-3 mt-5">
									<h4 className="text-md text-darkblue font-secondary font-bold">
										Event Name
									</h4>
									<p className="text-sm text-darkblue font-secondary">
										Sample Date
									</p>
								</div>
								<div className="border-solid border border-[#F7BA44] rounded px-8 py-2 text-left max-w-[23%] flex flex-col grow shrink-0 basis-[21%] mr-3 mt-5">
									<h4 className="text-md text-darkblue font-secondary font-bold">
										Event Name
									</h4>
									<p className="text-sm text-darkblue font-secondary">
										Sample Date
									</p>
								</div>
								<div className="border-solid border border-[#F7BA44] rounded px-8 py-2 text-left max-w-[23%] flex flex-col grow shrink-0 basis-[21%] mr-3 mt-5">
									<h4 className="text-md text-darkblue font-secondary font-bold">
										Event Name
									</h4>
									<p className="text-sm text-darkblue font-secondary">
										Sample Date
									</p>
								</div>
							</div>
						</div>

						<div id="month" className="mt-12">
							<h3 className="text-4xl font-extrabold text-left text-yellow font-primary ">
								February
							</h3>
							<div className="flex flex-wrap mt-4">
								<div className="border-solid border border-[#F7BA44] rounded px-8 py-2 text-left max-w-[23%] flex flex-col grow shrink-0 basis-[21%] mr-3 mt-5">
									<h4 className="text-md text-darkblue font-secondary font-bold">
										Event Name
									</h4>
									<p className="text-sm text-darkblue font-secondary">
										Sample Date
									</p>
								</div>
								<div className="border-solid border border-[#F7BA44] rounded px-8 py-2 text-left max-w-[23%] flex flex-col grow shrink-0 basis-[21%] mr-3 mt-5">
									<h4 className="text-md text-darkblue font-secondary font-bold">
										Event Name
									</h4>
									<p className="text-sm text-darkblue font-secondary">
										Sample Date
									</p>
								</div>
								<div className="border-solid border border-[#F7BA44] rounded px-8 py-2 text-left max-w-[23%] flex flex-col grow shrink-0 basis-[21%] mr-3 mt-5">
									<h4 className="text-md text-darkblue font-secondary font-bold">
										Event Name
									</h4>
									<p className="text-sm text-darkblue font-secondary">
										Sample Date
									</p>
								</div>
								<div className="border-solid border border-[#F7BA44] rounded px-8 py-2 text-left max-w-[23%] flex flex-col grow shrink-0 basis-[21%] mr-3 mt-5">
									<h4 className="text-md text-darkblue font-secondary font-bold">
										Event Name
									</h4>
									<p className="text-sm text-darkblue font-secondary">
										Sample Date
									</p>
								</div>
								<div className="border-solid border border-[#F7BA44] rounded px-8 py-2 text-left max-w-[23%] flex flex-col grow shrink-0 basis-[21%] mr-3 mt-5">
									<h4 className="text-md text-darkblue font-secondary font-bold">
										Event Name
									</h4>
									<p className="text-sm text-darkblue font-secondary">
										Sample Date
									</p>
								</div>
								<div className="border-solid border border-[#F7BA44] rounded px-8 py-2 text-left max-w-[23%] flex flex-col grow shrink-0 basis-[21%] mr-3 mt-5">
									<h4 className="text-md text-darkblue font-secondary font-bold">
										Event Name
									</h4>
									<p className="text-sm text-darkblue font-secondary">
										Sample Date
									</p>
								</div>
								<div className="border-solid border border-[#F7BA44] rounded px-8 py-2 text-left max-w-[23%] flex flex-col grow shrink-0 basis-[21%] mr-3 mt-5">
									<h4 className="text-md text-darkblue font-secondary font-bold">
										Event Name
									</h4>
									<p className="text-sm text-darkblue font-secondary">
										Sample Date
									</p>
								</div>
								<div className="border-solid border border-[#F7BA44] rounded px-8 py-2 text-left max-w-[23%] flex flex-col grow shrink-0 basis-[21%] mr-3 mt-5">
									<h4 className="text-md text-darkblue font-secondary font-bold">
										Event Name
									</h4>
									<p className="text-sm text-darkblue font-secondary">
										Sample Date
									</p>
								</div>
							</div>
						</div>

						<div className="flex justify-center mt-16">
							<button className="h-12 w-12 text-5xl text-white rounded-full bg-darkblue mr-24">
								&lt;
							</button>
							<button className="h-12 w-12 text-5xl text-white rounded-full bg-darkblue">
								&gt;
							</button>
						</div>
					</div>
				</div>

				<svg
					className="h-[1024px] w-auto absolute top-0 -left-8 "
					viewBox="0 0 900 600">
					<defs>
						<pattern
							id="img1"
							patternUnits="userSpaceOnUse"
							width="100"
							height="100">
							<image
								xlinkHref="assets/pattern-1.png"
								x="0"
								y="0"
								preserveAspectRatio="none"
								width="150"
								height="100"
							/>
						</pattern>
					</defs>
					<path
						fill="url(#img1)"
						d="M105 0L97.2 14.3C89.3 28.7 73.7 57.3 75 85.8C76.3 114.3 94.7 142.7 97.7 171.2C100.7 199.7 88.3 228.3 78.5 257C68.7 285.7 61.3 314.3 56.5 343C51.7 371.7 49.3 400.3 54.2 428.8C59 457.3 71 485.7 76.8 514.2C82.7 542.7 82.3 571.3 82.2 585.7L82 600L0 600L0 585.7C0 571.3 0 542.7 0 514.2C0 485.7 0 457.3 0 428.8C0 400.3 0 371.7 0 343C0 314.3 0 285.7 0 257C0 228.3 0 199.7 0 171.2C0 142.7 0 114.3 0 85.8C0 57.3 0 28.7 0 14.3L0 0Z"
						stroke-linecap="round"
						stroke-linejoin="miter"
					/>
				</svg>
				<svg
					className="h-[1024px] w-auto absolute top-0 -right-8 rotate-180"
					viewBox="0 0 900 600">
					<defs>
						<pattern
							id="img1"
							patternUnits="userSpaceOnUse"
							width="100"
							height="100">
							<image
								xlinkHref="assets/pattern-1.png"
								x="0"
								y="0"
								preserveAspectRatio="none"
								width="150"
								height="100"
							/>
						</pattern>
					</defs>
					<path
						fill="url(#img1)"
						d="M105 0L97.2 14.3C89.3 28.7 73.7 57.3 75 85.8C76.3 114.3 94.7 142.7 97.7 171.2C100.7 199.7 88.3 228.3 78.5 257C68.7 285.7 61.3 314.3 56.5 343C51.7 371.7 49.3 400.3 54.2 428.8C59 457.3 71 485.7 76.8 514.2C82.7 542.7 82.3 571.3 82.2 585.7L82 600L0 600L0 585.7C0 571.3 0 542.7 0 514.2C0 485.7 0 457.3 0 428.8C0 400.3 0 371.7 0 343C0 314.3 0 285.7 0 257C0 228.3 0 199.7 0 171.2C0 142.7 0 114.3 0 85.8C0 57.3 0 28.7 0 14.3L0 0Z"
						stroke-linecap="round"
						stroke-linejoin="miter"
					/>
				</svg>
			</section>
		</div>
	);
}
