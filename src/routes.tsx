import { Routes , Route } from "react-router-dom";
import App from "./App";
import Products from "./components/produtos/Products";
import Users from "./components/users/Users";


function MainRoutes() {
    return (
        <Routes>
            <Route path="/home" element={<App/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/users" element={<Users/>}/>
        </Routes>
    );
}

export default MainRoutes;