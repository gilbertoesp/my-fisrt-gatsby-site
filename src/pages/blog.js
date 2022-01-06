import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="My Blog Posts">
            {
                data.allMdx.nodes.map((node) => (
                    <article key={node.id}>
                        <h2>{node.frontmatter.title}</h2>
                        <p>Posted: {node.frontmatter.datePublished}</p>
                        <MDXRenderer>
                            {node.body}
                        </MDXRenderer>
                    </article>
                ))
            }
        </Layout>
    )
}

export const data = graphql`
    query {
        allMdx ( sort: {fields: frontmatter___datePublished, order: DESC}){
            nodes {
              frontmatter {
                title
                datePublished(formatString: "YYYY-MM-DD")
              }
              id
              body
            }
          }
    }
`

export default BlogPage