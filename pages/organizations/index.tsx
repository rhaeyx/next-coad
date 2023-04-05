import Image from 'next/image';
import coadlogodark from '../../public/assets/coad-logo-dark.png';

const Organizations = () => {
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
								className="w-64 text-white bg-darkblue font-primary px-4 py-3 rounded-lg"
								name="cluster">
								<option value="" disabled selected>
									Clusters:
								</option>
								<option value="cluster n">cluster n</option>
								<option value="cluster n">cluster n</option>
								<option value="cluster n">cluster n</option>
								<option value="cluster n">cluster n</option>
							</select>
						</div>

						<h2 className="flex self-start font-primary text-lg text-black font-bold mt-12">
							Cluster Name
						</h2>
						<p className="text-black font-primary text-justify">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
							voluptas voluptates expedita reprehenderit culpa suscipit eum
							porro a earum voluptatem quis deserunt, eligendi ducimus minima in
							incidunt! Omnis, asperiores ullam!
						</p>

						<div className="flex flex-wrap">
							<div className="flex flex-col items-center max-w-[33%] grow shrink-0 basis-[31%] mr-4 mt-16">
								<div className="w-72 rounded-lg border-solid border-2 border-darkblue flex flex-col items-center">
									<div className="border-b-2 border-darkblue w-full flex justify-center">
										<Image
											alt="organization logo"
											src={coadlogodark}
											className="w-48 h-48 rounded-lg"></Image>
									</div>
									<div className="text-center whitespace-nowrap py-4">
										Org Name
									</div>
								</div>
							</div>
							<div className="flex flex-col items-center max-w-[33%] grow shrink-0 basis-[31%] mr-4 mt-16">
								<div className="w-72 rounded-lg border-solid border-2 border-darkblue flex flex-col items-center">
									<div className="border-b-2 border-darkblue w-full flex justify-center">
										<Image
											alt="organization logo"
											src={coadlogodark}
											className="w-48 h-48 rounded-lg"></Image>
									</div>
									<div className="text-center whitespace-nowrap py-4">
										Org Name
									</div>
								</div>
							</div>
							<div className="flex flex-col items-center max-w-[33%] grow shrink-0 basis-[31%] mr-4 mt-16">
								<div className="w-72 rounded-lg border-solid border-2 border-darkblue flex flex-col items-center">
									<div className="border-b-2 border-darkblue w-full flex justify-center">
										<Image
											alt="organization logo"
											src={coadlogodark}
											className="w-48 h-48 rounded-lg"></Image>
									</div>
									<div className="text-center whitespace-nowrap py-4">
										Org Name
									</div>
								</div>
							</div>
							<div className="flex flex-col items-center max-w-[33%] grow shrink-0 basis-[31%] mr-4 mt-16">
								<div className="w-72 rounded-lg border-solid border-2 border-darkblue flex flex-col items-center">
									<div className="border-b-2 border-darkblue w-full flex justify-center">
										<Image
											alt="organization logo"
											src={coadlogodark}
											className="w-48 h-48 rounded-lg"></Image>
									</div>
									<div className="text-center whitespace-nowrap py-4">
										Org Name
									</div>
								</div>
							</div>
							<div className="flex flex-col items-center max-w-[33%] grow shrink-0 basis-[31%] mr-4 mt-16">
								<div className="w-72 rounded-lg border-solid border-2 border-darkblue flex flex-col items-center">
									<div className="border-b-2 border-darkblue w-full flex justify-center">
										<Image
											alt="organization logo"
											src={coadlogodark}
											className="w-48 h-48 rounded-lg"></Image>
									</div>
									<div className="text-center whitespace-nowrap py-4">
										Org Name
									</div>
								</div>
							</div>
							<div className="flex flex-col items-center max-w-[33%] grow shrink-0 basis-[31%] mr-4 mt-16">
								<div className="w-72 rounded-lg border-solid border-2 border-darkblue flex flex-col items-center">
									<div className="border-b-2 border-darkblue w-full flex justify-center">
										<Image
											alt="organization logo"
											src={coadlogodark}
											className="w-48 h-48 rounded-lg"></Image>
									</div>
									<div className="text-center whitespace-nowrap py-4">
										Org Name
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Organizations;
