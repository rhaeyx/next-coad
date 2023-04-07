import Image from 'next/image';

const Organization = ({ organization }: any) => {
	return (
		<div>
			<h1>
				<section className="bg-white relative">
					<div className="w-3/5 py-16 mx-auto">
						<div className="flex min-h-[500px]">
							<div className="w-4/5 flex flex-col">
								<div className="flex justify-stretch h-72">
									<div className="w-2/5">
										<div className="border-2 border-darkblue w-full h-full rounded-lg flex justify-center relative">
											<Image
												alt="organization logo"
												src={'/assets/org-logos/' + organization.logo}
												className="w-auto h-auto object-contain"
												fill></Image>
										</div>
									</div>
									<div className="w-full px-16 flex flex-col gap-2">
										<h1 className="font-bold text-darkblue text-4xl mb-2">
											{organization.name}
										</h1>
										<p className="mb-1 flex items-center gap-1">
											<MdEmail
												className="text-darkblue align-bottom"
												size={22}
											/>
											<span className="font-primary text-black font-light text-lg whitespace-nowrap ">
												{organization.email}
											</span>
										</p>
										<div className="flex space-x-2">
											<Link href={organization.facebook}>
												<BsFacebook className="text-darkblue" size={28} />
											</Link>
											<Link href={organization.twitter}>
												<BsTwitter className="text-darkblue" size={28} />
											</Link>
											<Link href={organization.instagram}>
												<BsInstagram className="text-darkblue" size={28} />
											</Link>
										</div>
									</div>
								</div>
								<div className="mt-12">
									<p>{organization.description}</p>
								</div>
							</div>
							<div className="w-1/5 justify-center items-start flex p-8">
								<div className="flex flex-col w-48 items-center">
									<div className="w-48 h-48 rounded-lg bg-gray-300 mb-4"></div>
									<span className="text-center font-primary text-darkblue font-bold text-lg uppercase whitespace-nowrap mb-1">
										{organization.head.name}
									</span>
									<span className="text-center font-primary text-darkblue font-light text-base whitespace-nowrap mb-1">
										{organization.head.position}
									</span>
									<span className="text-center font-primary text-black font-light text-base whitespace-nowrap mb-1">
										{organization.head.email}
									</span>
								</div>
							</div>
						</div>
						<div id="events" className="pb-12 mt-12 rounded">
							<div id="month" className="">
								<h3 className="text-4xl font-extrabold text-left text-yellow font-primary ">
									Upcoming Events
								</h3>
								<div className="flex flex-wrap mt-4">
									<div className="border-solid border border-[#F7BA44] rounded px-8 py-2 text-left max-w-[48%] flex flex-col grow shrink-0 basis-[45%] mr-3 mt-5">
										<h4 className="text-md text-darkblue font-secondary font-bold">
											Event Name
										</h4>
										<p className="text-sm text-darkblue font-secondary">
											Sample Date
										</p>
									</div>
									<div className="border-solid border border-[#F7BA44] rounded px-8 py-2 text-left max-w-[48%] flex flex-col grow shrink-0 basis-[45%] mr-3 mt-5">
										<h4 className="text-md text-darkblue font-secondary font-bold">
											Event Name
										</h4>
										<p className="text-sm text-darkblue font-secondary">
											Sample Date
										</p>
									</div>
									<div className="border-solid border border-[#F7BA44] rounded px-8 py-2 text-left max-w-[48%] flex flex-col grow shrink-0 basis-[45%] mr-3 mt-5">
										<h4 className="text-md text-darkblue font-secondary font-bold">
											Event Name
										</h4>
										<p className="text-sm text-darkblue font-secondary">
											Sample Date
										</p>
									</div>
									<div className="border-solid border border-[#F7BA44] rounded px-8 py-2 text-left max-w-[48%] flex flex-col grow shrink-0 basis-[45%] mr-3 mt-5">
										<h4 className="text-md text-darkblue font-secondary font-bold">
											Event Name
										</h4>
										<p className="text-sm text-darkblue font-secondary">
											Sample Date
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</h1>
		</div>
	);
};

export default Organization;

import path from 'path';
import { promises as fs } from 'fs';
import React from 'react';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import Link from 'next/link';

const getAssemblages = async () => {
	// data directory
	const dataDirectory = path.join(process.cwd(), 'data');

	// read the json
	const jsonData = await fs.readFile(
		dataDirectory + '/organizations.json',
		'utf8'
	);

	// parse
	const data = JSON.parse(jsonData);

	// return
	return data;
};

const getOrganizations = async () => {
	const assemblages = await getAssemblages();

	const organizations: any[] = [];

	assemblages.forEach((assemblage: any) =>
		assemblage.organizations.forEach((org: any) => organizations.push(org))
	);

	return organizations;
};

export const getStaticPaths = async () => {
	// fetch data
	const data = await getOrganizations();

	const organizations = data;

	const paths: any[] = [];

	// iterate through each org and add them to paths
	organizations.forEach((org: any) =>
		paths.push({ params: { org: org.acronym } })
	);

	// return content
	return {
		paths: paths,
		fallback: false,
	};
};

export const getStaticProps = async ({ params }: any) => {
	// fetch data
	const organizations = await getOrganizations();

	const organization = organizations.find(
		(org: any) => org.acronym === params.org
	);

	// return content
	return {
		props: { organization: organization },
	};
};
