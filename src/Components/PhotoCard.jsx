import React from 'react';
import '../Layouts/Photo.css';

class Photo extends React.Component {
    render() {
        return (
            <div className="galleryStyle">
                <img src={this.props.photo.imgURL} alt={this.props.photo.altText}/>
                <p>{this.props.photo.imgDescription}</p>
            </div>
        );
    }  
}

export default Photo;