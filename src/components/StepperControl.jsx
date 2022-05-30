
import PropTypes from 'prop-types'
import '../styles/StepperControl.scss'
const StepperControl = ({ handleClick, steps, currentStep, age }) => {
  return (
    <div className='stepperControl-container'>
        <button
        onClick={() => handleClick()}
        className={`${
          currentStep === 1 ? 'disabled' : ''
        }`}
        >
            Back
        </button>
        <button
        onClick={age === true ? () => handleClick('next') : () => handleClick()}
        className={`${
          age !== true ? 'disabled' : ''}`}
        >
            {currentStep === steps.length - 1 ? 'Confirm' : 'Next' }
        </button>
    </div>
  )
}

export default StepperControl

StepperControl.propTypes = {
  handleClick: PropTypes.func,
  steps: PropTypes.array,
  currentStep: PropTypes.number,
  age: PropTypes.bool
}
