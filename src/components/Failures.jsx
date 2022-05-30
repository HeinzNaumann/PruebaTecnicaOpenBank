import PropTypes from 'prop-types'
const Failures = (props) => {
  return (
    <>
    <div className="algo">{props.children}</div>
    </>
  )
}

export default Failures

Failures.propTypes = {

  children: PropTypes.object
}
