import React from "react"
import Container from "../components/container"
import Header from "../components/header"
import Meta from "../components/metadata"
import ExternalLink from "../components/externalLink"

export default () => (
  <Container>
    <Meta pageTitle="Ressources" />
    <Header />
    <section class="hero is-info">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Ressources</h1>
          <h2 class="subtitle">
            Find books, videos, website about SRE Mobile Applications
          </h2>
        </div>
      </div>
    </section>
    <section class="section">
      <Container>
        <ExternalLink
          name="Google Engineering Reliable Mobile Applications"
          link="https://landing.google.com/sre/resources/practicesandprocesses/engineering-reliable-mobile-applications/"
        />
      </Container>
    </section>
  </Container>
)
