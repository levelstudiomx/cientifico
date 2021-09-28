import Header from '../templates/Header';

import Home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404';
import About from '../pages/About';

import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const routes = {
	'/': Home,
	'/about': About,
	'/:id': Character,
	'/contacto': 'Contact',
}

const router = async () => {
	//contenedores
	const header = null || document.getElementById('header'); // aqui hacemos referencia al header que esta en el index.html
	const content = null || document.getElementById('content'); // aqui hacemos referencia al content que esta en el index.html

	header.innerHTML = await Header();
	let hash = getHash();
	let route = await resolveRoutes(hash);
	let render = routes[route] ? routes[route] : Error404;

	content.innerHTML = await render();

}

export default router;