import Button from '@material-ui/core/Button';
import React from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import Select from '@material-ui/core/Select';
import MenuItem from "@material-ui/core/MenuItem";
import DataToUse from "./DataToUse";
import CodeDisplay from "./CodeDisplay";
import {bubbleSortAction, setNumberArrayToUseAction} from "../../actions/SortingAlgorActions";


const mainStyle = {
    "left": "10px",
    "display": "flex",
    "padding": "10px"
};


const SortingAlgorithmsMainView = (props) => {

    const [chosenSortingAlgorithm, setSortingAlgorithm] = React.useState({
        chosenSortingAlgorithm: props.chosenSortingAlgorithm
    });

    let numbersToUse = [10, 25, 26, 32];

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
                    <DataToUse numbersToUse={numbersToUse}/>
                    <CodeDisplay/>
                </div>

                <Button
                    onClick={() => {
                        props.setNumberArrayToUse(numbersToUse);
                        props.bubbleSortAction();
                    }}>
                    click here to run code
                </Button>
            </>
        )

}


const mapStateToProps = state => ({
    chosenSortingAlgorithm: state.sortingAlgorReducer.chosenAlgorithm,
    sortingAlgorArray: state.sortingAlgorReducer.sortingAlgorithmsArray,
    numbersToUse: state.sortingAlgorReducer.numbersToUse
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            setNumberArrayToUse: setNumberArrayToUseAction,
            bubbleSortAction: bubbleSortAction,
            setNumberArrayToUseAction: setNumberArrayToUseAction
        }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SortingAlgorithmsMainView);

