import { useState } from 'preact/hooks'; 
import { login } from '../api';

const LogIn = (props) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(false);

	const onSubmit = async (e) => {
		e.preventDefault();
		try {
			setError(false);
			await login(email, password);
			props?.setIsLoggedIn(true);
		} catch {
			setError(true);
		}
	};

	return (
		<div>
			<h1>Bem-vindo(a)</h1>
			<form id="log_in" onSubmit={onSubmit}>
				<input form="log_in" type="email" value={email} placeholder="E-mail" onInput={(e) => setEmail(e.target.value)} />
				<input form="log_in" type="password" value={password} placeholder="Senha" onInput={(e) => setPassword(e.target.value)} />
				<input form="log_in" type="submit" value="Entrar" />
			</form>
		</div>
	);	
};

export default LogIn;
