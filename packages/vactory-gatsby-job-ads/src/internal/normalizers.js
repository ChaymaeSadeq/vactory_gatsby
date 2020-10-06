import get from 'lodash.get'
import {stripHtml, truncate} from 'vactory-gatsby-core'

export const normalizeNodes = (nodes) => {
    return nodes.map((post) => ({
        id: post.drupal_internal__nid,
        title: post.title,
        url: get(post, 'path.alias', '#.'),
        date: get(post, 'created', null),
        profileDescription: truncate(stripHtml(get(post, 'field_vactory_description.processed', '')), 200),
        city: get(post, 'field_vactory_taxonomy_1.name', null),
        contract: get(post, 'field_vactory_taxonomy_2.name', null),
        profession: get(post, 'field_vactory_taxonomy_3.name', null),
    }))
};

export const normalizeDFNodes = (nodes) => {
    return nodes.map((post) => ({
        id: post.id,
        title: post.title,
        url: get(post, 'url', null),
        date: get(post, 'created.html_date', null),
        profileDescription: truncate(stripHtml(get(post, 'profileDescription', '')), 200),
        city: get(post, 'city.label', null),
        contract: get(post, 'contract.label', null),
        profession: get(post, 'profession.label', null),
    }))
};

export const normalizeTerms = (terms) => {
    return terms.map((term) => ({
        id: term.drupal_internal__tid,
        name: term.name,
    }))
}
