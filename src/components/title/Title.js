import React, {Component} from 'react';

class Title extends Component {

    render(){
        let {children} = this.props;

        return (
            <div className="title">
                <h1>{children}</h1>
            </div>
        )
    }

}

export default Title;