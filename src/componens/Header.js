
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {




  return (
    <header className ='header'>
        <h1>{  title }</h1>
        <Button color={showAdd?"teal":"red"} text={showAdd?"Close":"Add Task"} onClick={onAdd}/>
    </header>
  )
}
Header.defaultProps = {
    title: "React Task Tracker"}

Header.prototype = {  title: PropTypes.string.iaRequired }
export default Header