import Button from '@material-ui/core/Button';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { bindActionCreators } from 'redux';
import {goToGameAction} from '../../actions/cardMenuActions';
import {connect} from 'react-redux';
const whatsOnImage = require("../../images/whatsOn.jpg");


const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
};


const SortingAlgorithmsMainView = (props) => {

    const { classes } = props;

    return (
            <>
                <Button
                onClick={() => {
                    console.log("!!!!!!!!!!!!!!!!");
                }}>
                    click here to run code
                </Button>
            </>
        )

}


const mapStateToProps = state => ({
    goToGame: state.cardMenuReducer.goToGame
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            goToGameAction: goToGameAction()
        }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (SortingAlgorithmsMainView);

