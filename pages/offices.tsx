import Profile from './components/Profile';

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
							<div className="flex flex-col w-48 items-center mb-16">
								<Profile
									image={office.head.pic}
									name={office.head.name}
									position={office.head.position}
									email={office.head.email}
								/>
							</div>
							<p className="text-black font-primary text-center w-3/5 mb-16">
								{office.description}
							</p>

							<div className="flex flex-wrap w-full justify-center">
								{office.members.map((member: any) => (
									<div
										key={member.id}
										className="flex flex-col w-48 items-center shrink-0 basis-[21%] mr-4 mb-16">
										<Profile
											image={member.pic}
											name={member.name}
											position={member.position}
											email={member.email}
										/>
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
							<div className="flex flex-col w-48 items-center mb-16">
								<Profile
									image={office.head.pic}
									name={office.head.name}
									position={office.head.position}
									email={office.head.email}
								/>
							</div>
							<p className="text-black font-primary text-center w-3/5 mb-16">
								{office.description}
							</p>

							<div className="flex flex-wrap w-full justify-center">
								{office.members.map((member: any) => (
									<div
										key={member.id}
										className="flex flex-col w-48 items-center shrink-0 basis-[21%] mr-4 mb-16">
										<Profile
											image={member.pic}
											name={member.name}
											position={member.position}
											email={member.email}
										/>
									</div>
								))}
							</div>
						</div>
					</div>
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
