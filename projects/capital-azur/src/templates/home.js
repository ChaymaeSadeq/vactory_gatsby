import React from "react";
import { Box, Button, useMedia } from 'vactory-ui'
import { CapitalAzurSlider } from '../components/Slider';
import { TextSection } from '../components/TextSection';
import { ImageAndTextSection } from '../components/ImageAndTextSection';
import { CapitalAzurCarousel } from '../components/Carousel';
import { Insights, InsightsCard } from '../components/Insights';
import { Wysiwyg } from 'vactory-gatsby-ui';


const htmlContent = [
`<p>Découvrez Capital Azur, la première banque 100% Digitale en Afrique et 
oubliez la paperasse et les frais cachés.<br/>Avec tous nos outils dédiés 
aux besoins de tous nos clients (Particuliers, Entreprises, Corporate), 
Nous vous accompagnons chaque jour pour réaliser vos projets de vie.</p>`,

`La raison d’être de Capital Azur : Favoriser financière en Afrique afin 
d’accompagner le continent dans sa croissl’inclusionance. C’est pour cela 
que nous nous reposons sur le State Of The Art de la technologie. Fintechs, 
Blockchain, Mobile Banking, Digital Banking.. sont autant de moyens que nous 
mettons en oeuvre pour répondre à vos besoins, qui que vous soyez, où que 
vous voyez..`
];

const Home = () => {
	const isSm = useMedia('sm');
	const isMd = useMedia('md');

	return <>
		<CapitalAzurSlider />
		<TextSection
			title="VOTRE SATISFACTION, NOTRE PASSION"
			body={<Wysiwyg html={htmlContent[0]} />}
			link={{href: '/', label: 'A propos de nous'}}
		/>
		<ImageAndTextSection
			image={'/images/Group30.png'}
			title="LES FINTECHS AU SERVICE DE LA CROISSANCE EN AFRIQUE"
			body={<Wysiwyg html={htmlContent[1]} />}
			link={{href: '/', label: 'A propos de nous'}}
		/>
		<CapitalAzurCarousel
			title='deS SERVicES inNoVAntS POur Un qUOTIDieN sImPlIFié.'
			intro={<Wysiwyg html='Capital Azur accompagne l’ensemble de sa clientèle dans leurs projets à toutes les étapes de leurs vie.' />}
		/>
		<Insights
			title='inSights'
			intro='Découvrez nos actualités, nos analyses et les points de vue de nos experts'
			cards={ Array( isMd||isSm ? 4 : 3 ).fill(<InsightsCard />) }
		/>


		<Box m='xxlarge' />
		<h1>Test<Button fill="success">Read more</Button></h1>
	</>
}


export default Home;
