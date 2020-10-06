import React, {useState} from 'react';
import {
    Accordion,
    AccordionPanel as DefaultAccordionPanel ,
    Box,
    Flex,
    Icon,
} from 'vactory-ui';


const PanelHeader = ({ isActive, children }) => {
    return <Flex sx={{
        fontSize: 16,
        lineHeight: '19px',
        fontWeight: 'light',
        padding: 8,
        backgroundColor: isActive ? 'primary' : '#f6f6f6',
        color: isActive ? 'white' : '#454545',
        border: '1px solid',
        borderColor: isActive ? '#003eff' : 'currentColor',
        borderRadius: isActive ? '3px 3px 0 0' : 3,
        '&:hover': isActive ? {} : {
            backgroundColor: '#ededed',
            color: '#2b2b2b',
        },
    }} >
        {isActive ?
            <Icon name="chevron-right" size="xsmall" sx={{flex: '0 0 auto', mr: 5, mt: 5}} />
            :
            <Icon name="chevron-down" size="xsmall" sx={{flex: '0 0 auto', mr: 5, mt: 5}} />
        }
        <Box>{children}</Box>
    </Flex>
}


const AccordionPanel = ({ title, panelKey, isActive, children }) =>
    <DefaultAccordionPanel sx={{
            marginY: 2,
        }}
        panelKey={panelKey}
        title={<PanelHeader isActive={isActive}>{title}</PanelHeader>} >

        <Box sx={{
            px: ['medium', null, 'large'],
        }}>
            {children}
        </Box>
    </DefaultAccordionPanel>



export const FAQAccordion = () => {

    const [activeIndex, setActiveIndex] = useState(["one"]);

    const hanOnActive = index => {
        setActiveIndex(index);
    }

    const isActive = key => activeIndex.includes(key);

    return (
        <Box p="xlarge">
            <Accordion activeIndex={activeIndex} onChange={hanOnActive} >

                <AccordionPanel panelKey="one" title="Capital Azur est accessible dans quelle région ?" isActive={isActive('one')}>
                    Capital Azur est installée en Europe et en Afrique, mais c'est avant tout 
                    une banque digitale. La souscription peut être réalisée partout dans le monde.
                </AccordionPanel>

                <AccordionPanel panelKey="two" title="Création d'un compte Business" isActive={isActive('two')}>
                    La création d'un compte est gratuite à vie. Vous pouvez accéder au formulaire 
                    de souscription sur notre banque en ligne.
                </AccordionPanel>

                <AccordionPanel panelKey="three" title="Comment puis-je souscrire aux autres produits bancaires Capital Azure ?" isActive={isActive('three')}>
                    <p>Simple comme bonjour, vous souscrivez à tous les produits tout simplement depuis 
                    votre espace client ou avec un conseiller par téléphone au 01 23 45 67 89 (Appel 
                    non surtaxé) et par chat du lundi au vendredi de 8h à 22h et le samedi de 8h à 18h.</p>

                    <p>*Abonnement à des services de banque à distance (internet, téléphone fixe, SMS, 
                    etc.) : gratuit et illimité,  hors coût de communication ou de fourniture 
                    d’accès à internet et hors alertes par SMS.</p>
                </AccordionPanel>

                <AccordionPanel panelKey="four" title="Comment obtenir mes relevés de compte bancaire ?" isActive={isActive('four')}>
                    <p>Vos relevés de compte sont directement accessibles depuis l'application mobile 
                    Capital Azure, rubrique "RIB, chèques & documents" puis "Relevés" ou bien depuis 
                    votre Espace Client Capital Azure, en cliquant Relevés.<br/>
                    Ils sont mis à disposition au format PDF et conservés durant 5 ans. Vous avez la 
                    possibilité de les télécharger, de les enregistrer sur votre ordinateur ou 
                    également de les imprimer.</p>
                </AccordionPanel>

            </Accordion>
        </Box>
    )
}
