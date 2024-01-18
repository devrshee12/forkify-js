import * as model from './Model.js';
import recipeView from './views/recipeView.js';

// import icons from "../img/icon"

import 'core-js/stable';
import 'regenerator-runtime/runtime';


const recipeContainer = document.querySelector('.recipe');



// https://forkify-api.herokuapp.com/v2




const controlRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;

    recipeView.renderSpinner();
    // 1) loading ...

    await model.loadRecipe(id);
    // console.log(model.state);

    
    const { recipe } = model.state;
    console.log('here in  : ', recipe.ingredients);
    // 2) rendering recipe

    recipeView.render(model.state.recipe)
    
    
  } catch (err) {
    console.log(err);
    alert(err);
  }

};


const init = function(){
   recipeView.addHandleRender(controlRecipe)
}

init()

