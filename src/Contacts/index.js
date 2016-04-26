import React, { PropTypes } from 'react';
import ContactRow from './ContactRow';

class Contacts extends React.Component {
    render () {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.contacts.filter(
                            (contact) => {
                                return contact.name.toLowerCase()
                                .includes(this.props.searchText.toLowerCase())
                                ||
                                contact.phone.includes(this.props.searchText.toLowerCase());
                            })
                            .map((contact, index) => {
                            return <ContactRow key={index} {...contact} />;
                        })
                    }

                </tbody>
            </table>
        );
    }
}

export default Contacts;
