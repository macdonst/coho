var p = require('procstreams')

module.exports = function() {
	p('rm -rf temp')
		.and('mkdir temp')
		.and('mkdir temp/repositories')
		.and('mkdir temp/release')
	    .and('mkdir temp/release/lib')
		.and('mkdir temp/release/lib/ios')
		.and('mkdir temp/release/lib/android')
		.and('mkdir temp/release/lib/blackberry')
		.and('mkdir temp/release/lib/windows')
		.and('mkdir temp/release/lib/webos')
		.and('mkdir temp/release/lib/bada')
		.and('mkdir temp/release/lib/symbian')
}
