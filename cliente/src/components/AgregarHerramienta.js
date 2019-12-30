/*import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { agregarHerrAction } from '../actions/herramientaAction';
import { validarFormularioAction } from '../actions/validarHerramientaAction';
import uuid from 'uuid';

const AgregarHerramienta = () => {

    // State del componente
    const [ nombre, guardarNombre ] = useState('');
    const [ marca, guardarMarca ] = useState('');
    const [ categoria, guardarCategoria ] = useState('');
    const [ precio, guardarPrecio ] = useState('');
    const [ caracteristicas, guardarCaracteristicas ] = useState('');
    const [ cantidad, guardarCantidad ] = useState('');
    const [ estado, guardarEstado ] = useState('');

    // Dispatch para ejecutar nuestras acciones
    const dispatch = useDispatch();
    const agregarNuevaHerr = (herramienta) => dispatch( agregarHerrAction(herramienta) );
    const validarFormulario = (estado) => dispatch( validarFormularioAction(estado) );

    // useSelector es similar a mapStateToProps en Hooks
    const error = useSelector( ( state )  => state.error);

    // Cuando el formulario es enviado
    const submitNuevaHerr = e => {
        e.preventDefault();

        // Validar el formulario

        if( nombre.trim() === '' || marca.trim() === '' || categoria.trim() === '' || precio.trim() === '' || caracteristicas.trim() === '' || cantidad.trim() === '' || estado.trim() === '' ) {
            validarFormulario(true);
            return;
        }

        validarFormulario(false);


        // Crear la nueva cita
        agregarNuevaHerr({
            id: uuid(),
            nombre,
            marca,
            categoria,
            precio,
            caracteristicas,
            cantidad,
            estado
        })


        // Reiniciar el formulario
        guardarNombre('');
        guardarMarca('');
        guardarCategoria('');
        guardarPrecio('');
        guardarCaracteristicas('');
        guardarCantidad('');
        guardarEstado('');
    }
    
    return(
        <div className="col-md-12 mx-auto ">
            <h4 className="text-left">Paso 1</h4>
            <form onSubmit={submitNuevaHerr}>
                <div className="form-group">
                    <label>Nombre</label>
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="Nombre"
                        value={nombre}
                        onChange={ e => guardarNombre(e.target.value) }
                    />
                </div>

                <div className="form-group">
                    <label>Marca</label>
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="Marca"
                        value={marca}
                        onChange={ e => guardarMarca(e.target.value) }
                    />
                </div>

                <div class="input-group mb-3">
                    <select class="custom-select" id="inputGroupSelect01" onChange={leerCategoria}>
                        <option selected>Seleccionar categoría...</option>
                        <option value="Construcción">Construcción</option>
                        <option value="Elevación">Elevación</option>
                        <option value="Ferretería">Ferretería</option>
                        <option value="Agrícola">Agrícola</option>
                        <option value="Cortes">Cortes</option>
                        <option value="Jardinería">Jardinería</option>
                        <option value="Electrónica">Electrónica</option>
                    </select>
                    
                </div>

                <div className="form-group">
                    <label>Precio</label>
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="Precio"
                        value={precio}
                        onChange={ e => guardarPrecio(e.target.value) }
                    />
                </div>

                <div className="form-group">
                    <label>Características</label>
                    <textarea 
                        type="text" 
                        className="form-control"
                        placeholder="Características"
                        value={caracteristicas}
                        onChange={ e => guardarCaracteristicas(e.target.value) }
                    />
                </div>

                <div className="form-group">
                    <label>Cantidad</label>
                    <input 
                        type="number" 
                        className="form-control"
                        value={cantidad}
                        onChange={ e => guardarCantidad(e.target.value) }
                    />
                </div>

                <div className="form-group" >
                    <div class = "invisible">
                        <label>Estado</label>
                        <input 
                            type="text" 
                            className="form-control"
                            placeholder= "Estado"
                            value={true}
                            onChange={ e => guardarEstado(e.target.value) }
                        />
                    </div>
                </div>

                <div className="form-group row justify-content-end">
                    <div className="col-sm-3">
                        <button type="submit" className="btn btn-success w-100" onClick= "http://localhost/4000/nueva-herramienta">Agregar</button>
                    </div>
                </div>
            </form>
​            { error.error  ? <div className="alert alert-danger text-center p2">Todos los campos son obligatorios</div> : null}
            
        </div>
    )
}

export default AgregarHerramienta;*/


import React, {useState} from 'react';
import Error from './Error';
import axios from 'axios';
import Swal from 'sweetalert2';
//esta es la forma de redireccionar hacia el componente
import {withRouter} from 'react-router-dom';

function AgregarHerramienta({/*history, */guardarRecargaHerramientas}) {  //este history es el que redirecciona

    const [ nombre, guardarNombre ] = useState('');
    const [ marca, guardarMarca ] = useState('');
    const [ categoria, guardarCategoria ] = useState('');
    const [ precio, guardarPrecio ] = useState('');
    const [ caracteristicas, guardarCaracteristicas ] = useState('');
    const [ cantidad, guardarCantidad ] = useState('');
    const [ estado, guardarEstado ] = useState(true);
    const [ error, guardarError ] = useState(false);

    const leerCategoria = e => {
        guardarCategoria(e.target.value)
    }

    const agregarHerramienta = async e => {
        e.preventDefault();
        
        //manejamos el error
        if( nombre === '' || marca === '' || categoria === '' || precio === '' || caracteristicas === '' || cantidad === '' || estado === '' ) {
            guardarError(true);
            return;
        }

        guardarError(false);

        console.log("hola");
        //crear el nuevo producto
        try {
            
            const resultado = await axios.post('http://localhost:4000/nueva-herramienta', {
                nombre,
                marca,
                categoria,
                precio,
                caracteristicas,
                cantidad,
                estado
            })

            console.log(resultado);
            if (resultado.status === 201){
                Swal.fire(
                    'Producto creado!',
                    'El producto se creo correctamente',
                    'success'
                )
            }
            
        }
        catch (error){
            console.log(error);
            Swal.fire({
                type: 'error',
                title: 'Oops, Error...',
                text: 'Error, vuelve a intentarlo!'
            })
            
        }

        //redirigir al usuario los productos
        guardarRecargaHerramientas(true)
        //history.push('/productos')

    }

    return(
        <div className="col-md-12 mx-auto ">
            <h4 className="text-left">Paso 1</h4>
            {(error) ? <Error mensaje='Todos los campos son obligatorios'/> : null}
            <form onSubmit={agregarHerramienta}>
                
                <div className="form-group">
                    <label>Título de la publicación</label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={nombre}
                        onChange={ e => guardarNombre(e.target.value) }
                    />
                </div>

                <div className="form-group">
                    <label>Marca</label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={marca}
                        onChange={ e => guardarMarca(e.target.value) }
                    />
                </div>

                <div class="input-group mb-3">
                    <div>
                        <label>Categoría</label>
                        <select class="custom-select" id="inputGroupSelect01" onChange={leerCategoria}>
                            <option selected>Seleccionar...</option>
                            <option value="Construcción">Construcción</option>
                            <option value="Elevación">Elevación</option>
                            <option value="Ferretería">Ferretería</option>
                            <option value="Agrícola">Agrícola</option>
                            <option value="Cortes">Cortes</option>
                            <option value="Jardinería">Jardinería</option>
                            <option value="Electrónica">Electrónica</option>
                        </select>
                    </div>
                </div>

                <div className="form-group">
                    <label>Precio</label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={precio}
                        onChange={ e => guardarPrecio(e.target.value) }
                    />
                </div>

                <div className="form-group">
                    <label>Características</label>
                    <textarea 
                        type="text" 
                        className="form-control"
                        value={caracteristicas}
                        onChange={ e => guardarCaracteristicas(e.target.value) }
                    />
                </div>

                <div className="form-group">
                    <label>Cantidad</label>
                    <input 
                        type="number" 
                        className="form-control"
                        value={cantidad}
                        onChange={ e => guardarCantidad(e.target.value) }
                    />
                </div>

                <div className="form-group" >
                        <input
                            type="hidden" 
                            className="form-control"
                            value= {estado}
                            onChange={ e => guardarEstado(e.target.value) }
                        />
                </div>

                <input type="submit" className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3" value="Agregar Herramienta" />
            </form>
            
        </div>
    )
}

export default withRouter(AgregarHerramienta);