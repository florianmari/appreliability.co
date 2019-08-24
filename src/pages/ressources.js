import React from "react"
import Container from "../components/container"
import Header from "../components/header"
import Meta from "../components/metadata"
import ExternalLink from "../components/externalLink"

export default () => (
    <Container>
        <Meta pageTitle="Ressources" />
        <Header />
        <br />
        <ExternalLink name="Google Engineering Reliable Mobile Applications" link="https://landing.google.com/sre/resources/practicesandprocesses/engineering-reliable-mobile-applications/" />
    </Container>
)