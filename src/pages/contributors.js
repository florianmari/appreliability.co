import React from "react"
import Container from "../components/container"
import Header from "../components/header"
import Meta from "../components/metadata"
import ExternalLink from "../components/externalLink"
import GithubService from "../services/githubService"

function Contributor(props) {
  return (
    <div className="card" key={props.html_url}>
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={props.avatar_url} alt="Placeholder image" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{props.name}</p>
            <p className="subtitle is-6"><a href={props.url}>@{props.login}</a></p>
          </div>
        </div>

        <div className="content">
          {props.bio}
          <br /><br />
          <p className="subtitle is-6">Contributions: {props.contributions}</p>
        </div>
      </div>
    </div>
  )
}

class Contributors extends React.Component {

  state = {
    contributors: [],
    loading: true
  }

  UNSAFE_componentWillMount() {
    this.fetchFromGitHub()
  }

  async fetchFromGitHub() {
    const contributorsList = await GithubService.getContributorsList()
    this.setState({
      contributors: contributorsList,
      loading: false
    })
  }

  renderNoContributors() {
    return (
      <section className="hero is-danger" style={{"border-radius": "10px"}}>
        <div className="hero-body">
          <div className="container">
            <h1 className="title">No contributors yet :(</h1>
            <h2 className="subtitle">Feel free to contribute by making Pull Request or suggesting things. </h2>
            <ExternalLink
              name="Yeah let's go!"
              link="https://github.com/florianmari/appreliability.co/issues/new/choose"
              className="button is-warning"
            />
          </div>
        </div>
      </section>
    )
  }

  renderLoading() {
    return (
      <progress className="progress is-large is-info" max="100">60%</progress>
    )
  }

  renderContributors() {
    const contributorsList = this.state.contributors.map((item) => Contributor(item))

    return (
      <div className="container" style={{ display: 'flex' }}>
        {contributorsList}
      </div>
    )
  }

  render() {
    const isLoading = this.state.loading
    let render

    if (isLoading === true) {
      render = this.renderLoading()
    } else {
      if (this.state.contributors.length === 0) {
        render = this.renderNoContributors()
      } else {
        render = this.renderContributors()
      }
    }

    return (
      <Container>
        <Meta pageTitle="Contributors" />
        <Header />
        {render}
      </Container>
    )
  }
}

export default Contributors