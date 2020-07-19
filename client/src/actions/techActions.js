import { GET_TECHS, 
        ADD_TECH,   
        DELETE_TECH, 
        TECHS_ERROR, 
        SET_LOADING } from './types';

export const getTechs = () => async dispatch => {
    try {
        setLoading();
        const res = await fetch('/techs');
        const data = await res.json();
        dispatch({ type: GET_TECHS, payload: data })}
     catch(err) {
        dispatch({ type: TECHS_ERROR, payload: err.response })
    }};
export const addTech = (tech) => async dispatch => {
    try {
        setLoading();
        const res = await fetch('/techs', {
            method: 'POST',
            body: JSON.stringify(tech),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        dispatch({ type: ADD_TECH, payload: data})
    } catch(err) {
        dispatch({ type: TECHS_ERROR, payload: err.response.data})
    }
};
export const deleteTech = (id) => async dispatch => {
    try {
        // eslint-disable-next-line
        const res = await fetch(`techs/${id}`, {
            method: 'DELETE'
        });
        dispatch({ type: DELETE_TECH, payload: id})
    } catch(err) {
        dispatch({ type: TECHS_ERROR, payload: err.response.data})
    }
};
export const setLoading = () => dispatch => {
        dispatch({ type: SET_LOADING })
    }