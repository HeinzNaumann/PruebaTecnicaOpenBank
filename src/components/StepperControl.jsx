
import PropTypes from 'prop-types'
import '../styles/StepperControl.scss'
const StepperControl = ({ handleClick, steps, currentStep, age, finalValidation }) => {
  return (
    <div className='stepperControl-container'>
        <button
        onClick={() => handleClick('back')}
        className={`${
          currentStep === 1 ? 'disabled' : ''
        }`}
        >
            Back
        </button>
        <button
        onClick={(currentStep === 1 && age === true) || (currentStep === 2 && finalValidation === true) ? () => handleClick('next') : () => handleClick('') }
        className={`${
          (currentStep === 1 && age !== true) || (currentStep === 2 && finalValidation !== true) ? 'disabled' : ''}`}
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
  age: PropTypes.bool,
  finalValidation: PropTypes.bool
}
