import React from 'react'
import get from 'lodash.get';
import {Wysiwyg, Accordion} from "vactory-gatsby-ui";

export const AccordionContainer = ({data}) => {
    const title = get(data, 'extra_field.title');
    const raw_description = get(data, 'extra_field.intro.value.#text', null);
    const description = <Wysiwyg html={raw_description}/>;

    const items = data.components.map(component => {
        return {
            title: get(component, 'title'),
            description: <Wysiwyg html={get(component, 'description.value.#text')} />,
        }
    });

    return (
		<div className="my-10">
			<div className="text-center">
				{title && (
					<h2 className="text-3xl tracking-tight font-extrabold text-gray-900 dark:text-gray-100 sm:text-4xl">
						{title}
					</h2>
				)}
				{raw_description.length > 0 && (
					<div className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300 sm:mt-4">
						{description}
					</div>
				)}
			</div>
			<div className="my-10">
				<Accordion items={items} />
			</div>
		</div>
	);
};
