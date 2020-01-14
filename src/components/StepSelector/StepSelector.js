import React from "react";
import Select from 'react-select'
import {connect} from 'react-redux'
import * as timerActions from '../../redux/timerActions'

const options = [
  {value: 5, label: '5'},
  {value: 10, label: '10'},
  {value: 15, label: '15'},
  {value: 20, label: '20'}]

const StepSelector = ({value, onChange}) => {
  return (
 <div style={{width: 100}}>
   <Select
     value={value}
     onChange={onChange}
     options={options}
   />
 </div>
  )
}

const mSP = (state) => ({
  value : state.timer.step
})

const mDP = (dispatch) => ({
  onChange : (step) => dispatch(timerActions.changeStep(step))
})

export default connect(mSP, mDP)(StepSelector);