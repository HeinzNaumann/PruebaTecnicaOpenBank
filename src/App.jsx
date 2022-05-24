
import './App.scss'
import Logo from './assets/img/logo_openbank.png'
import StepperControl from './components/StepperControl'

function App () {
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
          />
        </div>
      </main>
    </>
  )
}

export default App
