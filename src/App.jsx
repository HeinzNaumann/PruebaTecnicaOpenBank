
// import { createPassword } from '../../../services/api/Service.js'
import { useState, useEffect } from 'react'
import './App.scss'
import './styles/Steps.scss'
import Logo from './assets/img/logo_openbank.png'
import Stepper from './components/Stepper'
import StepperControl from './components/StepperControl'
import Step1 from './components/steps/Step1'
import Step2 from './components/steps/Step2'
import Step3 from './components/steps/Step3'

function App () {
  // const handleSubmit = async (event) => {
  //   event.preventDefault()
  //   try {
  //     await createPassword(event)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  const [finalValidation, setFinalValidation] = useState()
  useEffect(() =>
    setFinalValidation(() => {
      if (valueForm.password === valueForm.confirmPassword && valueForm.cluePassword.length > 1 && valueForm.cluePassword.length < 255) {
        // handleSubmit(valueForm)
        return true
      } else {
        return false
      }
    })
  )

  // Step1
  const [age, setAge] = useState(false)

  const handleChange = () => {
    setAge(!age)
  }

  // Step 2
  const [valueForm, setValueForm] = useState({
    password: '',
    confirmPassword: '',
    cluePassword: ''
  })

  const handleCheck = (e) => {
    setValueForm({
      ...valueForm,
      [e.target.name]: e.target.value
    })
  }

  const handlePrueba = (e) => {
    console.log(e)
  }

  const [currentStep, setCurrentStep] = useState(1)
  const steps = [
    'Nueva contraseña',
    'Crear contraseña',
    'Realizado'
  ]

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Step1 setConfirmAge={() => handleChange()} age={age}/>
      case 2:
        return <Step2 handleForm={(e) => handleCheck(e)} setFinalValidation={(e) => handlePrueba(e)} valueForm={valueForm} />
      case 3:
        return <Step3 />
      default:
    }
  }

  const handleClick = (direction) => {
    let newStep = currentStep
    // Si le das a click al boton next y detecta el string suma si no resta
    direction === 'next' ? newStep++ : direction === 'back' && newStep--
    // Comprueba si es esta dentro de los limites
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep)
  }

  return (
    <>
      <header>
        <img src={Logo} alt="Logo OpenBank" height="27px" width="147px" />
      </header>
      <main >
        <div className="App-content">
        <Stepper steps={steps} currentStep={currentStep} />
          <div className='steps-container'>
            {displayStep(currentStep)}
          </div>
          <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
          age={age}
          finalValidation={finalValidation}
          />
        </div>
      </main>
    </>
  )
}

export default App
