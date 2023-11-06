import Navbar from "../navbar/Navbar";
import './Products.css';

function Products() {
    return (
        <>
            <Navbar />

            <div className="container-size">

                <div className="container-products">
                    
                        <div className="register">
                            <h1>Registro de Produtos</h1>
                        </div>

                        <div className="form-products">
                            <div className="style">
                            <input type="text" placeholder="Nome do Produto"/>
                            </div>

                            <div className="style">
                            
                            <input type="text" placeholder="Preço do Produto"/>
                            </div>
                            
                            <div className="style">
                            
                            <input type="text" placeholder="Cor do produto"/>

                            </div>
                            
                            <div className="style">
                            <input type="text" placeholder="Quantidade"/>
                            </div>
                            
                            <div className="style">
                            
                            <input type="text" placeholder="Descrição do produto" className="input-description" />
                            </div>
                            
                            <div className="style">
                            <input type="text" placeholder="Imagem do produto (URL)"/>
                            </div>
                            

                        </div>

                        <div className="div-btn">

                            <button className="btn-prod">Enviar</button>
                        </div>
                </div>

            </div>

        </>

    );
}
export default Products;