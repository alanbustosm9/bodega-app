import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar navbar-dark bg-dark mb-4'>
        <span className='navbar-brand'>
          <a href='/'>Inicio</a>
        </span>

        <span className='navbar-brand'>
            Alan Bustos
        </span>

        <a href='/new-products' className='btn btn-info d-block d-md-inline-block'>Agregar Producto &#43;</a>

        <button className='btn btn-outline-danger'>
          <i className='fas fa-sign-out-alt'></i>
            <span> Salir</span>
        </button>

    </div>
  )
}

export default Navbar