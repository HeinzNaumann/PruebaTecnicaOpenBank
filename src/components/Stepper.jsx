
import PropTypes from 'prop-types'
import { useEffect, useRef, useState } from 'react'
const Stepper = ({ steps, currentStep }) => {
  const [newStep, setNewStep] = useState([])
  const stepsRef = useRef()
  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps]
    let count = 0
    while (count < newSteps.length) {
      // step actual
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: true
        }
        count++
      } else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true
        }
        count++
      } else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false
        }
        count++
      }
    }
    return newSteps
  }
  useEffect(() => {
    const stepsState = steps.map((step, index) =>
      Object.assign(
        {},
        {
          description: step,
          completed: false,
          highlighted: index === 0,
          selected: index === 0
        }
      )
    )

    stepsRef.current = stepsState
    const current = updateStep(currentStep - 1, stepsRef.current)
    setNewStep(current)
  }, [steps, currentStep])

  return (
    <div></div>
  )
}

export default Stepper

Stepper.propTypes = {
  steps: PropTypes.array,
  currentStep: PropTypes.number
}
