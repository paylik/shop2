
import React, { PropTypes }from 'react';
import { connect } from 'react-redux';

class Modal extends React.Component {
    
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        modal: PropTypes.object.isRequired
};

    render () {
        const { isOpen } = this.props.modal;
        
        if (!isOpen) return;
        return (
            <div>
                
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        modal: state.modal
    };
}


export default connect(mapStateToProps(Modal));
