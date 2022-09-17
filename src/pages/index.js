import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"

const StLink = styled(Link)`
  color: white;
  activecolor: #800000;
`
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query BlogPagesQuery {
      allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              date
              title
            }
            id
          }
        }
      }
    }
  `)

  return (
    <Layout title="ホーム">
      <Seo />
      このサイトはサイト作成について説明するためのコピーです
      <h1>結果発表！</h1>
      <p>
        <div style={{width: `100%`}}>
          <div class="wrapper" style={{paddingBottom: `56.25%`}}>
            <iframe allowfullscreen="allowfullscreen" allow="autoplay" src="https://embed.nicovideo.jp/watch/sm40354088?oldScript=1&referer=&from=0&allowProgrammaticFullScreen=1" style={{position: `absolute`, width: `100%`, height: `100%`, border: `none`,}}></iframe>
          </div>
        </div>
      </p>
      <h3>
        <a class="external" target="_blank" rel="noreferrer" title="mylist" href="https://www.nicovideo.jp/mylist/72028119">
          <i class="fas fa-folder fa-fw"></i>参加作品マイリスト
        </a>
      </h3>
      <h1 class="anchor" id="menu">メニュー</h1>
      <h3><StLink to="/about">概要　<span style={{fontSize: `70%`}}>まずはこちらをご覧ください</span></StLink></h3>
      <h3><StLink to="/rule">ルール　<span style={{fontSize: `70%`}}>参加予定の方はこちら</span></StLink></h3>
      <h3><StLink to="/performers">参加者一覧　<span style={{fontSize: `70%`}}>勇気ある挑戦者の方々</span></StLink></h3>
      <h1 class="anchor" id="mylists">過去大会マイリスト</h1>
      <p>
        <a class="external" target="_blank" rel="noreferrer" title="2018" href="https://www.nicovideo.jp/mylist/61478669">
          2018年度
        </a>
      </p>
      <p>
        <a class="external" target="_blank" rel="noreferrer" title="2018" href="https://www.nicovideo.jp/mylist/65165304">
          2019年度
        </a>
      </p>
      <p>
        <a class="external" target="_blank" rel="noreferrer" title="2018" href="https://www.nicovideo.jp/mylist/67940877">
          2020年度
        </a>
      </p>
      <p>
        <a class="external" target="_blank" rel="noreferrer" title="2018" href="https://www.nicovideo.jp/mylist/70802564">
          2021年度
        </a>
      </p>
      <h1 class="anchor" id="links">運営リンク</h1>
      <p>
        <a class="external" target="_blank" rel="noreferrer" title="niconico" href="https://www.nicovideo.jp/user/121301564">
          <i class="fas fa-tv fa-fw"></i>大会ニコニコアカウント
        </a>
      </p>
      <p>
        <a class="external" target="_blank" rel="noreferrer" title="twitter" href="https://twitter.com/Yomu_1GP2022">
          <i class="fab fa-twitter fa-fw"></i>大会Twitterアカウント
        </a>
      </p>
      <p>
        <a class="external" target="_blank" rel="noreferrer" title="peing" href="https://peing.net/ja/yomu_1gp2022">
          <i class="fas fa-box-open fa-fw"></i>大会質問箱
        </a>
      </p>
      <p>
        <a href="m&#97;i&#108;t&#111;:yom&#117;&#111;&#110;&#101;2&#48;&#50;&#50;&#64;&#103;&#109;a&#105;l&#46;&#99;om">
          <i class="fas fa-envelope fa-fw"></i>運営メールアドレス
        </a>
      </p>
      <h1 class="anchor" id="updates">更新情報</h1>
      {
        data.allMarkdownRemark.edges.map(p => (
          <Link to={p.node.fields.slug}>
            <div class="article" key={p.node.id}>
              <h3 style={{ padding: 0, marginBottom: `.2rem` }}>
                {p.node.frontmatter.title}
              </h3>
              <div style={{ textAlign: `right` }}>{p.node.frontmatter.date}</div>
            </div>
          </Link>
        ))
      }
    </Layout>
  )
}

export default IndexPage
