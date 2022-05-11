export default function validateForm({ name, email }) {
	if (!name.trim()) {
		return 'Username required'
	}
	const regex =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	if (!email) {
		return 'Email required'
	} else if (regex.test(email.toLocalLowerCase)) {
		return 'Email address is invalid'
	}

	return null
}
