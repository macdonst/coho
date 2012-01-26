var ios        = 'git://git.apache.org/incubator-cordova-ios.git'
,   blackberry = 'git://git.apache.org/incubator-cordova-blackberry-webworks.git'
,   android    = 'git://git.apache.org/incubator-cordova-android.git'
,   windows    = 'git://git.apache.org/incubator-cordova-wp7.git'
,   webos      = 'git://git.apache.org/incubator-cordova-webos.git'
,   symbian    = 'git@github.com:callback/callback-symbian.git'
,   bada       = 'git://git.apache.org/incubator-cordova-bada.git'
,   docs       = 'git://git.apache.org/incubator-cordova-docs.git'
,   p 		   = require('procstreams')
, 	spawn      = require('child_process').spawn

module.exports = function(version) {
	var sh = spawn(sh);
	sh.stdout.setEncoding('utf8')
	sh.stderr.setEncoding('utf8')
	
	sh.stdout.onData(function (data) { console.log(data) })
	sh.stderr.onData(function (data) { console.log(data) })
	
	sh.stdin.write('ls\n')
	
	
	//p('git clone '+ webos + ' temp/repositories/ios')
	/*
	p('ls')
		.and('echo hi')
		.and('cd temp')
		.and('cd release && make')
		.data(function(stdout, stderr){
			console.log('we are here ' + process.cwd())
			console.log('sup')
			console.log(stdout)
		})
	
	//process.chdir('release')
	p('ls')
		.and('echo hi')
		.data(function(stdout, stderr){
			console.log('we are here ' + process.cwd())
			console.log('sup')
			console.log(stdout)
		})
	*/	
	
	/*	.and('cd temp/repositories/ios && git fetch --tags')
		.and('cd temp/repositories/ios && git checkout '+version)
		.and('cd temp/repositories/ios && make')
		.data(function(stdout, stderr){
			console.log(stdout)
		})*/
		// .and('cp -r temp/repositories/ios/dist/PhoneGap-'+version+'.dmg ../../../release/lib/ios')
		// .and('cp -r temp/repositories/ios/dist/PhoneGap-'+version+'.dmg.SHA1 ../../../release/lib/ios')
}





/*
//android
p('cd temp/repositories/')
	.and('git clone '+ android)
	.and('cd incubator-cordova-android')
	.and('git fetch --tags')
	.and('git checkout '+VERSION)
	.and('./bin/create')
	.and('cp -rp example ../../release/lib/android/example')
	.and('cp libs/phonegap-'+VERSION+'.jar ../../../release/lib/android')
	.and('cp assets/www/phonegap-'+VERSION+'.js ../../../release/lib/android/')
	.and('cp LICENSE ../../release/license')
	.and('cp VERSION ../../release/version')
	.and('cp README.md ../../release/lib/android')

//blackberry	
p('cd temp/repositories/')
	.and('git clone '+ blackberry)
	.and('cd incubator-cordova-blackberry-webworks')
	.and('git fetch --tags')
	.and('git checkout '+VERSION)
	.and('ant dist')
	.and('cd dist')
	.and('cp -r ./* ../../../release/lib/blackberry')

//windows
p('cd temp/repositories/')
	.and('git clone '+ windows)
	.and('cd incubator-cordova-windows')
	.and('git fetch --tags')
	.and('git checkout '+VERSION)
	.and('cp -r ./* ../../release/lib/windows')

//webos
p('cd temp/repositories/')
	.and('git clone '+ webos)
	.and('cd incubator-cordova-webos')
	.and('git fetch --tags')
	.and('git checkout '+VERSION)
	.and('cp -r ./* ../../release/lib/webos')

//bada
p('cd temp/repositories/')
		.and('git clone '+ bada)
		.and('cd incubator-cordova-bada')
		.and('git fetch --tags')
		.and('git checkout '+VERSION)
		.and('cp -r ./* ../../release/lib/bada')

//symbian		
p('cd temp/repositories/')
	.and('git clone '+ symbian)
	.and('cd callback-symbian')
	.and('git fetch --tags')
	.and('git checkout '+VERSION)
	.and('cp -r ./* ../../release/lib/symbian')

//docs
p('cd temp/repositories/')
	.and('git clone '+ docs)
	.and('cd incubator-cordova-docs')
	.and('git fetch --tags')
	.and('git checkout '+VERSION)
	.and('./bin/phonegap-docs')
	.and('cp -r public ../../release/doc')
}*/