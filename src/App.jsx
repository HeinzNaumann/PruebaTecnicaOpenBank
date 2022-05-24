import { useState } from 'react'
import './App.scss'
import Logo from './assets/img/logo_openbank.png'
import StepperControl from './components/StepperControl'
import Step1 from './components/steps/Step1'
import Step2 from './components/steps/Step2'
import Step3 from './components/steps/Step3'

function App () {
  const [currentStep, setCurrentStep] = useState(1)
  const steps = [
    'New Password',
    'Create Password',
    'Success'
  ]

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Step1 />
      case 2:
        return <Step2 />
      case 3:
        return <Step3 />
      default:
    }
  }

  const handleClick = (direction) => {
    let newStep = currentStep
    // Si le das a click al boton next y detecta el string suma si no resta
    direction === 'next' ? newStep++ : newStep--
    // Comprueba si es esta dentro de los limites
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep)
  }

  return (
    <>
      <header>
        <img src={Logo} alt="Logo OpenBank" height="27px" width="147px" />
      </header>
      <main>
        <div className="App-content">
          <p>Probando</p>
          <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
          />
        </div>
      </main>
    </>
  )
}

export default App
