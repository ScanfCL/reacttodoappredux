export default function(state={inputText:[]},action) {

    switch(action.type) {
        case'NAMECHANGE':
            state.inputText.push(action.text);
            return {
                ...state,
            }
        case'DELETETEXT':
            state.inputText.splice(action.number,1)
            return{
                ...state,
            }

        case'EDITTEXT':
            state.inputText[action.number] = action.text
            return{
                ...state,
            }
            default:
            return state
    }
    }

