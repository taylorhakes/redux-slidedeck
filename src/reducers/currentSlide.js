import { NEXT_SLIDE, PREV_SLIDE } from '../constants/ActionTypes';

export function currentSlide(state = 0, action) {
	switch (action.type) {
		case NEXT_SLIDE:
			return state + 1;
		case PREV_SLIDE:
			return state - 1;
		default:
			return state;
	}
}
