/**
 * MediaKeys namespace.
 */
MediaKeys.Init = function(undefined)
{
	self.port.on("MediaPlayPause", function(){
		var playButton = GetSingleElementByXpath(MediaKeys.playButton);
		if (playButton == null) return;
		if (playButton.getAttribute("style").indexOf("block") > -1) playButton.click();
		else
		{
			GetSingleElementByXpath(MediaKeys.pauseButton).click();
		}
		self.port.emit("MediaPlayPause");
	});

	self.port.on("MediaNextTrack", function(){
		var skipButton = GetSingleElementByXpath(MediaKeys.skipButton);
		if (skipButton == null) return;
		skipButton.click();
		self.port.emit("MediaNextTrack");
	});

	self.port.on("MediaStop", function(){
		var pauseButton = GetSingleElementByXpath(MediaKeys.pauseButton);
		if (pauseButton == null) return;
		pauseButton.click();
		self.port.emit("MediaStop");
	});
}

MediaKeys.Init();