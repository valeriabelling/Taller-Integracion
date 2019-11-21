import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { agregarHerramientaAction } from '../actions/herramientaAction';
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
    const agregarNuevaHerramienta = (herramienta) => dispatch( agregarHerramientaAction(herramienta) );
    const validarFormulario = (estado) => dispatch( validarFormularioAction(estado) );
    
    // useSelector es similar a mapStateToProps en Hooks
    const error = useSelector( ( state )  => state.error);

    // Cuando el formulario es enviado
    const submitNuevaHerramienta = e => {
        e.preventDefault();

        // Validar el formulario

        if( nombre.trim() === '' || marca.trim() === '' || categoria.trim() === '' || precio.trim() === '' || caracteristicas.trim() === '' || cantidad.trim() === '' || estado.trim()=== '' ) {
            validarFormulario(true);
            return;
        }

        validarFormulario(false);


        // Crear la nueva cita
        agregarNuevaCita({
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
            <form className="mt-5">
                <div className="form-group">
                    <label>Nombre</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="nombre" 
                        placeholder="Nombre"
                    />
                </div>

                <div className="form-group">
                    <label>Marca</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="marca" 
                        placeholder="Marca"
                    />
                </div>

                <div class="dropdown">
                    <a class="btn btn-primary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Categoría</a>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a class="dropdown-item" href="#">Construcción</a>
                        <a class="dropdown-item" href="#">Elevación</a>
                        <a class="dropdown-item" href="#">Ferretería</a>
                        <a class="dropdown-item" href="#">Agrícola</a>
                        <a class="dropdown-item" href="#">Cortes</a>
                        <a class="dropdown-item" href="#">Jardinería</a>
                        <a class="dropdown-item" href="#">Electrónica</a>
                    </div>
                </div>

                <div className="form-group">
                    <label>Precio</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="precio" 
                        placeholder="Precio"
                    />
                </div>

                <div className="form-group">
                    <label>Características</label>
                    <textarea 
                        type="text" 
                        className="form-control" 
                        name="caracteristicas" 
                        placeholder="Características"
                    />
                </div>

                <div className="form-group">
                    <label>Cantidad</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        name="cantidad"
                    />
                </div>

                <div className="form-group" >
                    <div class = "invisible">
                        <label>Estado</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="estado"
                            placeholder= "Estado"
                            value="True"
                        />
                    </div>
                </div>
            </form>
​
            
        </div>
    )
}

export default AgregarHerramienta;