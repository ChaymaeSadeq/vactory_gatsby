import React from 'react';
import {
	Box,
} from 'vactory-ui';
import {AccessSection} from '../components/AccessSection';
import {Banner} from '../components/Banner';
import {CapitalAzurAccordion} from '../components/Accordion';
import {FAQAccordion} from '../components/FAQAccordion';

const Page = ({pageContext, ...rest}) => {

	return <>
		<Banner
			title={pageContext.title}
			breadcrumb={pageContext.breadcrumb}
			image={pageContext.banner_image} />


		<CapitalAzurAccordion />
		<AccessSection />
		<FAQAccordion />


	</>
}

export default Page;