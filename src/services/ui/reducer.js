import * as actionTypes from './actionTypes';
import _ from 'lodash';

export const initialState = {
	lang: 'ar',
	dir: 'rtl',
	theme: 'day', // [ day || night ]
	permissions: {
		geolocation: '',
		camera: '',
	},
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.UPDATE:
			return _.merge({}, state, action.payload);

		case actionTypes.RESET:
			return {
				...state,
				...initialState,
			};

		default:
			return state;
	}
};
