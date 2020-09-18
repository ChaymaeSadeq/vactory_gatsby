import React from "react";
import { useMedia } from 'vactory-ui'
import { CapitalAzurSlider } from '../components/Slider';
import { TextSection } from '../components/TextSection';
import { ImageAndTextSection } from '../components/ImageAndTextSection';
import { CapitalAzurCarousel } from '../components/Carousel';
import { Insights, InsightCard } from '../components/Insights';
import { EventsSlider } from '../components/EventsSlider';
import { AccessSection } from '../components/AccessSection';
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
		<CapitalAzurSlider slides={
			JSON.parse("[{\"title\":\"Capital Azur, votre banque en ligne\",\"video\":\"\",\"description\":\" Application mobile, Banque en ligne : Découvrez une nouvelle expérience de navigation au cœur de vos comptes bancaires.\",\"link\":\"/fr/produits-services\",\"image\":\"https://backend.capital-azur-decoupled.lapreprod.com/sites/default/files/2020-09/1.jpg\",\"image_mobile\":[],\"_weight\":\"1\",\"link_label\":\"Gérer vos comptes\"},{\"title\":\"COVID-19 : Capital Azur accompagne ses clients Particuliers\",\"video\":\"\",\"description\":\" Report d’échéances, financements…nous vous proposons les solutions les plus adaptées à votre situation\",\"link\":\"/fr/news/news-4\",\"image\":\"https://backend.capital-azur-decoupled.lapreprod.com/sites/default/files/2020-09/3.jpg\",\"image_mobile\":[],\"_weight\":\"2\",\"link_label\":\"En savoir plus\"},{\"title\":\"COVID-19 : Professionnels et Entreprises : Capital Azur vous accompagne\",\"video\":\"\",\"description\":\" 5 mesures pour accompagner nos clients Professionnels et Entreprises en Afrique\",\"link\":\"/fr/news/news-5\",\"image\":\"https://backend.capital-azur-decoupled.lapreprod.com/sites/default/files/2020-09/slider-pro.png\",\"image_mobile\":[],\"_weight\":\"3\",\"link_label\":\"En savoir plus\"},{\"title\":\"Gérer votre épargne en toute simplicité\",\"video\":\"\",\"description\":\" Profitez de tous les outils pour mieux gérer votre épargne\",\"link\":\"/fr/news/news-6\",\"image\":\"https://backend.capital-azur-decoupled.lapreprod.com/sites/default/files/2020-09/gerer-mon-epargne.jpg\",\"image_mobile\":[],\"_weight\":\"4\",\"link_label\":\"En savoir plus\"}]")
		} />
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
			cards={
JSON.parse("[{\"image\":\"https://backend.capital-azur-decoupled.lapreprod.com/sites/default/files/2020-09/cardservice1.png\",\"title\":\"Comptes & Cartes\",\"link\":\"\",\"_weight\":\"1\",\"link_label\":\"\"},{\"image\":\"https://backend.capital-azur-decoupled.lapreprod.com/sites/default/files/2020-09/cardservice2.png\",\"title\":\"Epargne\",\"link\":\"\",\"_weight\":\"2\",\"link_label\":\"\"},{\"image\":\"https://backend.capital-azur-decoupled.lapreprod.com/sites/default/files/2020-09/cardservice3.png\",\"title\":\"Crédit\",\"link\":\"\",\"_weight\":\"3\",\"link_label\":\"\"},{\"image\":\"https://backend.capital-azur-decoupled.lapreprod.com/sites/default/files/2020-09/cardservice4.png\",\"title\":\"Assurance\",\"link\":\"\",\"_weight\":\"4\",\"link_label\":\"\"}]")}
		/>
		<Insights
			title='inSights'
			intro='Découvrez nos actualités, nos analyses et les points de vue de nos experts'
			cards={ Array( isMd||isSm ? 4 : 3 ).fill().map( (e, i) => <InsightCard
				key={i}
				image='https://capital-azur.com/sites/default/files/2020-05/13.jpg'
				excerpt='Crise du Coronavirus Capital Azur accompagne ses clients Professionnels et Entreprises'
				date='15/01/08'
				tag='ACTUALITE'
				link='#'
				link_label='Lire Plus'
				/>) }
		/>
		<EventsSlider
		events={
			JSON.parse("[{\"key\":\"847dc00e-4a73-4101-b318-638f9fd1d3f5\",\"title\":\"Event 1\",\"url\":\"/fr/events/event-1\",\"image\":\"https://backend.capital-azur-decoupled.lapreprod.com/sites/d…ault/files/2020-06/alex-kotliarskyi-QBpZGqEMsKg-unsplash.jpg\",\"category\":\"taxo 1\",\"city\":\"Casablanca\",\"excerpt\":\"L'histoire de l'ordinateur provient du fait que l'homme a toujours cherché à améliorer sa façon de c…\",\"dateInterval\":[{\"value\":\"1990-01-01\",\"end_value\":\"2000-01-01\"}],\"date\":{\"start\":\"01 janv.\",\"end\":\"01 janv.\"}},{\"key\":\"847dc00e-4a73-4101-b318-638f9fd1d3f5\",\"title\":\"Event 1\",\"url\":\"/fr/events/event-1\",\"image\":\"https://backend.capital-azur-decoupled.lapreprod.com/sites/d…ault/files/2020-06/alex-kotliarskyi-QBpZGqEMsKg-unsplash.jpg\",\"category\":\"taxo 1\",\"city\":\"Casablanca\",\"excerpt\":\"L'histoire de l'ordinateur provient du fait que l'homme a toujours cherché à améliorer sa façon de c…\",\"dateInterval\":[{\"value\":\"1990-01-01\",\"end_value\":\"2000-01-01\"}],\"date\":{\"start\":\"01 janv.\",\"end\":\"01 janv.\"}}]")
		}
		/>
		<AccessSection />
	</>
}


export default Home;
