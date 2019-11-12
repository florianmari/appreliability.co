import React from "react"

class ListItem extends React.Component {

    // Level management
    levelColorLabel(level) {
        var labelClass = "tag"
    
        if (level == 1) {
            labelClass += " is-success"
        } else if (level == 2) {
            labelClass += " is-warning"
        } else if (level == 3) {
            labelClass += " is-danger"
        }
        return labelClass
    }

    levelName = (level) => {
        var labelName = "..."
    
        if (level === 1) {
            labelName = "low"
        } else if (level === 2) {
            labelName = "moderate"
        } else if (level === 3) {
            labelName = "high"
        }
        return labelName
    }

    // Chronology management
    chronologyName = (chronology) => {
        switch (chronology) {
            case 1:
                return "1 - before development"
            case 2:
                return "2 - during development"
            case 3:
                return "3 - before production"
            case 4:
                return "4 - after production"
            default:
                return "undefined"
        }
    }

    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td><span className="tag is-dark">{this.chronologyName(this.props.chronology)}</span></td>
                <td><span className="tag is-dark">{this.props.category}</span></td>
                <td><span className={this.levelColorLabel(this.props.level)}>{this.levelName(this.props.level)}</span></td>
                {/* <td>{this.props.principle}</td> */}
                <td>{this.props.comment}</td>
            </tr>
        );
    }
}

export default ListItem;