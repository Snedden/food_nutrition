import { connect} from 'react-redux';
import {  Image, Modal } from 'semantic-ui-react'
import { getTimelineData, getScatterData } from "./utils/dummyData"
import RecipeMicros from "./RecipeMicros";
import React from 'react';

const getData = () => ({
    timeline: getTimelineData(),
    scatter: getScatterData(),
})

const RecipeDetails = ({selectedRecipe}) => {


    const getDataFromSelectedRecipe = ()=>
        selectedRecipe.digest.map((nutrient, i) => {
            return {
                id:i,
                label:nutrient.label,
                value:nutrient.total,
                unit: nutrient.unit
            }
        })

    const renderLabelsBlocks=(type => {
        return selectedRecipe[type].map((label) =>{
            let icon,color;
            switch (type) {
                case  'cautions':
                    icon="info circle icon";
                    color="blanchedalmond";
                    break;
                case  'healthLabels':
                    icon="hand point right outline icon";
                    color="aliceblue";
                    break;
                case  'dietLabels':
                    icon="thumbs up outline icon";
                    color="antiquewhite";
                    break;
                default:
                    icon="circle outline icon";
                    color="grey";

            }
            const labelStyle = {
                margin:'3px',
                display:'block',
                backgroundColor:color
            }
            return(
                <a className="ui label" key={label} style={labelStyle}>
                    <i aria-hidden="true" className={icon}></i>
                    {label}
                </a>
                    )

        })
    });


   const divStyle = {innerHeight:500};
    return <React.Fragment>
        <div>
            <Image size='small' src={selectedRecipe.image} wrapped />
            <div id = 'cautionsBlock' style={{paddingTop:'10px'}}>
                {renderLabelsBlocks('cautions')}
            </div>
            <div id = 'dietLabelsBlock' style={{paddingTop:'10px'}}>
                {renderLabelsBlocks('dietLabels')}
            </div>
            <div id = 'healthLabelsBlock' style={{paddingTop:'10px'}}>
                {renderLabelsBlocks('healthLabels')}
            </div>
        </div>


        <Modal.Description style={{width:'min-content'}}>
            <div className="ui divided two column grid" >
                <div className="row">
                    <div className="column">
                        <ul >
                            {renderIngredientList(selectedRecipe.ingredients)}
                        </ul>
                    </div>
                    <div className="column">
                        <RecipeMicros/>
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