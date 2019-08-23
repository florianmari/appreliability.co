import React from "react"

export default ({ children }) => (
    <table className="table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Chronology</th>
                <th>Category</th>
                <th>Level</th>
                {/* <th>Principle</th> */}
                <th>Comment / Details</th>
            </tr>
        </thead>
        <tbody>
            {children}
        </tbody>
    </table>
)