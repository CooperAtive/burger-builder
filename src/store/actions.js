export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';
export const GET_INGREDIENTS_INITIAL = 'GET_INGREDIENTS_INITIAL';

export const getIngredientsInitialActual = () => {
  return {
    type: GET_INGREDIENTS_INITIAL
  }
}

export const getIngredientsInitial = (payload) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(getIngredientsInitialActual(payload));
    }, 2000);
  }
}
