
import PropTypes from 'prop-types'
import '../styles/StepperControl.scss'
import { useTranslation } from 'react-i18next'
const StepperControl = ({ handleClick, steps, currentStep, age, finalValidation }) => {
  const { t } = useTranslation('global')
  return (
    <div className='stepperControl-container'>
        <button
        onClick={() => handleClick('back')}
        className={`${
          currentStep === 1 ? 'disabled' : ''
        }`}
        >
            {t('generics.back')}
        </button>
        <button
        onClick={(currentStep === 1 && age === true) || (currentStep === 2 && finalValidation === true) ? () => handleClick('next') : () => handleClick('') }
        className={`${
          (currentStep === 1 && age !== true) || (currentStep === 2 && finalValidation !== true) ? 'disabled' : ''}`}
        >
            {currentStep === steps.length - 1 ? `${t('generics.confirm')}` : `${t('generics.next')}` }
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
