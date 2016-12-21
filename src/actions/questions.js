// Node modules import
import axios from 'axios';

// Actions types import
import {
    FETCH_QUESTION,
    INCREMENT_QUESTIONS_COUNT,
    RELOCATE_FROM_PROPOSITION_TO_BOARD,
    RELOCATION_FROM_BOARD
} from '../constants/questions';

// Functions import
import { strToObjsArr } from '../functions/answer-transformation';

// Receives a random question
export function fetchQuestion() {
    return function(dispatch) {
        return axios.get('http://jservice.io/api/random')
            .then(response => {
                const questionObj = response.data[0];
                const data = {
                    id: questionObj.id,
                    answer: questionObj.answer,
                    description: questionObj.question,
                    category: questionObj.category.title,
                    transformedAnswer: strToObjsArr(questionObj.answer)
                };
                dispatch({
                    type: FETCH_QUESTION,
                    payload: data
                })
            } );
    }
}

// Increments the questions count
export function incrementQuestionsCount() {
    return function(dispatch) {
        dispatch({
            type: INCREMENT_QUESTIONS_COUNT
        })
    }
}

// Relocates a character from "arrayInProposition" to "arrayOnBoard"
export function charRelocationToBoard(char) {
    return function(dispatch) {
        dispatch({
            type: RELOCATE_FROM_PROPOSITION_TO_BOARD,
            payload: char
        })
    }
}

// Returns a character from "arrayOnBoard" back to "arrayInProposition"
export function charRelocationFromBoard(char) {
    return function(dispatch) {
        dispatch({
            type: RELOCATION_FROM_BOARD,
            payload: char
        })
    }
}
