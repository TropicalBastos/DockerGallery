import React, { Component } from 'react';

export default class ImageGallery extends Component {

    constructor(props){
        super(props);
        this.state = {
            currentIndex: 0,
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
        let { currentIndex } = this.state;
        let { images } = this.props;
        let currentImage = null;
        if (images && images.length > 0)
            currentImage = images[currentIndex];

        return (
            <div>
                <div className="prev-img"></div>
                <img className="gallery-img" src={(currentImage) ? currentImage.path : ""} />
                <div className="next-img"></div>
            </div>
        );
    }

}