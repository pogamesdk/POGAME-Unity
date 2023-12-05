var functions = {

  SDK_Init: function (gameKey) {
    gameKey = Pointer_stringify(gameKey);
    window["PO_OPTIONS"] = {
      debug: false, // Enable debugging console. This will set a value in local storage as well, remove this value if you don't want debugging at all. You can also call it by running posdk.openConsole() within your browser console.
      gameId: gameKey, // Your gameId which is unique for each one of your games; can be found at your POGAME.com account.
      onEvent: function (event) {
        console.log("onEvent", event);
        switch (event.name) {
          case "SDK_GAME_START":
            console.log("SDK_GAME_START");
            SendMessage("POSDK", "ResumeGameCallback");
            break;
          case "SDK_GAME_PAUSE":
            console.log("SDK_GAME_PAUSE");
            SendMessage("POSDK", "PauseGameCallback");
            break;
          case "SDK_REWARDED_WATCH_COMPLETE":
            console.log("SDK_REWARDED_WATCH_COMPLETE");
            SendMessage("POSDK", "RewardedCompleteCallback");
            break;
          case "SDK_ERROR":
            console.log("SDK_ERROR");
            break;
        }
      }
    };
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://sdk.pogame.com/posdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "posdk");
  },

  SDK_PreloadAd: function () {
    console.log("SDK_PreloadAd");
    if (
      typeof posdk !== "undefined" &&
      typeof posdk.preloadAd !== "undefined"
    ) {
      posdk.preloadAd(posdk.AdType.Rewarded)
        .then(function (response) {
          SendMessage("POSDK", "PreloadRewardedVideoCallback", 1);
        })
        .catch(function (error) {
          SendMessage("POSDK", "PreloadRewardedVideoCallback", 0);
        });
    }
  },

  SDK_ShowAd: function (adType) {
    console.log("SDK_ShowAd");
    if (typeof posdk !== "undefined" && typeof posdk.showAd !== "undefined") {
      adType = Pointer_stringify(adType) || posdk.AdType.Interstitial;

      posdk.showAd(adType)
        .then(function (response) {
          if (adType === posdk.AdType.Rewarded) {
            SendMessage("POSDK", "RewardedVideoSuccessCallback");
          }
        })
        .catch(function (error) {
          if (adType === posdk.AdType.Rewarded) {
            SendMessage("POSDK", "RewardedVideoFailureCallback");
          }
        });
    }
  },

  SDK_SendEvent: function (options) {
    console.log("SDK_SendEvent");
    options = Pointer_stringify(options);
    if (typeof posdk !== "undefined" && typeof posdk.sendEvent !== "undefined" && typeof options !== "undefined") {
      posdk.sendEvent(options)
        .then(function (response) {

          console.log("Game event post message sent Succesfully...")

        })
        .catch(function (error) {
          console.log(error.message)
        });
    }
  }
};

mergeInto(LibraryManager.library, functions);