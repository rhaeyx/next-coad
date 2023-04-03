export const getStaticProps = async () => {
	const res = await fetch('testdata.json');
	const data = await res.json();

	return { props: { offices: data } };
};

const Test = ({ offices }) => {
	return (
		<div>
			{/* <h1>Test Page</h1>
			{offices.map((office) => (
				<div key={office.id}>
					<h3>{office.name}</h3>
				</div>
			))} */}
			<section className="bg-white relative">
				<div className="flex container mx-auto flex-col">
					<div className="flex flex-col w-full py-16 items-center">
						<h1 className="text-darkblue text-4xl font-secondary tracking-wide font-semibold uppercase mb-16">
							Office of the President
						</h1>
						<div className="flex flex-col w-48 items-center mb-8">
							<div className="w-48 h-48 rounded-lg bg-gray-300 mb-4"></div>
							<span className="text-center font-primary text-darkblue font-bold text-lg uppercase whitespace-nowrap mb-1">
								A very long name senior junior
							</span>
							<span className="text-center font-primary text-darkblue font-light text-base whitespace-nowrap mb-1">
								Position
							</span>
							<span className="text-center font-primary text-black font-light text-base whitespace-nowrap mb-1">
								name@addu.edu.ph
							</span>
						</div>
						<p className="text-black font-primary text-center">Description</p>

						<div className="flex flex-wrap">
							<div className="flex flex-col w-48 items-center max-w-[23%] grow shrink-0 basis-[21%] mr-4 mt-16">
								<div className="w-48 h-48 rounded-lg bg-gray-300 mb-4"></div>
								<span className="text-center font-primary text-darkblue font-bold text-lg uppercase whitespace-nowrap mb-1">
									A very long name senior junior
								</span>
								<span className="text-center font-primary text-darkblue font-light text-base whitespace-nowrap mb-1">
									Position
								</span>
								<span className="text-center font-primary text-black font-light text-base whitespace-nowrap mb-1">
									name@addu.edu.ph
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Test;
