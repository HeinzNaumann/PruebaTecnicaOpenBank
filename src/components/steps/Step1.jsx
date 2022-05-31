import PropTypes from 'prop-types'
import image1 from '../../assets/img/step1_image1.png'
import image2 from '../../assets/img/step1_image2.png'
import { useTranslation } from 'react-i18next'
import '../../styles/Steps1.scss'
const Step1 = ({ setConfirmAge, age }) => {
  const { t } = useTranslation('global')
  return (
    <div >
      <h3>{t('step1.Create-your-password-manager')}</h3>
      <div className="icons-blocks">
        <div>
          <img src={image1} width='150px' height='150px' alt="Logo password Manager" ></img>
          <p>{t('step1.save-your-password')}</p>
        </div>
        <div>
        <img src={image2} width='190px' height='150px' alt="Logo password Manager" ></img>
          <p>{t('step1.create_your_master_pass')}</p>
        </div>
      </div>
      <h6>{t('step1.how_it_works')}</h6>
      <p>{t('step1.in_the_first_position')}</p>
      <h6>{t('step1.what_data_you_can_safe')}</h6>
      <p>{t('step1.for_example')}</p>
      <div className="checkbox">
        <input type="checkbox" checked={age}
        // eslint-disable-next-line react/prop-types
        onChange={() => setConfirmAge()}/>
         <p>{t('step1.to_continue')}</p>
      </div>
    </div>
  )
}

export default Step1

Step1.propTypes = {

  age: PropTypes.bool,
  setConfirmAge: PropTypes.func
}
