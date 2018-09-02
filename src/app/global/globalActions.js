const BASE = 'globalReducer/';
export const SET_LOADING = BASE + 'SET_LOADING';

export function setLoading(isLoading) {
	return {
		type: SET_LOADING,
		payload: isLoading
	};
}
