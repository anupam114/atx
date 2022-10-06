import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {NavLink} from "react-router-dom";

function SubNavigation() {
  return (
    <ButtonGroup className='sub-nav'>
      <NavLink className={({ isActive }) => 'btn btn-default ' + (isActive?'active':'')} to='/crossings'>All Crossings</NavLink>
      <NavLink className={({ isActive }) => 'btn btn-default ' + (isActive?'active':'')} to='/cameras' >Cameras</NavLink>
      <NavLink className={({ isActive }) => 'btn btn-default ' + (isActive?'active':'')} to='/' >Closoures</NavLink>
    </ButtonGroup>
  )
}

export default SubNavigation;