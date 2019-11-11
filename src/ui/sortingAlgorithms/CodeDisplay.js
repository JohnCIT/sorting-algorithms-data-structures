import Button from '@material-ui/core/Button';
import React from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';



const CodeDisplay = (props) => {


    return (
        <>
        </>
    )

};


const mapStateToProps = state => ({
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
        }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps) (CodeDisplay);

