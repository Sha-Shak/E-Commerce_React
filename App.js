/* import Product from "./Pages/Product";
import Home from "./Pages/Home";
import ProductList from "./Pages/ProductList";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
*/
import {
	BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import ProductList from "./Pages/ProductList";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/products/:category">
					<ProductList />
				</Route>
				<Route path="/product/:id">
					<Product />
				</Route>
				<Route path="/cart">
					<Cart />
				</Route>
				
			</Switch>
		</Router>
	);
}

export default App;
