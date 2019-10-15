import Button from '@material-ui/core/Button';
import React from 'react';
import { bindActionCreators } from 'redux';
import {goToGameAction} from '../../actions/cardMenuActions';
import {connect} from 'react-redux';
import Select from '@material-ui/core/Select';
import MenuItem from "@material-ui/core/MenuItem";


const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
};

const mainStyle = {
    "left": "10px",
    "display": "flex",
    "padding": "10px"
};


const SortingAlgorithmsMainView = (props) => {

    const { classes } = props;
    const [chosenSortingAlgorithm, setSortingAlgorithm] = React.useState({
        chosenSortingAlgorithm: props.chosenSortingAlgorithm
    });

    return (
            <>
                <div style={mainStyle}>
                    <Select
                        value={chosenSortingAlgorithm}
                        renderValue={(selected) => {
                            if (selected.length === 0) {
                                return <em>Placeholder</em>;
                            }
                            return selected.chosenSortingAlgorithm;
                        }}
                        onChange={(event) => {
                            setSortingAlgorithm(event.target.value)
                        }}
                    >
                        {props.sortingAlgorArray.map(sortingAlgorithm => (
                            <MenuItem key={sortingAlgorithm} value={sortingAlgorithm}>
                                {sortingAlgorithm}
                            </MenuItem>
                        ))}
                    </Select>
                </div>

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
    goToGame: state.cardMenuReducer.goToGame,
    chosenSortingAlgorithm: state.sortingAlgorReducer.chosenAlgorithm,
    sortingAlgorArray: state.sortingAlgorReducer.sortingAlgorithmsArray
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            goToGameAction: goToGameAction()
        }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (SortingAlgorithmsMainView);

