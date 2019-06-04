import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Folder extends Component {

    constructor(props) {

        super(props);

        this.state = {

            isToggle: false
        };
    }

    handleOnClick = () => {

        this.setState({

            isToggle: !this.state.isToggle
        });
    }

    displayFiles = () => {

        if(!this.state.isToggle) {

            return (
                <div>
                    <ul>
                        <li> File1 </li>
                        <li> File2 </li>
                        <li> File3 </li>
                    </ul>
                </div>
            );
        }
    }

    render() {

        return (
            <div>
                <p> Home </p>
                {this.displayFiles()}
                <button onClick={this.handleOnClick}> Toggle </button>
            </div>
        );
    }
};

export default Folder;
