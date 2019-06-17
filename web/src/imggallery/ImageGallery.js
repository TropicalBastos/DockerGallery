import React, { Component } from 'react';

export default class ImageGallery extends Component {

    constructor(props){
        super(props);
        this.state = {
            imageCount: (props.images) ? props.images.length : 0,
            currentIndex: 0,
            images: (props.images) ? [].concat(props.images) : []
        };
    }

    nextImage() {
        let { currentIndex, imageCount } = this.state;
        if (currentIndex < imageCount) {
            this.setState({
                currentIndex: currentIndex + 1
            });
        }
    }

    prevImage() {
        let { currentIndex, imageCount } = this.state;
        if (currentIndex > 0) {
            this.setState({
                currentIndex: currentIndex - 1
            });
        }
    }

    render() {
        let { currentIndex, images } = this.state;
        let currentImage = images[currentIndex];
        return (
            <div>
                <div className="prev-img"></div>
                <img className="gallery-img" src={currentImage} />
                <div className="next-img"></div>
            </div>
        );
    }

}