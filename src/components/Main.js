import React from 'react';
import SideBar from './main/SideBar';
import Viewer from './main/Viewer';
import Catalog from './main/Catalog';
import PhonesService from './services';


class Main extends React.Component {
    constructor() {
    super();

    this.state = {
      viewer : "hidden",
      catalog : "shown",
      phoneSelected : "",
      phoneAdded : []
      };
    }

    handleClick = id => {
    	this.setState({
    		viewer : "shown",
            catalog : "hidden",
            phoneSelected : id
    	})
    }

    handleBackClick = ()=> {
    	this.setState({
    		viewer : "hidden",
            catalog : "shown",
            phoneSelected : ""
    	})
    }

    handleAddClick = name =>{
    	this.setState({
            phoneAdded : name
    	})
    }

    showHide() {
    	const viewer = document.querySelector(".phoneViewer");
    	const catalog = document.querySelector(".catalog");
    	const sidebar = document.querySelector(".sidebar");

    	if(this.state.viewer == "shown"){
     		viewer.style.display = "block";
     		catalog.style.display = "none";
     		sidebar.style.display = "none";
    	}else if (this.state.viewer == "hidden"){
     		viewer.style.display = " none";
     		catalog.style.display = "block";
     		sidebar.style.display = "block";
     	}
     }

    componentDidMount(){
    	this.showHide();
    }

 	componentDidUpdate() {
    	this.showHide();
    }


	render(){
		return(
			<main>
			<SideBar 
				name = {this.state.phoneAdded} 
			/>
			<Viewer 
				display = {this.state.viewer}
	        	id = {this.state.phoneSelected}
	        	onBackClicked = {this.handleBackClick}
			/>
			<Catalog 
				onPhoneClicked = {this.handleClick}
				onAddClicked = {this.handleAddClick}
			/>
			</main>
	)}
}

export default Main;
