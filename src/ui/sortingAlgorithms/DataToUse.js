import Button from '@material-ui/core/Button';
import React from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

const DataToUse = (props) => {
    return (
        <>
            <Button>
                {props.numbersToUse.toString()}
            </Button>
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

export default connect(mapStateToProps, mapDispatchToProps) (DataToUse);

