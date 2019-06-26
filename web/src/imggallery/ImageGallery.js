import React, { Component } from 'react';

export default class ImageGallery extends Component {

    constructor(props){
        super(props);
        this.state = {
            currentIndex: 0,
        };
        this.nextImage = this.nextImage.bind(this);
        this.prevImage = this.prevImage.bind(this);
    }

    nextImage() {
        let { currentIndex } = this.state;
        let { images } = this.props;

        if (!images)
            return;

        let imageCount = images.length;
        if (currentIndex < imageCount - 1) {
            this.setState({
                currentIndex: currentIndex + 1
            });
        }
    }

    prevImage() {
        let { currentIndex } = this.state;
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
            <div class="gallery-wrapper">
                <div onClick={this.prevImage} className="prev-img controls">
                    <img src="/res/back.png" />
                </div>
                <img className="gallery-img" src={(currentImage) ? currentImage.path : ""} />
                <div onClick={this.nextImage} className="next-img controls">
                    <img src="/res/next.png" />
                </div>
            </div>
        );
    }

}