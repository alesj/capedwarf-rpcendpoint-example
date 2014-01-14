var endpoint = endpoint || {};

endpoint.js = endpoint.js || {};

endpoint.js.getData = function() {
	gapi.client.testendpoint.data
			.get()
			.execute(
					function(resp) {
						gapi.client.testendpoint.data
								.echo(resp)
								.execute(
										function(resp) {
											document.getElementById('response').innerHTML = 'Response:<br>'
													+ JSON.stringify(resp);
										});
					});
};

endpoint.js.enableButtons = function() {
	var getButton = document.getElementById('getButton');
	getButton.onclick = function() {
		endpoint.js.getData();
	}
	getButton.disabled = false;
};

endpoint.js.init = function(apiRoot) {
	var callback = function() {
		endpoint.js.enableButtons();
	}
	gapi.client.load('testendpoint', 'v1', callback, apiRoot);
};