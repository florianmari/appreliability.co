import React from "react"
import Container from "../components/container"
import Header from "../components/header"
import Meta from "../components/metadata"
import ExternalLink from "../components/externalLink"

export default () => (
  <Container>
    <Meta pageTitle="Contributors" />
    <Header />
    <br />
    <div class="empty">
      <p class="empty-title h5">No contributors yet</p>
      <p class="empty-subtitle">Do you want to contribute to the checklist?</p>
      <div class="empty-action">
      <ExternalLink name="Yeah let's go!" link="https://github.com/florianmari/appreliability.co/issues/new/choose" className="btn btn-primary ml1"/>
      </div>
    </div>
  </Container>
)
