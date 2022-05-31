
import '../../styles/Steps3.scss'
import { useTranslation } from 'react-i18next'
const Step3 = () => {
  const { t } = useTranslation('global')
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
        {t('step3.congratulations')}
        </div>
        <div className="createdAccount">
        {t('step3.your_acount_has_been_create')}
        </div>
        <a href="/">
          <button className="restart">
          {t('step3.close')}
          </button>
        </a>
      </div>
  )
}

export default Step3
