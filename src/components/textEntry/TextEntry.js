import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './TextEntry.scss';

class TextEntry extends Component {

    render(){
        let {title, children} = this.props;

        return (
            <div className="text-entry">
                <h2>{title}</h2>
                {children}
            </div>
        )
    }

}

TextEntry.propTypes = {
  title: PropTypes.node
};

TextEntry.defaultProps = {
    title: null
};

export default TextEntry;