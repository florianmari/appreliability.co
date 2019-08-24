import React from "react"
import { Helmet } from "react-helmet"

export default ({pageTitle}) => (
    <Helmet>
        <meta charSet="utf-8" />
        <title>AppReliability.co - {pageTitle}</title>
        <meta name="description" content="Checklist of control points to build resilient Cliend-Side mobile applications." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Florian Mari" />
        <meta name="keywords" content="mobile,application,reliability,sre,engineering,checklist" />
    </Helmet>
)