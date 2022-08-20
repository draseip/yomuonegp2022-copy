/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

import Header from "./header"
import "./layout.css"

const StLink = styled(Link)`
  color: white;
  activecolor: #800000;
  textdecoration: none;
`
const Layout = ({ children, title }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        class="under"
        style={{
          //textAlign: `center`,
          width: '100%',
          maxWidth: '1280px',
          padding: `0`,
        }}
      >
        <section>
          <aside class={title === `ホーム` ? `` : `hide`}>
            <StLink to="/">
            <StaticImage
              src="../images/yomuonecircle.png"
              width={150}
              formats={["auto", "webp", "avif"]}
              alt="読ム-１グランプリ ロゴ"
              style={{ marginBottom: `1.45rem`, borderRadius: `50%`, }}
            />
            </StLink>
            <h4 style={{marginBottom: 0}}>合成音声漫才大会</h4>
            <h1 style={{ fontSize: `150%`, marginBottom: `1rem`}}>読ム-１グランプリ</h1>
            <table border="2" bordercolor="#444444">
              <tbody>
                <tr><th><span style={{ color: `#a0a0a0` }}>エントリー<br />2023/01/01 - 2023/03/10</span></th></tr>
                <tr><th><span style={{ color: `#a0a0a0` }}>開催<br />2023/04/01</span></th></tr>
                <tr><th><span style={{ color: `#a0a0a0` }}>投票<br />2023/04/02 - 2023/04/<span style={{ color: `#ff0000` }}>15</span></span></th></tr>
                <tr><th>結果発表<br /><span style={{ color: `#f59595` }}>2023/04/<span style={{ color: `#ff0000` }}>22</span></span></th></tr>
              </tbody>
            </table>
            <h2 style={{marginBottom: `2rem`}} class="hide">
              <a target="_blank" rel="noreferrer" title="niconico" href="https://www.nicovideo.jp/user/121301564">
                <i class="fas fa-tv fa-fw"></i>
              </a>
              　　
              <a target="_blank" rel="noreferrer" title="twitter" href="https://twitter.com/Yomu_1GP2022">
                <i class="fab fa-twitter fa-fw"></i>
              </a>
              　　
              <a href="m&#97;i&#108;t&#111;:yom&#117;&#111;&#110;&#101;2&#48;&#50;&#50;&#64;&#103;&#109;a&#105;l&#46;&#99;om">
                <i class="fas fa-envelope fa-fw"></i>
              </a>
            </h2>
          </aside>
          <main>
            <article style={{
              paddingTop: `1.5rem`,
              paddingBottom: `0`,
            }}>
              <h1 style={{
                paddingTop: `0.1rem`,
                color: `white`
                }}> {title} </h1>
            </article>
            <article style={{paddingTop: `2rem`}}>
              {children}
            </article>
          </main>
        </section>
        <footer
          style={{
            margin: `2rem`,
            textAlign: `center`,
          }}
        >
          <h2 style={{marginBottom: `2rem`}} class="hideb">
            <a target="_blank" rel="noreferrer" title="niconico" href="https://www.nicovideo.jp/user/121301564">
              <i class="fas fa-tv fa-fw"></i>
            </a>
            　　
            <a target="_blank" rel="noreferrer" title="twitter" href="https://twitter.com/Yomu_1GP2022">
              <i class="fab fa-twitter fa-fw"></i>
            </a>
            　　
            <a href="m&#97;i&#108;t&#111;:yom&#117;&#111;&#110;&#101;2&#48;&#50;&#50;&#64;&#103;&#109;a&#105;l&#46;&#99;om">
              <i class="fas fa-envelope fa-fw"></i>
            </a>
          </h2>
          © {new Date().getFullYear()} 読ム-１グランプリ, Built with
          {` `}
          <a target="_blank" rel="noreferrer" href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
