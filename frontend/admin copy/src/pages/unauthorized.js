import { navigate } from "gatsby"
import React, { useEffect } from "react"
import SEO from "../components/seo"
import Layout from "../components/templates/layout"

const IndexPage = () => {

  return (
    <Layout>
      <SEO title="Unauthorized content" />
      <div>No tienes permisos para ver este contenido</div>
    </Layout>
  )
}

export default IndexPage
