import * as React from 'react'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head'
import Link from 'next/link'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
const glob = require('glob')

import Layout from '../../components/Layout/Layout'

export default function Post({ frontmatter, markdownBody }) {
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

      <div className="py-14 flex md:flex-row flex-col md:space-x-14 space-x-0 md:space-y-0 space-y-10">
        <div className="md:w-72 w-full">
          <img
            className="rounded-md"
            style={{ minWidth: 300, boxShadow: "0 5px 10px rgba(0,0,0,.2)" }}
            src={frontmatter.hero_image}
            alt={`${frontmatter.title}`}
          />
          <div className="mt-5">
            <h3>{frontmatter.title}</h3>
            <p className="text-gray-500 text-md mt-1">{frontmatter.preview}</p>
            <p className="text-gray-400 text-sm mt-3">
              {reformatDate(frontmatter.date)} in <Link href={`/writing/?tag=${frontmatter.tag}`}><a className="italic text-gray-600" href="#">#{frontmatter.tag}</a></Link>
            </p>
          </div>
        </div>
        <div className="blog-content text-gray-600">
          <ReactMarkdown
            source={markdownBody}
            renderers={{ link: LinkRenderer }}
          />
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps({ ...ctx }) {
  const { slug } = ctx.params
  const content = await import(`../../posts/${slug}.md`)
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
  const posts = glob.sync('posts/**/*.md')

  //remove path and extension to leave filename only
  const postSlugs = posts.map(file =>
    file
      .split('/')[1]
      .replace(/ /g, '-')
      .slice(0, -3)
      .trim()
  )

  // create paths with `slug` param
  const paths = postSlugs.map(slug => `/writing/${slug}`)
  return {
    paths,
    fallback: false,
  }
}
