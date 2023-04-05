import { useRouter } from 'next/router';

const Post = () => {
	const router = useRouter();
	const org = router.query.org;

	return (
		<div>
			<h1>{org}</h1>
		</div>
	);
};

export default Post;
