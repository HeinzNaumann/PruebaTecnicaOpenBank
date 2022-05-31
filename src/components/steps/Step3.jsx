
import '../../styles/Steps3.scss'
const Step3 = () => {
  return (
      <div className="success-container">
        <div className="wrapper">
          <svg
            className="checkmark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <circle
              className="checkmark__circle"
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />
            <path
              className="checkmark__check"
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
        </div>

        <div className="congratulations">
          ¡Enhorabuena!
        </div>
        <div className="createdAccount">
          Tu cuenta a sido creada
        </div>
        <a href="/">
          <button className="restart">
            Cerrar
          </button>
        </a>
      </div>
  )
}

export default Step3
