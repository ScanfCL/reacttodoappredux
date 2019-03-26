import { connect } from 'react-redux';
import { enterName,deleteText,editText } from '../action/enterName'
import Todo from '../components/todolist'
import { actionChannel } from '@redux-saga/core/effects';

function mapStateToProps(state) {
    const inputText = state.todo
    return {inputText}
}

const mapDispatchToProps = { enterText:enterName
,deleteText:deleteText
,editText:editText }


export default connect(mapStateToProps,mapDispatchToProps)(Todo)