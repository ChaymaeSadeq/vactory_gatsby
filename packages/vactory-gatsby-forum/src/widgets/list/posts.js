import React from 'react'
import { Link } from 'vactory-gatsby-ui'
import { Container, Text } from "vactory-ui";
import { normalizeDate } from "vactory-gatsby-forum";
import {useTranslation} from "react-i18next"

const CardExcerpt = ({ children, ...rest }) => {
  return (
    <Text fontSize="14px" color="black800" {...rest}>
      {children}
    </Text>
  )
}

const Posts = ({ posts }) => {
  console.log('POSTS >>', posts)
  const {i18n} = useTranslation();
  const currentLanguage = i18n.language;
  return (
    <Container mb="30px">
      <table border="1" cellSpacing="3" cellPadding="3">
        <thead>
          <tr>
            <th>Sujet</th>
            <th>Statut</th>
            <th>Vues</th>
            <th>Contributions</th>
            <th>Dernière contribution</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((item, i) => {
            return (
              <tr key={i}>
                <td width="300">
                  <Link to={item.url}>{item.title}</Link>
                  <CardExcerpt
                    dangerouslySetInnerHTML={{
                      __html: item.excerpt,
                    }}
                  />
                </td>
                <td>{item.status}</td>
                <td>{item.views ? item.views : 0}</td>
                <td>{item.contributions}</td>
                <td>{item.contributions > 0 && normalizeDate(currentLanguage, item.last_contribution)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
}

export default Posts
