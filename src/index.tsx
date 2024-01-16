import { useEffect, useState } from 'preact/hooks';
import { hydrate, prerender as ssr } from 'preact-iso';

import LogIn from './components/LogIn';
import Report from './components/Report';
import PdfUpload from './components/PdfUpload';
import './style.css';

import { parseReport } from './api';

export function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [file, setFile] = useState(null);
	const [reportData, setReportData] = useState(null);

	const getReportData = async () => {
		const data = await parseReport(file);
		console.log(data);
		setReportData(data);
	};

	useEffect(() => {
		if (file !== null) {
			getReportData();
		}
	}, [file]);

	return !isLoggedIn ? (
		<LogIn setIsLoggedIn={setIsLoggedIn}/>
	) : reportData === null ? (
		<PdfUpload setFile={setFile} />
	) : (
		<Report data={reportData} />
	);
}

if (typeof window !== 'undefined') {
	hydrate(<App />, document.getElementById('app'));
}

export async function prerender(data) {
	return await ssr(<App {...data} />);
}
