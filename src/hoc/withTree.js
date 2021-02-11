import React, { Component } from "react";

const withTree = (WrappedComponent) => {
    class Zoom extends Component {
        constructor(props){
            super(props);
            this.state = {
                zoom: 1
            }
        }

        handleZoomIn = () => {
            const { zoom } = this.state;
            if(zoom > 0.25 && zoom <= 2){
                this.setState({
                    zoom: Number((zoom-0.25).toFixed(2))
                })
            }
        }
    
        handleZoomOut = () => {
            const { zoom } = this.state;
            if(zoom >= 0.25 && zoom < 2){
                this.setState({
                    zoom: Number((zoom+0.25).toFixed(2))
                })
            }
        }
    
        handleResetZoom = () => {
            this.setState({
                zoom: 1
            })
        }

        handleSearch = () => {
            alert("searching...")
        }

        render(){
            const { zoom } = this.state;

            return (
                <WrappedComponent 
                    zoom={zoom} 
                    handleZoomIn={this.handleZoomIn} 
                    handleZoomOut={this.handleZoomOut} 
                    handleResetZoom={this.handleResetZoom}
                    handleSearch={this.handleSearch}
                />
            )
        }
    }
    return Zoom;
}

export default withTree;