const ajax = new XMLHttpRequest();

ajax.open("get", "/friend");
ajax.send();
ajax.onreadystatechange = () => {
	if (ajax.readyState === 4 && ajax.status === 200) {
		console.log(ajax.response);
	}
};