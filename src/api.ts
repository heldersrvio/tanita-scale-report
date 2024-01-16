const API_URL = import.meta.env.API_URL || 'http://localhost:3000';

export const login = async (email, password) => {
	const response = await fetch(`${API_URL}/login`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			user: {
				email,
				password,
			},
		}),
		credentials: 'include',
	});
	return response.json();
};

export const parseReport = async (file) => {
	const formData = new FormData();
	formData.append("report", file);
	const response = await fetch(`${API_URL}/reports/parse`, {
		method: 'POST',
		body: formData,
		credentials: 'include',
	});

	return response.json();
};

