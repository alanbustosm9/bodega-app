import React from 'react'

const NewProducts = () => {
  return (
    <div className='row justify-content-center'>
      <div className='col-md-8'>
        <div className='card'>
          <div className='card-body'>
            <h2 className='text-center mb-4 font-weight bold'>
              Agregar Producto
            </h2>

            <form>
                <div className='form-group'>
                  <label>Nombre Producto</label>
                  <input 
                    type='text'
                    className='form-control'
                    placeholder='Nombre Producto'
                    name='name'
                  />
                </div>

                <div className='form-group'>
                  <label>Cantidad</label>
                  <input 
                    type='number'
                    className='form-control'
                    placeholder='Cantidad'
                    name='quantity'
                  />
                </div>

                <div className='form-group'>
                  <label>Precio</label>
                  <input 
                    type='number'
                    className='form-control'
                    placeholder='Precio'
                    name='price'
                  />
                </div>

                <div className='form-group'>
                  <label>Ingreso</label>
                  <input 
                    type='date'
                    className='form-control'
                    name='date'
                  />
                </div>

                <div className='form-group'>
                  <label>Descripción</label>
                  <input 
                    type='text'
                    className='form-control'
                    placeholder='Descripción'
                    name='description'
                  />
                </div>


                <button
                  type='submit'
                  className='btn btn-primary font-weight-bold d-block w-100'
                >
                  Agregar
                </button>


            </form>

          </div>

        </div>

      </div>

    </div>
  )
}

export default NewProducts