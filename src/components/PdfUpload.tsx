const PdfUpload = (props) => {
	const handleFileChange = (e) => {
		if (e.target.files) {
			props.setFile(e.target.files[0]);
		}
	};

	return (
		<form id="pdf">
			<input form="pdf" type="file" onChange={handleFileChange} />
		</form>
	);
};

export default PdfUpload;

