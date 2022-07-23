const uploadToCloud = async (mediaObject) => {
	try {
		const formData = new FormData();
		formData.append('file', mediaObject);
		formData.append('upload_preset', process.env.REACT_APP_UPLOAD_PRESET);
		formData.append('cloud_name', process.env.REACT_APP_CLOUD_NAME);

		let response = await fetch(
			`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/upload`,
			{ method: 'post', body: formData }
		);

		response = await response.json();
		return response;
	} catch (error) {
		console.log('error occurred ', error);
	}
};

export default uploadToCloud;
