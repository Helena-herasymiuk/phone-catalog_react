import React from 'react';
import PhonesService from '../services';



class Viewer extends React.Component {
	constructor(props) {
        super(props);

        this.state = {
        	phone : {
        	id : "",
    		images : [],
    		name : "",
		    description : ""
        	},
        	mainImage: "",
        }
    }

	selectImage(imageUrl) {
	    this.setState({
	      mainImage: imageUrl,
	    });
	}

    componentDidMount() {
     	const {id} = this.props;
       	if(id){
          PhonesService.getById(id).then(data => {
                  this.setState({
                      phone: data,
                      mainImage: data.images[0]
      		 		})
              })
         }
    }

    renderImgs() {
    	if(this.state.phone){
    		return (this.state.phone.images.map((img, i) => {
	      		return (
		          <li key ={i}>
            		<img 
			            src={img} 
			            data-element="small-preview"
			            key = {"img" + this.state.phoneId}
			            onClick={() => {
                  			this.selectImage(img)
                		}}>
			        </img>
			       </li>
		        )}))
    	} else {
    		return <li>crash</li>
    	}
    }

	

	render() {
		const {id, name, images, description} = this.state.phone;
		const {onBackClicked, onAddClicked} = this.props;
	    return (
	    	<div className = "phoneViewer">
		    	<img 
					alt={name}
			        className="phoneDetail mainImage" 
			        src={this.state.mainImage}
			        data-element="big-preview"
			    ></img>
			    <div  data-element="phone-element"
			        data-phone-id={id}
			        className="buttons">
			          <a href="#">
			          	<button 
				          data-element="back-button" 
				          onClick={onBackClicked}>
				        Back
				      </button>
				      </a>
			          <button 
				         data-element="add-to-cart"  
				         onClick = {() => {
		                    onAddClicked(name)}}>
		                Add to basket
		              </button>
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
