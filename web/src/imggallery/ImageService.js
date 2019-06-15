import { React, Component } from 'react';
import axios from 'axios';
import ImageGallery from './ImageGallery';

export default class ImageService extends Component {

    constructor() {
        this.state = {
            images: []
        };
    }

    async componentWillMount() {
        axios.get().then(result => {
            this.setState({
                images: result
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