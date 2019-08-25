import React from "react"
import { Link } from "gatsby"
import ExternalLink from "../components/externalLink"

export default () => (
  <nav
    id="navigationBar"
    className="navbar"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="navbar-brand">
      <Link to="/" className="navbar-item">
        <img
          src={"logo.png"}
          width="112"
          height="28"
          alt="AppReliability.co logo"
        />
      </Link>
    </div>
    <div className="navbar-menu">
      <div class="navbar-start">
        <Link to="/" className="navbar-item">
          Home
        </Link>
        <Link to="/contributors" className="navbar-item">
          Contributors
        </Link>
        <Link to="/ressources" className="navbar-item">
          Ressources
        </Link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <ExternalLink
              name="Twitter"
              link="https://twitter.com/florianmari"
              className="button is-light"
            />
            <ExternalLink
              name="Github"
              link="https://github.com/florianmari/appreliability.co"
              className="button is-light"
            />
            <a
              class="button is-info"
              href="https://twitter.com/intent/tweet"
              data-size="large"
              data-text="Just discovered this website, a control checklists about how to build reliable mobile applications !"
              data-url="https://appreliability.co"
              data-hashtags="mobileengineering"
            >
              Share on twitter
            </a>
            <ExternalLink
              name="Contribute"
              link="https://github.com/florianmari/appreliability.co/issues/new/choose"
              className="button is-warning"
            />
          </div>
        </div>
      </div>
    </div>
  </nav>
)
