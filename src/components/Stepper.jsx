
import PropTypes from 'prop-types'
import { useEffect, useRef, useState } from 'react'
import '../styles/Stepper.scss'

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
  const stepsDisplay = newStep.map((step, index) => {
    return (
      <div
        key={index}
        className={
          index !== newStep.length - 1
            ? 'stepper-content-full'
            : 'stepper-content'
        }
      >
        <div className="stepper-content-inside">
          <div
            className={`stepper-circle-effect ${
              step.selected
                ? 'stepper-circle-effect-selected'
                : ''
            }`}
          >
            {
            step.completed
              ? (
                  <span className='stepper-completed'>&#10003;</span>
                )
              : (
                  index + 1
                )}
          </div>
          <div
            className={`stepper-highlighted ${
              step.highlighted ? 'stepper-highlighted-true' : 'stepper-highlighted-false'
            }`}
          >
            {step.description}
          </div>
        </div>
        <div
          className={`stepper-completed  ${
            step.completed ? 'stepper-completed-true' : 'stepper-completed-false'
          }  `}
        ></div>
      </div>
    )
  })

  return (
    <div className="stepper">
      {stepsDisplay}
    </div>
  )
}

export default Stepper

Stepper.propTypes = {
  steps: PropTypes.array,
  currentStep: PropTypes.number
}
