
import PropTypes from 'prop-types'
const Stepper = ({ steps, currentStep }) => {
  console.log(steps)
  return (
    <div>Stepper</div>
  )
}

export default Stepper

Stepper.propTypes = {
  steps: PropTypes.number,
  currentStep: PropTypes.number
}
