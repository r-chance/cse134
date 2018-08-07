self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open('swCache').then(function(cache) {
			return cache.addAll([
				'index.html',
				'issueList.html',
				'addIssue.html',
				'signup.html',
				'screenstyle.css',
				'printstyle.css',
				'sectionIssue.html',
				'textIssue.html',
				'mediaIssue.html',
				'iframeIssue.html']);
		}));
});

self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request).then(function(response) {
			return response || fetch(event.request);
		}));
});