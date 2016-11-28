import * as types from '../actions/ActionTypes';

/**
	reducer의 초기 상태 작성
*/

const initialState = {
	index : 0
}

export default function show( _state = initialState, _action ){
	if( _action.type === types.SHOW_DATA ){
		return {
			index : _action.index
		};
	}
	else{
		return _state;
	}
}