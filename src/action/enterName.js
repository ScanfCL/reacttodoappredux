export const enterName = (name = {}) => {
    return { type:'NAMECHANGE',
    text:name }
    }
export const deleteText = (i=0) => {
    return { type:'DELETETEXT',
    number:i }
}
export const editText = (name = {},i=0) => {
    return { type:'EDITTEXT',
    text:name, 
    number:i
    }
}