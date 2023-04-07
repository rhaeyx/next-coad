import Image from 'next/image';

const Organizations = ({ organizations }: any) => {
	let assemblages: any[] = [{ label: 'Assemblage: ', value: 'everything' }];
	organizations.forEach((assemblage: any) =>
		assemblages.push({
			label: assemblage.assemblage,
			value: assemblage.assemblage.toLowerCase(),
		})
	);

	const [selectedAssemblage, setSelectedAssemblage] =
		React.useState('everything');

	return (
		<div>
			<section className="bg-white relative">
				<div className="flex container mx-auto flex-col">
					<div className="flex flex-col mx-auto w-3/5 py-16 items-center">
						<h1 className="text-yellow text-5xl font-secondary tracking-wide font-semibold mb-16">
							Organizations
						</h1>
						<p className="text-black font-primary text-justify indent-12">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
							nemo impedit ex velit consequatur quis modi, nam pariatur omnis
							similique architecto labore est autem repudiandae facere eum. Sit
							earum, nemo ad reiciendis repudiandae, veniam quia magnam at quae
							vero ratione minima, corporis eaque dolores aliquam quibusdam
							ipsum. Corporis, nesciunt dolore quibusdam dolorum aliquid
							veritatis dignissimos, dolor suscipit numquam veniam ducimus minus
							repellendus laudantium consequuntur labore repudiandae. Quis,
							accusamus aspernatur totam, ducimus maiores adipisci quas nihil
							corporis, nobis officiis blanditiis id laudantium sit dolores
							neque est ex illo vero quia. Fuga nam maiores eos est culpa hic,
							ullam voluptas eum accusantium consectetur distinctio veniam dolor
							sit non. Corrupti ipsum labore earum nulla. Dolorum exercitationem
							sequi qui. Minima dolores hic vero iure maxime, repellat unde
							natus voluptatum deleniti! Dolores, quia? Sapiente, iste
							recusandae ex accusamus est eaque hic! Nam consequuntur illum
							commodi impedit quam amet quidem, dolor voluptatum vitae aliquid
							reiciendis neque.
						</p>

						<div className="flex self-start mt-16">
							<select
								value={selectedAssemblage}
								className="w-auto text-white bg-darkblue font-primary px-4 py-3 rounded-lg"
								onChange={(e) => {
									setSelectedAssemblage(e.target.value);
								}}>
								{assemblages.map((assemblage, index) => (
									<option key={index} value={assemblage.value}>
										{assemblage.label}
									</option>
								))}
							</select>
						</div>

						<section>
							{organizations.map((assemblage: any, index: any) => (
								<div
									className={
										selectedAssemblage === 'everything' ||
										selectedAssemblage === assemblage.assemblage.toLowerCase()
											? 'block'
											: 'hidden'
									}>
									<h2 className="flex self-start font-primary text-lg text-black font-bold mt-12">
										{assemblage.assemblage}
									</h2>
									<p className="text-black font-primary text-justify">
										{assemblage.description}
									</p>
									<div className="flex flex-wrap">
										{assemblage.organizations.map(
											(organization: any, organization_index: any) => (
												<Link
													key={organization_index}
													href={'/organizations/' + organization.acronym}
													target="_blank">
													<div className="flex flex-col items-center w-72 grow shrink-0 basis-[31%] mr-4 mt-16">
														<div className="w-72 rounded-lg border-solid border-2 border-darkblue flex flex-col items-center">
															<div className="border-b-2 border-darkblue w-full h-48 flex justify-center relative">
																<Image
																	alt="organization logo"
																	src={'/assets/org-logos/' + organization.logo}
																	className="w-auto h-auto object-contain"
																	fill></Image>
															</div>
															<div className="text-center whitespace-nowrap py-4">
																{organization.name.length < 30
																	? organization.name
																	: organization.acronym.toUpperCase()}
															</div>
														</div>
													</div>
												</Link>
											)
										)}
									</div>
								</div>
							))}
						</section>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Organizations;

import path from 'path';
import { promises as fs } from 'fs';
import React from 'react';
import Link from 'next/link';

export const getStaticProps = async () => {
	// data directory
	const dataDirectory = path.join(process.cwd(), 'data');

	// read the json
	const jsonData = await fs.readFile(
		dataDirectory + '/organizations.json',
		'utf8'
	);

	// parse
	const data = JSON.parse(jsonData);

	// return content
	return {
		props: { organizations: data },
	};
};
