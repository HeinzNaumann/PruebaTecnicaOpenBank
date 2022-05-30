import PropTypes from 'prop-types'
import image1 from '../../assets/img/step1_image1.png'
import image2 from '../../assets/img/step1_image2.png'
import '../../styles/Steps1.scss'
const Step1 = ({ setConfirmAge, age }) => {
  return (
    <div >
      <h3>Crea tu password manager</h3>
      <div className="icons-blocks">
        <div>
          <img src={image1} width='150px' height='150px' alt="Logo password Manager" ></img>
          <p>Guarda aqui todas tus contraseñas, datos o  cualquier información, olvida las notas de papel y las aplicaciones protegidas.</p>
        </div>
        <div>
        <img src={image2} width='150px' height='150px' alt="Logo password Manager" ></img>
          <p>Crea tu clave maestra: solo tú podras acceder a tus secretos con ella.</p>
        </div>
      </div>
      <h6>Cómo funciona</h6>
      <p>En primer lugar, debes crear una contraseña diferente para sus pertenencias electróninicas. No podrás recuperar tu contraseña, así que recuérdala bien.</p>
      <h6>Qué datos pouedes guardar</h6>
      <p>Por ejemplo, el número de tu targeta el PIN y el PUK de tu teléfono móvi, el número de serie de alguno de tus dispositivos o cualquier información que necesites tener en lugar seguro.</p>
      <div className="checkbox">
        <input type="checkbox" checked={age}
        // eslint-disable-next-line react/prop-types
        onChange={() => setConfirmAge()}/>
         <p> Para poder continuar es necesario que confirmes que eres mayor de 18 años y que aceptas que tratemos tus datos según nuestras politicas de privacidad.</p>
      </div>
    </div>
  )
}

export default Step1

Step1.propTypes = {

  age: PropTypes.bool,
  setConfirmAge: PropTypes.func
}
