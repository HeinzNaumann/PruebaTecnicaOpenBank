
import PropTypes from 'prop-types'

const StepperControl = ({ handleClick, steps, currentStep }) => {
  console.log(steps.length - 1)
  console.log(currentStep)
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
  steps: PropTypes.number,
  currentStep: PropTypes.number
}
