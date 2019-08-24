import React from "react"
import { Link } from "gatsby";
import ExternalLink from "../components/externalLink"

export default () => (
    <header className="navbar">
        <section className="navBar-section">
            <Link to="/" className="btn btn-link">Home</Link>
            <Link to="/contributors" className="btn btn-link">Contributors</Link>
            <Link to="/ressources" className="btn btn-link">Ressources</Link>
        </section>
        <section class="navbar-center">
        <Link to="/" className="h4">AppReliability Checklist</Link>
        </section>
        <section className="navBar-section">
            <ExternalLink name="Twitter" link="https://twitter.com/florianmari" className="btn ml1"/>
            <ExternalLink name="Github" link="https://github.com/florianmari" className="btn ml1"/>
            <ExternalLink name="Contribute" link="https://github.com/florianmari/appreliability.co/issues/new/choose" className="btn btn-primary ml1"/>
        </section>
    </header>
)