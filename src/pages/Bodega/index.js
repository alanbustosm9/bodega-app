import React from 'react'

const Bodega = () => {
  return (
    <div>
      <h1>Bodega - App</h1>

      <h2 className='text-center my-5'>Listado</h2>

      <table className='table table-striped'>
        <thead className='bg-primary table-dark'>
          <tr>
            <th scope='col'>Nombre</th>
            <th scope='col'>Cantidad</th>
            <th scope='col'>Precio</th>
            <th scope='col'>Ingreso</th>
            <th scope='col'>Descripción</th>
            <th scope='col'>Acciones</th>
          </tr>
        </thead>

        <tbody>
            {/* FALTA AGREGAR LOS DATOS DESDE LA BD */}
        </tbody>

      </table>

    </div>
  )
}

export default Bodega;
