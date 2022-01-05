import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const Homepage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a redish=brown pitbull, posing on a couch"
        src="../images/wp.jpg"
      />
      </Layout>
    </main>
  )
}

export default Homepage