import React from "react"
import ListItem from "./listItem"

class List extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            items: [],
        }
    }

    renderItems(itemsList) {
        const sortedItems = itemsList.slice(0).sort(function (a, b) {
            return a.chronology - b.chronology
        })

        const listItems = sortedItems.map((item, index, array) =>
            <ListItem
                name={item.name}
                chronology={item.chronology}
                category={item.category}
                level={item.level}
                comment={item.comment}
                key={index}
            />
        )

        return (
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
                    {listItems}
                </tbody>
            </table>
        )
    }

    render() {
        return (
            this.renderItems(this.props.items)
        )
    }
}

export default List