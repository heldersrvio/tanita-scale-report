import { useEffect, useState } from 'preact/hooks';
import { hydrate, prerender as ssr } from 'preact-iso';

import LogIn from './components/LogIn';
import Report from './components/Report';
import PdfUpload from './components/PdfUpload';
import './style.css';

import { parseReport } from './api';

export function App() {

	return <Report />;
}

if (typeof window !== 'undefined') {
	hydrate(<App />, document.getElementById('app'));
}

export async function prerender(data) {
	return await ssr(<App {...data} />);
}
