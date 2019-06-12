import React from 'react';


class SideBar extends React.Component {
	constructor() {
	super();
	this.names = {};
    this.state = {
      phoneAdded : [], 
      };
	}
//- ${quantity} 
 	componentDidUpdate() {
		const {name} = this.props;
		 if (!this.names.hasOwnProperty(name)) {
			this.names[name] = 0;
			}
		this.names[name] += 1;
		// this.names.push(name);
 	}
	renderSelected() {
			if(this.names){	
			Object.entries(this.names).map(([name, i]) =>{
			return (
				<li 
				data-phone-id={name}
				key={i}
				>
					{name +" - " + (i) }
                	<button data-element="remove">X</button>
           		</li>
            )})}
            return Object.entries(this.names) || ""
            
	}

	render() {
		return(
			<div className="sidebar">
				<div className="fiter">
					<p>
			            Search : 
			            <input data-element="query-field"></input>
			        </p>
			        <p>
			            Sort by : 
			            <select data-element="order-field">
			                <option value="name">Alphabetical</option>
			                <option value="age">Newest</option>
			            </select>
			        </p>
			    </div>
		        <div className="cart">
			        <p>Shopping Cart</p>
		            <ul>
		            	{this.renderSelected()}
		            </ul>
		        </div>
			</div>
	    )
	}
}

export default SideBar;
