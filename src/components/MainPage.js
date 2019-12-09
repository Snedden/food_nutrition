import React from 'react';

const TAGS = ['vegetable', 'desserts', 'lowfat']

const MainPage = ()=>{
    return(
        <div className="ui middle aligned divided list">
            {renderTagsList()}
        </div>
    );

}

const renderTagsList = () =>{
    return TAGS.map((tag) =>{
        return(
            <div className="item">
                <h1>{tag}</h1>
            </div>
        );
    })
}



export default MainPage;