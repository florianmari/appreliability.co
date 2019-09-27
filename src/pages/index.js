import React from "react"
import Container from "../components/container"
import Header from "../components/header"
import List from "../components/list"
import Intro from "../components/intro"
import Meta from "../components/metadata"

class App extends React.Component {

    items = [
      {name: "Define business requirements (SLA/SLO/SLI)", chronology:1, category:"monitoring", level:3, comment:"Quantify, example, Availability SLI, Satisfying Latency SLI"},
      {name: "Set app versioning", chronology:2, category:"backward compatibility", level:1, comment:"Semantic versioning (https://semver.org/)"},
      {name: "Define forward compatibility", chronology:2, category:"forward compatibility", level:3, comment:"Prevent app from crashing, being unavailable because of server API changes"},
      {name: "Define timeouts/retries/circuit-breakers/fallback for every call", chronology:2, category:"availability", level:2},
      {name: "Update changelog", chronology:3, category:"deployment", level:1},
      {name: "Set feature toggling / Gatekeeper", chronology:2, category:"security", level:2, comment:"Use them according to the relevant distribution platform's rules"},
      {name: "Record events", chronology:2, category:"monitoring", level:3, comment:"(eg. action, location)"},
      {name: "Define your release train", chronology:1, category:"deployment", level:2, comment:"Release Cycle, alpha, beta, polished, external, prod..."},
      {name: "Write unit tests", chronology:2, category:"reliability", level:3},
      {name: "Monitoring battery / network usage", chronology:2, category:"monitoring", level:2},
      {name: "Crash / error tracing", chronology:3, category:"troubleshooting", level:3},
      {name: "Be forward compatible", chronology:2, category:"availability", level:3, comment:"Considering the scale and lack of control in the mobile environment, managing changes in a safe and reliable manner is arguably one of the most critical pieces of managing a reliable mobile application."},
      {name: "Be GDPR compliant", chronology:3, category:"security", level:3, comment:"If your app is available in Europe."},
      {name: "Staged rollout / Phased Releases", chronology:3, category:"reliability", level:3, comment:"Define a progressive release life cycle"},
      {name: "Dogfooding / Internal testing", chronology:3, category:"reliability", level:3},
      {name: "Test all rollback toggles / killswitch before deploying", chronology:3, category:"reliability", level:3},
      {name: "Add caching", chronology:2, category:"availability", level:2},
      {name: "Add documentation", chronology:2, category:"documenting", level:3},
      {name: "Post-mortems", chronology:4, category:"monitoring", level:1},
      {name: "Implement CI/CD", chronology:2, category:"deployment", level:3},
      {name: "Runbook, configure alerting", chronology:3, category:"recoverability", level:2},
      {name: "Support prod / test mode switch", chronology:2, category:"reliability", level:2},
      {name: "Be immutable", chronology:2, category:"reliability", level:3},
      {name: "Support i18n", chronology:2, category:"reliability", level:2},
      {name: "Consider risk / criticity", chronology:3, category:"security", level:3}
    ];

  render() {
    return (
      <Container>
        <Meta pageTitle="Checklist about Engineering Reliable Mobile Applications"/>
        <Header />
        <Intro />
        <List items={this.items} />
      </Container>
    )
  }
}

export default App;