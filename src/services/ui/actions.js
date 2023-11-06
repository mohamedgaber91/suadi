import * as actionTypes from './actionTypes';

export const update = payload => ({
	type: actionTypes.UPDATE,
	payload
});

export const reset = () => ({
	type: actionTypes.RESET
});
