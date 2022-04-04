import { NavLink } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div
      className='bg-dark text-light'
      style={{
        width: 'fit-content',
        margin: 'auto',
        padding: '5rem',
        marginTop: '5rem',
      }}
    >
      <h2>¿Quieres vender tu departamento?</h2>
      <p>¡Nosotros te ayudamos!</p>
      <NavLink to='/register'>
        <button className='btn-blue'>Comenzar</button>
      </NavLink>
    </div>
  );
};
