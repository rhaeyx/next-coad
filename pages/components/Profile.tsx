import Image from 'next/image';

const Profile = ({ image, name, position, email }: any) => {
	return (
		<>
			<div className="w-48 h-48 rounded-lg mb-4 relative">
				<Image
					src={'/assets/profile-images/' + image}
					alt="profile image"
					className="w-auto h-auto rounded-md"
					fill></Image>
			</div>
			<span className="text-center font-primary text-darkblue font-bold text-lg uppercase whitespace-nowrap mb-1">
				{name}
			</span>
			<span className="text-center font-primary text-darkblue font-light text-base whitespace-nowrap mb-1">
				{position}
			</span>
			<span className="text-center font-primary text-black font-light text-base whitespace-nowrap mb-1">
				{email}
			</span>
		</>
	);
};

export default Profile;
