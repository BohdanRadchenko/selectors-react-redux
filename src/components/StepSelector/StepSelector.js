import React from "react";
import Select from 'react-select'
import {connect} from 'react-redux'
import * as timerActions from '../../redux/timer/timerActions'
import * as timerSelectors from '../../redux/timer/timerSelectors'

const options = [
  {value: 0, label: '0'},
  {value: 5, label: '5'},
  {value: 10, label: '10'},
  {value: 15, label: '15'},
  {value: 20, label: '20'}];

const findOptions = value => options.find(opt => opt.value === value);

const StepSelector = ({value, onChange}) => {
  return (
    <div style={{width: 100}}>
      <Select
        value={findOptions(value)}
        onChange={onChange}
        options={options}
      />
    </div>
  )
}

const mSP = (state) => ({
  value: timerSelectors.getStep(state)
})

const mDP = (dispatch) => ({
  onChange: (step) => dispatch(timerActions.changeStep(step.value))
})

export default connect(mSP, mDP)(StepSelector);