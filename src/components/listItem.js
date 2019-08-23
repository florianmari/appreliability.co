import React from "react"

class ListItem extends React.Component {

    // Level management
    levelColorLabel(level) {
        var labelClass = "label"
    
        if (level == 1) {
            labelClass += " label-success"
        } else if (level == 2) {
            labelClass += " label-warning"
        } else if (level == 3) {
            labelClass += " label-error"
        }
        return labelClass
    }

    levelName = (level) => {
        var labelName = "..."
    
        if (level == 1) {
            labelName = "low"
        } else if (level == 2) {
            labelName = "moderate"
        } else if (level == 3) {
            labelName = "high"
        }
        return labelName
    }

    // Chronology management
    chronologyName = (chronology) => {
        switch (chronology) {
            case "1":
                return "1 - before the development"
            case "2":
                return "2 - during the development"
            case "3":
                return "3 - before production"
            case "4":
                return "4 - after production"
            default:
                return "undefined"
        }
    }

    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td><span className="label">{this.chronologyName(this.props.chronology)}</span></td>
                <td><span className="label">{this.props.category}</span></td>
                <td><span className={this.levelColorLabel(this.props.level)}>{this.levelName(this.props.level)}</span></td>
                {/* <td>{this.props.principle}</td> */}
                <td>{this.props.comment}</td>
            </tr>
        );
    }
}

export default ListItem;