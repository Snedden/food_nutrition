import _ from 'lodash'
import { connect} from 'react-redux';
import React from 'react'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'
import {selectRecipe} from "../actions";
import NivoPieChart from "./NivoPieChart";

const RecipeDetails = ({selectedRecipe}) => {
    const data =[
        {
            "id": "python",
            "label": "python",
            "value": 82,
            "color": "hsl(188, 70%, 50%)"
        },
        {
            "id": "hack",
            "label": "hack",
            "value": 13,
            "color": "hsl(231, 70%, 50%)"
        },
        {
            "id": "go",
            "label": "go",
            "value": 119,
            "color": "hsl(20, 70%, 50%)"
        },
        {
            "id": "php",
            "label": "php",
            "value": 110,
            "color": "hsl(67, 70%, 50%)"
        },
        {
            "id": "rust",
            "label": "rust",
            "value": 20,
            "color": "hsl(118, 70%, 50%)"
        }
    ]
   const divStyle = {innerHeight:500};
    return <React.Fragment>
        <Image size='medium' src={selectedRecipe.image} wrapped />

        <Modal.Description>
            <Header>{selectedRecipe.label}</Header>
            <div class="ui divided two column grid" >
                <div className="row">
                    <div className="column">
                        <ul >
                            {renderIngredientList(selectedRecipe.ingredients)}
                        </ul>
                    </div>
                    <div className="column" style={{ height: '300px', display:'flex'}}>
                        <NivoPieChart data={data}/>
                    </div>
                </div>
            </div>
        </Modal.Description>
    </React.Fragment>
}

const renderIngredientList = (list) => {
    if(list){
        return list.map((item,i) => {
            return(<li key={item.text+i}>
                    <p>{item.text}</p>
                  </li>)
        })
    }
}

const mapStateToProps = (state) => {
    return {
        selectedRecipe : state.spoonacularApi.selectedRecipe
    }
}

export default connect(mapStateToProps,{}) (RecipeDetails);