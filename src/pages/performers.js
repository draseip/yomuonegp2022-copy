import * as React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { /*GatsbyImage, getImage,*/ StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Performer from "../components/performer"

const Performers = () => {
  const data = useStaticQuery(graphql`
    query PerformerQuery {
      allPerformerJson {
        edges {
          node {
            name
            url
            comment
            movie
          }
        }
      }
    }
  `)

  const performers = data.allPerformerJson.edges
  return (
    <Layout title="参加者一覧">
      <Seo title="参加者一覧" />
      <p>エントリー開始をお待ちください</p>
      <div style={{counterReset: `number`}} />
      {performers.map(p =>
        <Performer
          name={p.node.name}
          url={p.node.url}
          comment={p.node.comment}
          movie={p.node.movie}
        />
      )}
    </Layout>
  )
}

export default Performers