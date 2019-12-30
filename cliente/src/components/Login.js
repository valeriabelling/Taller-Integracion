import React, {useState} from 'react';
import Error from './Error';
import axios from 'axios';
import Swal from 'sweetalert2';
import { GoogleLogin } from 'react-google-login';
import ReactDOM from 'react-dom';
//esta es la forma de redireccionar hacia el componente
import {withRouter} from 'react-router-dom';

//class Login extends Component{
function Login({guardarRecargaUsuario}){
        const responseGoogle = (response) => {
            console.log(response);
        }

        ReactDOM.render(
            <GoogleLogin
                clientId="507129168064-j0pg2imltnfgl6l8c4n6bigv84l3ulb5.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        )

        const [nombre, guardarNombre] = useState('');
        const [apellido, guardarApellido] = useState('');
        const [telefono, guardarTelefono] = useState('');
        const [email, guardarEmail] = useState('');
        const [direccion, guardarDireccion] = useState('');
        const [estado, guardarEstado] = useState(true);
        const [error, guardarError] = useState(false);

        const login = async e => {
            e.preventDefault();
            
            //manejamos el error
            if (nombre === '' || apellido === '' || telefono === '' || email === '' || direccion === '' || estado === ''){
                guardarError(true);
                return;
            }
    
            guardarError(false);
    
            //crear el nuevo producto
            try {
                const resultado = await axios.post('http://localhost:4000/restaurant', {
                    nombre,
                    apellido,
                    telefono,
                    email,
                    direccion,
                    estado
                })
    
                console.log(resultado);
                if (resultado.status === 201){
                    Swal.fire(
                        'Usuario creado!',
                        'El usuario se creo correctamente',
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
            guardarRecargaUsuario(true)
        }
        return (

            <div className="col-md-8 mx-auto ">
                <h1 className="text-center">Complete sus datos</h1>
    ​            {(error) ? <Error mensaje='Todos los campos son obligatorios'/> : null}
                <form className="mt-5" onSubmit={login}>
                    <div className="form-group">
                        <label>Nombre</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="nombre"
                            onChange ={e => guardarNombre(e.target.value)}
                        />
                    </div>
    ​
                    <div className="form-group">
                        <label>Apellido</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="apellido"
                            onChange ={e => guardarApellido(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Teléfono</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="telefono"
                            onChange ={e => guardarTelefono(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Correo electrónico</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="email"
                            onChange ={e => guardarEmail(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Dirección</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="direccion"
                            onChange ={e => guardarDireccion(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <input 
                            type="hidden" 
                            className="form-control" 
                            name="estado"
                            onChange ={e => guardarEstado(e.target.value)}
                        />
                    </div>
                    <input type="submit" className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3" value="Crear cuenta" />
                </form>

                <div>
                
                </div>
            </div>




            
        );
    
}
 
export default withRouter(Login);