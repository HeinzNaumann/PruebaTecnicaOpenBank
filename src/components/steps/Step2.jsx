import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import '../../styles/Steps2.scss'
import Failures from '../Failures'
import { useTranslation } from 'react-i18next'
// eslint-disable-next-line react/prop-types
const Step2 = ({ handleForm, valueForm }) => {
  const { password, confirmPassword, cluePassword } = valueForm
  const [validationPassword, setValidationPassword] = useState()
  const [validationEqualPassword, setValidationEqualPassword] = useState()
  const [validationMaxCluePasswords, setValidationMaxCluePasswords] = useState()

  useEffect(() => {
    if (password.match('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d\\W]{8,24}$')) {
      setValidationPassword(false)
    } else if (password === '') {
      setValidationPassword(false)
    } else if (password.match('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d\\W]{8,24}$') !== true) {
      setValidationPassword(true)
    }
  }, [password])

  useEffect(() => {
    if (password === '') {
      setValidationEqualPassword(false)
    } else if (password === confirmPassword) {
      setValidationEqualPassword(false)
    } else if (password !== confirmPassword) {
      setValidationEqualPassword(true)
    }
  }, [confirmPassword])
  const min = cluePassword.length
  const max = 255
  useEffect(() => {
    if (min > max) {
      return setValidationMaxCluePasswords(true)
    } else {
      setValidationMaxCluePasswords(false)
    }
  }, [cluePassword])
  const { t } = useTranslation('global')
  return (
    <div className='form-container'>
      <h3>{t('step2.configurate_your_password')}</h3>
      <form className='form-password'>
        <label htmlFor='password'>{t('step2.password')}</label>
          <input
          name='password'
          id='password'
          type='password'
          value={password}
          onChange={e => handleForm(e)}
          className={`${validationPassword && 'failures'}`}
          />
          <span>{validationPassword && <Failures><span>{t('step2.alert_password_rules')}</span></Failures>}</span>
          <label htmlFor='confirmPassword'>{t('step2.confirm_password')}</label>
          <input
          name='confirmPassword'
          id='confirmPassword'
          type='password'
          value={confirmPassword}
          onChange={e => handleForm(e)}
          className={`${validationEqualPassword && 'failures'}`}
          />
          <span>{validationEqualPassword && <Failures><span>{t('step2.alert_equal_password')}</span></Failures>}</span>
          <label htmlFor='cluePassword'>{t('step2.Clue_of_password')}</label>
          <textarea
          name='cluePassword'
          id='cluePassword'
          type='text-area'
          value={cluePassword}
          onChange={e => handleForm(e)}
          className={`${validationMaxCluePasswords && 'failures'}`}
          />
          <div className="counter-container">
          <span >{validationMaxCluePasswords && <Failures><span>Has alcanzado el máximo de 255 letras</span></Failures>}</span>
          <span className="counter">{min}/{max}</span>
          </div>
      </form>
      </div>
  )
}

export default Step2

Step2.propTypes = {
  handleForm: PropTypes.any,
  valueForm: PropTypes.object

}
