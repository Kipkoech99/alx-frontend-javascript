export default function getFullResponseFromAPI(success){
	return new Promise((reject, resolve) => {
		if (success) {
			resolve({status: 200, body: 'Success'});
		}; else {
			reject new Error('The fake API is not working currently');
		}
	});
}