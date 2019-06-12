import React from 'react';
import Phone from './Phones.js';
import PhonesService from '../services';

class Catalog extends React.Component {
	constructor() {
        super()
        this.state = {
            phones: []
        }
    }
     componentDidMount() {
        PhonesService.getAll().then(data => {
                this.setState({
                    phones: data
                })
            })
    }

    renderPhones() {
        const { onPhoneClicked, onAddClicked} = this.props;
    	return (this.state.phones.map((phone) => {
      		return (
            <Phone
            	id = {phone.id}
                key = {"phone-" + phone.age}
                name = {phone.name}
                image = {phone.imageUrl}
                snippet = {phone.snippet}
                onLinkClicked = {() => {
                    onPhoneClicked(phone.id)
                    }}
                onAddClick = {() => {
                    onAddClicked(phone.name)
                    }}
            />)}))
    }

	render() {
	    return <ul className="catalog">{this.renderPhones()}</ul>
	}
}


export default Catalog;
