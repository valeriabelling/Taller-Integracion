import React from 'react';

function AgregarHerramienta(){

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