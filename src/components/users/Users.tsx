import Navbar from '../navbar/Navbar';
import './Users.css';

function Users() {
    return(
        <>
        <Navbar/>

        <div className='container-size'>
            <div className='container-user'>
                <div className='register-user'>
                    <h1>Cadastro de Usuários</h1>
                </div>

                <div className='form-user'>
                    <div className='style-u'>
                        <input type="text" placeholder='Nome do Usuário' />
                        <input type="text" placeholder='Sobrenome' />
                    </div>

                    <div className='style-u'>
                        <input type="text" placeholder='Idade' />
                        <input type="text" placeholder='Endereço'/>
                    </div>

                    <div className='style-x'>
                        <input type="text" placeholder='Email' />
                    </div>

                    <div className='style-u'>
                        <input type='text' placeholder='CPF' />
                        <input type="text" placeholder='Senha' />
                    </div>
                </div>

                <div className='btn-user'>

                <button>Enviar</button>
                </div>
            </div>

        </div>
        </>
    );

}

export default Users;