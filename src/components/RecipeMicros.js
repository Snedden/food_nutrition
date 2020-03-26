import {connect} from 'react-redux';
import React from 'react';
import {Grid} from "semantic-ui-react";



const mineralSets = {
    'NA':{color:'#87bdd8'},
    'CA':{color:'#8ca3a3'},
    'MG':{color:'#454140'},
    'K':{color:'#96897f'},
    'FE':{color:'#686256'},
    'ZN':{color:'#625750'},
    'P':{color:'#484f4f'}
};

const vitaminsSets = {
    'VITA_RAE': {color: '#F65314'},
    'VITC': {color: '#7CBB00'},
    'THIA': {color: '#F65314'},
    'RIBF': {color: '#146EB4'},
    'NIA': {color: '#146EB4'},
    'VITB6A': {color: '#146EB4'},
    'FOLDFE': {color: '#146EB4'},
    'FOLFD': {color: '#146EB4'},
    'FOLAC': {color: '#146EB4'},
    'VITB12': {color: '#146EB4'},
    'VITD': {color: '#3F729B'},
    'TOCPHA': {color: '#006699'},
    'VITK1': {color: '#7B0099'},
    'WATER': {color: '#00A1F1'}
};

const HUGE_CIRCLE_RADIUS = 80;
const HUGE_CIRCLE_FONT_SIZE = 20;

const styles = {
    hugeCircle: {
        width:HUGE_CIRCLE_RADIUS+'px',
        height:HUGE_CIRCLE_RADIUS+'px',
        borderRadius:HUGE_CIRCLE_RADIUS+'px',
        fontSize:HUGE_CIRCLE_FONT_SIZE+'px',
        color:'white',
        lineHeight:HUGE_CIRCLE_RADIUS+'px',
        textAlign:'center',
        background:'red'
    },
    hugeCircleLabel: {
        width:HUGE_CIRCLE_RADIUS+'px',
        textAlign:'center',
    }
}

const RecipeMicros = ({selectedRecipe}) =>{
    const nutrientDict = {};


    selectedRecipe.digest.forEach( nutrient =>{
        nutrientDict[nutrient.tag] = nutrient;
    })

    console.log(nutrientDict);
    const {FAT, CHOCDF, PROCNT} = nutrientDict;
    const servings = selectedRecipe.yield;
    const fatPerServing = (FAT.total/servings).toFixed() + FAT.unit;
    const proteinPerServing = (PROCNT.total/servings).toFixed() + PROCNT.unit;
    const carbsPerServing = (CHOCDF.total/servings).toFixed() + CHOCDF.unit;
    const energy = (selectedRecipe.totalNutrients.ENERC_KCAL.quantity/servings).toFixed();

    /**
     *
     * @returns {*[]}
     */
    const renderMicroList = (type) =>{
        const set = type==='minerals'? mineralSets:vitaminsSets;
        const micros = [];

        Object.keys(set).forEach((micro) =>{
            if(!nutrientDict[micro].total){
                return; //do not show mineral with 0 quantity
            }
            const longMineral = nutrientDict[micro].label;
            const quantityByServing = (nutrientDict[micro].total/servings).toFixed(2);
            const unit = nutrientDict[micro].unit;
            const label = longMineral +" "+quantityByServing+unit;
            micros.push(
                <div className="ui mini label" key={label} style={{color:set[micro].color,fontSize:'smaller',margin:'2px'}}>{label}</div>
            )
        })
        return micros;
    }



    return (
        <Grid>
            <Grid.Row columns={1}>
                <Grid.Column>
                    <span>Serves {selectedRecipe.yield}, Nutrient per serving:</span>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row centered columns={3}>
                <Grid.Column>
                    <div style={styles.hugeCircle}>{carbsPerServing} </div>
                    <div style={styles.hugeCircleLabel}>
                        <span>Carbs</span>
                    </div>
                </Grid.Column>
                <Grid.Column>
                    <div style={styles.hugeCircle}>{proteinPerServing} </div>
                    <div style={styles.hugeCircleLabel}>
                        <span>Protein</span>
                    </div>
                </Grid.Column>
                <Grid.Column>
                    <div style={styles.hugeCircle}>{fatPerServing}</div>
                    <div style={styles.hugeCircleLabel}>
                        <span>Fat</span>
                    </div>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row centered columns={3}>
                <Grid.Column>
                    <span>Calories:{energy}</span>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row centered columns={2}>
                <Grid.Column>
                    {renderMicroList('minerals')}
                </Grid.Column>
                <Grid.Column>
                   {renderMicroList('vitamins')}
                </Grid.Column>
            </Grid.Row>

        </Grid>

    )
}

const mapStateToProps = (state)=> {
    return {
        selectedRecipe : state.spoonacularApi.selectedRecipe
    }
}


export default connect(mapStateToProps,{}) (RecipeMicros);