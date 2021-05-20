const ajax = new XMLHttpRequest();

ajax.open("get", "http://qq.com:8888/friend");
ajax.send();
ajax.onreadystatechange = () => {

	if (ajax.readyState === 4) {
		if (ajax.status >= 200) {
			console.log(ajax.response);
		}
		
	}
}; 
/* function jsonp(url) {
	return new Promise((resolve, reject) => {
		let num = Math.random();
        
		let script = document.createElement("script");
		script.src = `${url}?callback=jackjsonpcallback_${num}`;
		window[`jackjsonpcallback_${num}`] = (data) => {
			resolve(data);
		};
		script.onload = () => {
			script.remove();
		};
		script.onerror = () => {
			reject();
		};
		document.body.appendChild(script);
	});
}

jsonp("http://qq.com:8888/friends").then((data) => {
	console.log(data);
}); */