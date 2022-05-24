
import PropTypes from 'prop-types'

const StepperControl = ({ handleClick, steps, currentStep }) => {
  return (
    <div>
        <button
        onClick={() => handleClick()}
        className=""
        >
            Back
        </button>
        <button
        onClick={() => handleClick('next')}
        className=""
        >
            {currentStep === steps.length - 1 ? 'Confirm' : 'Next'}
        </button>
    </div>
  )
}

export default StepperControl

StepperControl.propTypes = {
  handleClick: PropTypes.func,
  steps: PropTypes.array,
  currentStep: PropTypes.number
}
