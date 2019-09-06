import React from "react"
import Container from "../components/container"
import Header from "../components/header"
import Meta from "../components/metadata"
import ExternalLink from "../components/externalLink"

export default () => (
  <Container>
    <Meta pageTitle="Contributors" />
    <Header />
    <section className="hero is-danger">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">No contributors yet :(</h1>
          <h2 className="subtitle">
            Feel free to contribute by making Pull Request or suggesting things.
          </h2>
          <ExternalLink
              name="Yeah let's go!"
              link="https://github.com/florianmari/appreliability.co/issues/new/choose"
              className="button is-warning"
            />
        </div>
      </div>
    </section>
  </Container>
)
