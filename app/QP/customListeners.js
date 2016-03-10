

//		var defaultVstbServer = 'http://54.191.76.80/vstb/app';
//		var defaultCarrierId = '1';
var defaultVstbServer = 'http://m.onthego.telus.com/vstb/app';
var defaultCarrierId = '4';
var defaultApplicationId = 5004;

function onSilverlightError(sender, args) {

	var appSource = "";
	if (sender != null && sender != 0) {
		appSource = sender.getHost().Source;
	}

	var errorType = args.ErrorType;
	var iErrorCode = args.ErrorCode;

	if (errorType == "ImageError" || errorType == "MediaError") {
		return;
	}

	var errMsg = "Unhandled Error in Silverlight Application " + appSource + "\n";

	errMsg += "Code: " + iErrorCode + "    \n";
	errMsg += "Category: " + errorType + "       \n";
	errMsg += "Message: " + args.ErrorMessage + "     \n";

	if (errorType == "ParserError") {
		errMsg += "File: " + args.xamlFile + "     \n";
		errMsg += "Line: " + args.lineNumber + "     \n";
		errMsg += "Position: " + args.charPosition + "     \n";
	}
	else if (errorType == "RuntimeError") {
		if (args.lineNumber != 0) {
			errMsg += "Line: " + args.lineNumber + "     \n";
			errMsg += "Position: " + args.charPosition + "     \n";
		}
		errMsg += "MethodName: " + args.methodName + "     \n";
	}

	throw new Error(errMsg);
}

var slRootCtrl;

function pluginLoaded(sender, args) {
	console.log('plugin loaded');
	slRootCtrl = sender.getHost();

	document.getElementById('spnDeviceId').textContent = slRootCtrl.Content.SLPlayer.GetDeviceId();

	txtVstbUrl.value = defaultVstbServer;
	txtCarrierId.value = defaultCarrierId;
	txtAppId.value = defaultApplicationId;
}


function test() {

	alert(slRootCtrl.Content.SLPlayer.GetDeviceId());
}

function changeLang(lang) {
	slRootCtrl.Content.SLPlayer.ChangeLanguage(lang);
}

function showContentTable() {

	document.getElementById('tblContent').className = '';
	document.getElementById('tblUrl').className = 'hidden';
	document.getElementById('tblEnv').className = 'hidden';
}

function showPlainUrlTable() {
	document.getElementById('tblUrl').className = '';
	document.getElementById('tblContent').className = 'hidden';
	document.getElementById('tblEnv').className = 'hidden';
}

function showEnvTable() {
	document.getElementById('tblUrl').className = 'hidden';
	document.getElementById('tblContent').className = 'hidden';
	document.getElementById('tblEnv').className = '';
}

function playUrl(url) {

	slRootCtrl.Content.SLPlayer.PlayUrl(url);

}

function playContentId() {

	slRootCtrl.Content.SLPlayer.PlayContent(txtContentId.value, document.getElementById('txtUat').value, "omg@quickplay.com", "3", "1.0.0.1", "category/path", "123", "dummyCategoryName", "sample-account-id");

}

function setupEnvironment() {

	slRootCtrl.Content.SLPlayer.SetupServer(txtVstbUrl.value, txtAppId.value, txtCarrierId.value);
	alert('Done!');

	txtVstbUrl.readOnly = true;
	txtAppId.readOnly = true;
	txtCarrierId.readOnly = true;
}

function play() {

	slRootCtrl.Content.SLPlayer.playBtn_Click(null, null);
	alert('Done!');

	txtVstbUrl.readOnly = true;
	txtAppId.readOnly = true;
	txtCarrierId.readOnly = true;
}
