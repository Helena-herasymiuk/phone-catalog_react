import React from 'react';
import PhonesService from '../services';



class Viewer extends React.Component {
	constructor() {
        super();

        this.state = {
        	phone : {
        	id : "",
    		images : [],
    		name : "",
		    description : ""	
        	}
        }
    }

     componentDidMount() {
     	// let vie = document.querySelector(".phoneViewer");
     	// if (viewer == "hidden"){
     	// 	vie.style.display = " none";
     	// } 
     	this.getById();
   }

   componentDidUpdate() {
     	this.getById();
   }

    getById() {
    	const {id} = this.props;
       	if(id){
          PhonesService.getById(id).then(data => {
                  this.setState({
                      phone: data
      		 })
              })
         }}

   //      	phoneId : this.state.phone.id,
   //  		images : this.state.phone.images,
   //  		name : this.state.phone.name,
		 //    description : this.state.phone.description
		 // })
   //  }

    renderImgs() {
    	if(this.state.phone){
    		return (this.state.phone.images.map((img, i) => {
	      		return (
		          <li key ={i}>
            		<img 
			            src={img} 
			            data-element="small-preview"
			            key = {"img" + this.state.phoneId}>
			        </img>
			       </li>
		        )}))
    	} else {
    		return <li>crash</li>
    	}
    }

	

	render() {
		const {id, name, images, description} = this.state.phone;
		const {onBackClicked} = this.props;
	    return (
	    	<div className = "phoneViewer">
		    	<img 
					alt={name}
			        className="phoneDetail" 
			        src={images[0]}
			        data-element="big-preview"
			    ></img>
			    <div  data-element="phone-element"
			        data-phone-id={id}
			        className="buttons">
			          <button data-element="back-button" onClick={onBackClicked}>Back</button>
			         <button data-element="add-to-cart">Add to basket</button>
			    </div>
		        <h1>{name}</h1>
		        <p> {description}</p>
		        <ul className="phone-thumbs">
		        {this.renderImgs()}
		        </ul>
		    </div>
	    	)}
}




export default Viewer;
