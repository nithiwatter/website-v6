import * as React from 'react'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head'
import Link from 'next/link'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import ReactAudioPlayer from "react-audio-player";
const glob = require('glob')

import Layout from '../../components/Layout'

export default function BlogTemplate({ frontmatter, markdownBody }) {
  const router = useRouter();

  function reformatDate(fullDate) {
    const date = new Date(fullDate)
    return date.toDateString().slice(4)
  }

  function LinkRenderer(props) {
    return <a href={props.href} target="_blank">{props.children}</a>
  }

  if (!frontmatter) return <></>

  return (
    <Layout>
      <Head>
        <title>{frontmatter.title}</title>
        <meta name="description" content={`${markdownBody.split(" ").splice(0, 25).join(" ")}...`} />
        <meta name="og:image" content={frontmatter.hero_image} key="ogimage" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content={frontmatter.hero_image} key="ogimage" />
      </Head>

      <section id="blog-content">
          <div className="blog-container">
            <img
                src={frontmatter.hero_image}
                alt={`${frontmatter.title}`}
            />
            <div className="blog-header">
              <Link href="/blog"><span className="back-arrow mb-3">&larr; Back</span></Link>
              <h1 className="header-fourth">{frontmatter.title}</h1>
              <h3 className="subheader d-block pt-2 blog-info">
                  {reformatDate(frontmatter.date)} in <Link href={`/blog/?tag=${frontmatter.tag}`}><a href="#">#{frontmatter.tag}</a></Link>
              </h3>
            </div>
            {frontmatter.audio ?
              <div className="blog-audio">
                <ReactAudioPlayer
                  src={frontmatter.audio}
                  controls
                  controlsList="nodownload"
                />
              </div> : ""
            }
            <div className="blog-body">
                <ReactMarkdown
                  source={markdownBody}
                  renderers={{ link: LinkRenderer }}
                />
            </div> 
          </div>
      </section>
      
    </Layout>
  )
}

export async function getStaticProps({ ...ctx }) {
  const { slug } = ctx.params
  const content = await import(`../../blogs/${slug}.md`)
  const data = matter(content.default)

  return {
    props: {
      frontmatter: data.data,
      markdownBody: data.content,
    },
  }
}

export async function getStaticPaths() {
  //get all .md files in the posts dir
  const blogs = glob.sync('blogs/**/*.md')

  //remove path and extension to leave filename only
  const blogSlugs = blogs.map(file =>
    file
      .split('/')[1]
      .replace(/ /g, '-')
      .slice(0, -3)
      .trim()
  )

  // create paths with `slug` param
  const paths = blogSlugs.map(slug => `/blog/${slug}`)
  return {
    paths,
    fallback: false,
  }
}
