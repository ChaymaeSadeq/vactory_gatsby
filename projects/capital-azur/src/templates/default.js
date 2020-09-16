import React from 'react';
import {Banner} from '../components/Banner';

const Page = ({pageContext, ...rest}) => {

	return <>
	<Banner
		title={pageContext.title}
		breadcrumb={pageContext.breadcrumb}
		image={pageContext.banner_image} />


	</>
}

export default Page;