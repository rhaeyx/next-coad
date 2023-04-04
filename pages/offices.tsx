const Offices = ({ offices }: any) => {
	return (
		<div>
			{offices.slice(0, 1).map((office: any) => (
				<section key={office.id} className="bg-white relative ">
					<div className="flex container mx-auto flex-col">
						<div className="flex flex-col w-full py-16 items-center">
							<h1 className="text-darkblue text-4xl font-secondary tracking-wide font-semibold uppercase mb-16">
								{office.name}
							</h1>
							<div className="flex flex-col w-48 items-center mb-8">
								<div className="w-48 h-48 rounded-lg bg-gray-300 mb-4"></div>
								<span className="text-center font-primary text-darkblue font-bold text-lg uppercase whitespace-nowrap mb-1">
									{office.head.name}
								</span>
								<span className="text-center font-primary text-darkblue font-light text-base whitespace-nowrap mb-1">
									{office.head.position}
								</span>
								<span className="text-center font-primary text-black font-light text-base whitespace-nowrap mb-1">
									{office.head.email}
								</span>
							</div>
							<p className="text-black font-primary text-center w-3/5">
								{office.description}
							</p>

							<div className="flex flex-wrap w-full justify-center">
								{office.members.map((member: any) => (
									<div
										key={member.id}
										className="flex flex-col w-48 items-center shrink-0 basis-[21%] mr-4 mt-16">
										<div className="w-48 h-48 rounded-lg bg-gray-300 mb-4"></div>
										<span className="text-center font-primary text-darkblue font-bold text-lg uppercase whitespace-nowrap mb-1">
											{member.name}
										</span>
										<span className="text-center font-primary text-darkblue font-light text-base whitespace-nowrap mb-1">
											{member.position}
										</span>
										<span className="text-center font-primary text-black font-light text-base whitespace-nowrap mb-1">
											{member.email}
										</span>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>
			))}

			{offices.slice(1).map((office: any) => (
				<section key={office.id} className="bg-white relative ">
					<div className="flex container mx-auto flex-col">
						<div className="flex flex-col w-full py-16 items-center">
							<h1 className="text-darkblue text-4xl font-secondary tracking-wide font-semibold uppercase mb-16">
								{office.name}
							</h1>
							<div className="flex flex-col w-48 items-center mb-8">
								<div className="w-48 h-48 rounded-lg bg-gray-300 mb-4"></div>
								<span className="text-center font-primary text-darkblue font-bold text-lg uppercase whitespace-nowrap mb-1">
									{office.head.name}
								</span>
								<span className="text-center font-primary text-darkblue font-light text-base whitespace-nowrap mb-1">
									{office.head.position}
								</span>
								<span className="text-center font-primary text-black font-light text-base whitespace-nowrap mb-1">
									{office.head.email}
								</span>
							</div>
							<p className="text-black font-primary text-center w-3/5">
								{office.description}
							</p>

							<div className="flex flex-wrap w-full justify-center">
								{office.members.map((member: any) => (
									<div
										key={member.id}
										className="flex flex-col w-48 items-center shrink-0 basis-[21%] mr-4 mt-16">
										<div className="w-48 h-48 rounded-lg bg-gray-300 mb-4"></div>
										<span className="text-center font-primary text-darkblue font-bold text-lg uppercase whitespace-nowrap mb-1">
											{member.name}
										</span>
										<span className="text-center font-primary text-darkblue font-light text-base whitespace-nowrap mb-1">
											{member.position}
										</span>
										<span className="text-center font-primary text-black font-light text-base whitespace-nowrap mb-1">
											{member.email}
										</span>
									</div>
								))}
							</div>
						</div>
					</div>

					<svg className="w-full absolute top-0 " viewBox="0 0 900 600">
						<defs>
							<pattern
								id="img1"
								patternUnits="userSpaceOnUse"
								width="100"
								height="100">
								<image
									xlinkHref="assets/pattern-1-x.png"
									x="0"
									y="-22"
									preserveAspectRatio="none"
									width="100"
									height="44"
								/>
							</pattern>
						</defs>
						<rect height="2px" width="100%" fill="url(#img1)" />
					</svg>
				</section>
			))}
		</div>
	);
};

export default Offices;

import path from 'path';
import { promises as fs } from 'fs';
export const getStaticProps = async () => {
	// data directory
	const dataDirectory = path.join(process.cwd(), 'data');

	// read the json
	const jsonData = await fs.readFile(dataDirectory + '/offices.json', 'utf8');

	// parse
	const data = JSON.parse(jsonData);

	// return content
	return {
		props: { offices: data },
	};
};
