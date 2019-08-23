import React from "react"
import { Helmet } from "react-helmet"
import Container from "../components/container"
import Header from "../components/header"
import List from "../components/list"
import ListItem from "../components/listItem"
import Intro from "../components/intro"

export default () => (
    <Container>
        <Helmet>
            <meta charSet="utf-8" />
            <title>AppReliability - Checklist about SRE with Mobile Application</title>
        </Helmet>
        <Header />
        <Intro />
        <List>
            <ListItem name="Define business requirements (SLA/SLO/SLI)" chronology="1" category="monitoring" level="3" comment="Quantify, example, Availability SLI, Satisfying Latency SLI" />
            <ListItem name="Set app versioning" chronology="2" category="backward compatibility" level="1" comment="Semantic versioning (https://semver.org/)"/>
            <ListItem name="Define forward compatibility" chronology="2" category="forward compatibility" level="3" comment="App does not break, crash, be unavailable because of server API changes "/>
            <ListItem name="Define timeouts/retries/circuit-breakers/fallback for every call" chronology="2" category="availability" level="2"/>
            <ListItem name="Update changelog" chronology="3" category="deployment" level="1"/>
            <ListItem name="Set feature toggling / Gatekeeper" chronology="2" category="security" level="2" comment="Use them according to the relevant distribution platform's rules"/>
            <ListItem name="Record events" chronology="2" category="monitoring" level="3" comment="(eg. action, location)"/>
            <ListItem name="Define your release train" chronology="1" category="deployment" level="2" comment="Release Cycle, alpha, beta, polished, external, prod..."/>
            <ListItem name="Write unit tests" chronology="2" category="reliability" level="3"/>
            <ListItem name="Monitoring battery / network usage" chronology="2" category="monitoring" level="2"/>
            <ListItem name="Crash / error tracing" chronology="3" category="troubleshooting" level="3"/>
            <ListItem name="Be forward compatible" chronology="2" category="availability" level="3" comment="Considering the scale and lack of control in the mobile environment, managing changes in a safe and reliable manner is arguably one of the most critical pieces of managing a reliable mobile application."/>
            <ListItem name="Be GDPR compliant" chronology="3" category="security" level="3" comment="If your app is available in Europe."/>
            <ListItem name="Staged rollout / Phased Releases" chronology="3" category="reliability" level="3" comment="Define a progressive release life cycle"/>
            <ListItem name="Dogfooding / Internal testing" chronology="3" category="reliability" level="3"/>
            <ListItem name="Test all rollback toggles / killswitch before deploying" chronology="3" category="reliability" level="3"/>
            <ListItem name="Add caching" chronology="2" category="availability" level="2"/>
            <ListItem name="Add documentation" chronology="2" category="documenting" level="3"/>
            <ListItem name="Post-mortems" chronology="4" category="monitoring" level="1"/>
            <ListItem name="Implement CI/CD" chronology="2" category="deployment" level="3"/>
            <ListItem name="Runbook, configure alerting" chronology="3" category="recoverability" level="2"/>
            <ListItem name="Support prod / test mode switch" chronology="2" category="reliability" level="2"/>
            <ListItem name="Be immutable" chronology="2" category="reliability" level="3"/>
            <ListItem name="Support i8n" chronology="2" category="reliability" level="2"/>
            <ListItem name="Consider risk / criticity" chronology="3" category="security" level="3"/>
        </List>
    </Container>
)
