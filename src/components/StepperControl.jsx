
const StepperControl = ({ handleClick, steps }) => {
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
            Next
        </button>
    </div>
  )
}

export default StepperControl
