import React from "react"

export default ({ children }) => (
    <table className="table is-striped is-hoverable is-fullwidth">
        <thead>
            <tr>
                <th>Name</th>
                <th>Chronology</th>
                <th>Category</th>
                <th>Level</th>
                {/* <th>Principle</th> */}
                <th>Comment / Details / Tools</th>
            </tr>
        </thead>
        <tbody>
            {children}
        </tbody>
    </table>
)