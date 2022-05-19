import { useState, useEffect } from "react";
import matter from 'gray-matter'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import ReactMarkdown from 'react-markdown'
import Layout from "../../components/Layout/Layout.js";

const initialTags = [ "journal", "thoughts", "announcements", "reflections", "education" ];

const writing = ({ allPosts }) => {
  const [posts, setPosts] = useState([]);
  const router = useRouter();
  const { tag } = router.query;

  function truncateSummary(content) {
    return content.split(" ").splice(0, 25).join(" ") + "..."
  }

  function reformatDate(fullDate) {
    const date = new Date(fullDate)
    return date.toDateString().slice(4)
  }

  useEffect(() => {
    setPosts(allPosts.sort(function(a, b) {
      const dateA = new Date(a.frontmatter.date), dateB = new Date(b.frontmatter.date);
      return dateB - dateA;
    }));
  }, []);

  return (
    <Layout>
      <Head>
        <title>Calix Huang • Writing</title>
        <meta name="description" content="" />
      </Head>

      <div className="py-14">
        <h1>Writing</h1>
        <p className="mt-2 text-gray-600">I'm not the best writer, but I love telling stories.</p>
      </div>

      <div className="py-10" id="posts">
        {tag ?
          <div className="mb-14">
            <Link href="/writing"><span className="text-sm text-gray-500 cursor-pointer mb-3">&larr; Back</span></Link>
            <h2>#{tag}</h2>
          </div> : ""
        }
        <div className="flex md:flex-row flex-col flex-col-reverse justify-between md:space-x-10">
          <div>
            <div className="space-y-14">
              {posts.filter(b => tag ? b.frontmatter.tag == tag : true).map((post, i) => (
                <div className="flex sm:flex-row flex-col sm:items-center sm:space-x-8 cursor-pointer" key={i}>
                  <Link href={`/writing/${post.slug}`}>
                    <img
                      className="rounded-md sm:w-56 w-full"
                      style={{ boxShadow: "0 5px 10px rgba(0,0,0,.2)" }}
                      src={post.frontmatter.hero_image}
                      alt={`${post.frontmatter.title}`}
                    />
                  </Link>
                  <div className="md:mt-0 mt-5">
                    <Link href={`/writing/${post.slug}`}>
                      <div>
                        <h3>{post.frontmatter.title}</h3>
                        <p className="text-gray-500 text-md mt-1">
                          <ReactMarkdown source={post.frontmatter.preview} />
                        </p>
                      </div>
                    </Link>

                    {tag ?
                      <p className="text-gray-400 text-sm mt-3">{reformatDate(post.frontmatter.date)}</p>
                      :
                      <p className="text-gray-400 text-sm mt-3">
                        {reformatDate(post.frontmatter.date)} in <Link href={`/writing/?tag=${post.frontmatter.tag}`}><a className="italic text-gray-600" href="#">#{post.frontmatter.tag}</a></Link>
                      </p>
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-96 w-full md:mb-0 mb-8">
            <div className="flex flex-row flex-wrap">
              {initialTags.map((initialTag, i) => (
                <Link href={`/writing/?tag=${initialTag}`}>
                  <div className="py-1 px-2 mr-1 mb-1 rounded-full hover:bg-gray-200 border border-gray-500 text-gray-500">
                    <a href="#">#{initialTag}</a>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default writing

export async function getStaticProps() {
  const posts = (context => {
    const keys = context.keys()
    const values = keys.map(context)

    const data = keys.map((key, index) => {
      // Create slug from filename
      const slug = key
        .replace(/^.*[\\\/]/, '')
        .split('.')
        .slice(0, -1)
        .join('.')
      const value = values[index]
      // Parse yaml metadata & markdownbody in document
      const document = matter(value.default)
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      }
    })
    return data
  })(require.context('../../posts', true, /\.md$/))

  return { props: { allPosts: posts } }
}
