import {CHANGE_SEARCHFIELD} from './constants.js'

const initialstate = {
	searchField:''
}

export const searchRobots=(state=initialstate, action={})=>{
	switch(action.type){
		case CHANGE_SEARCHFIELD:
		return Object.assign({},state, {searchField:action.payload});
		default:
		return state;
	}
}