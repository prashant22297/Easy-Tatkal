(function () {
	'use strict';
	var devtools = {open: false};
	var threshold = 160;
	var emitEvent = function (state) {
		window.dispatchEvent(new CustomEvent('devtoolschange', {
			detail: {
				open: state
			}
		}));
	};

	setInterval(function () {
		if ((window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized) || window.outerWidth - window.innerWidth > threshold ||
		window.outerHeight - window.innerHeight > threshold) {
			if (!devtools.open) {
				emitEvent(true);
			}
			devtools.open = true;
		} else {
			if (devtools.open) {
				emitEvent(false);
			}
			devtools.open = false;
		}
	}, 500);

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = devtools;
	} else {
		window.devtools = devtools;
	}
})();
