import { Layout, RequestForm } from "@components/.";
import { headerTextStyle } from "@styles/tailwind";

const contact = () => {
	const metaInfo = {
		title: 'Ultima API - Request Form',
		description: 'Request the addition of quotes. Additions are made constantly so look out for an update when your request is added.',
		image: '/images/ultima_logo.png'
	}
	
	return (
	<div className="min-h-screen">
			<Layout metaInfo={metaInfo}>
				<h2 className={`${headerTextStyle} mt-5 text-center`}>Contact Us</h2>
				<RequestForm />
			</Layout>
	</div>
	);
};
export default contact;