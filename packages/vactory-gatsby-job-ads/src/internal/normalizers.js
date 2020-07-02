import get from 'lodash.get'
import { stripHtml, truncate } from 'vactory-gatsby-core'

export const normalizeNodes = (nodes) => {
  return nodes.map((post) => ({
    id: post.drupal_internal__nid,
    title: post.title,
    url: get(post, 'path.alias', '#.'),
    date: get(post, 'created', null),
    jobDescription: get(post, 'body.processed', null),
    profileDescription: truncate(stripHtml(get(post, 'field_vactory_description.processed', '')), 200),
    recruiterAddress: get(post, 'field_vactory_address.processed', null),
    recruiterEmail: get(post, 'field_vactory_email', null),
    recruiterPhone: get(post, 'field_vactory_telephone', null),
    city: get(post, 'field_vactory_taxonomy_1.name', null),
    contract: get(post, 'field_vactory_taxonomy_2.name', null),
    profession: get(post, 'field_vactory_taxonomy_3.name', null),
  }))
}

export const normalizeTerms = (terms) => {
  return terms.map((term) => ({
    id: term.drupal_internal__tid,
    name: term.name,
  }))
}
