import React, { PropTypes } from 'react'

class ContactRow extends React.Component {
    render () {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.phone}</td>
                <td>
                    <a href="">Edit</a> | <a href="">Delete</a>
                </td>
            </tr>
        )
    }
}

export default ContactRow;
