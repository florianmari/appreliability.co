import React from "react"
import Container from "../components/container"
import Header from "../components/header"
import Meta from "../components/metadata"
import ExternalLink from "../components/externalLink"

export default () => (
  <Container>
    <Meta pageTitle="Contributors" />
    <Header />
    <section class="hero is-danger">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">No contributors yet :(</h1>
          <h2 class="subtitle">
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
