import * as types from './ActionTypes';

export function showData( _index ){
	return{
		type : types.SHOW_DATA,
		index : _index
	}
}