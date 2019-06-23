import React, { Component } from 'react';
import axios from 'axios';

export default class ImageService extends Component {

    static ENDPOINT = "/images";

    constructor(props) {
        super(props);
        this.state = {
            images: []
        };
    }

    async componentWillMount() {
        axios.get(ImageService.ENDPOINT).then(result => {
            this.setState({
                images: result.data
            });
        });
    }

    render() {
        const childrenWithProps = React.Children.map(this.props.children, child =>
            React.cloneElement(child, { images: this.state.images })
        );

        return <div>{ childrenWithProps }</div>
    }

}