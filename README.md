![](https://static.pogame.com/wiki/posdk-unity-plugin/unity.png)

[![GitHub version](https://img.shields.io/badge/version-1.0.0-green.svg)](https://github.com/pogamesdk/POGAME-Unity/)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/pogamesdk/POGAME-Unity/blob/master/LICENSE)

# POGAME.com Unity SDK plugin

This is the documentation of the "POGAME.com Unity SDK plugin" project for adding the SDK within your <strong>Unity WebGL</strong> game.

POGAME.com is the biggest collections of high quality, cross-platform games. We provide great games for your website within minutes!

Running into any issues?

Check out the F.A.Q. within the Wiki of the github repository before mailing to support@pogame.com.

## Implementation within games

1.  Download and import the .unitypackage into your game (download [here](https://github.com/pogamesdk/POGAME-Unity/raw/master/POSDK.unitypackage)).
    ![](https://static.pogame.com/wiki/posdk-unity-plugin/1.png)
    ![](https://static.pogame.com/wiki/posdk-unity-plugin/2.png)

1.  Drag the prefab "POSDK" into your scene.
    ![](https://static.pogame.com/wiki/posdk-unity-plugin/3.png)

1.  Copy your GAME_KEY in your POGAME developer's control panel (in the 'Upload' tab), at <a href="https://developer.pogame.com" target="_blank">developer.pogame.com</a>

1.  Open the prefab and replace the GAME_KEY value with your own key.
    ![](https://static.pogame.com/wiki/posdk-unity-plugin/4.png)

1.  Use POSDK.Instance.ShowAd() to show an advertisement.
    ![](https://static.pogame.com/wiki/posdk-unity-plugin/5.png)

1.  Use POSDK.Instance.ShowRewardedAd() to show a rewarded advertisement.
    ![](https://static.pogame.com/wiki/posdk-unity-plugin/6.png)

1.  Use POSDK.Instance.PreloadRewardedAd() to preload a rewarded advertisement
    ![](https://static.pogame.com/wiki/posdk-unity-plugin/7.png)

1.  Make use of the events `POSDK.OnResumeGame` and `POSDK.OnPauseGame` for resuming/pausing your game in between ads.

1.  Make use of the event POSDK.OnPreloadRewardedVideo for checking the availability of rewarded advertisement after called POSDK.Instance.PreloadRewardedAd()

Correct ad-placement is key for a higher revenue potential of your game. Before you submit, make sure that your game includes a **pre-roll** and **mid-rolls**:

**Pre-roll: an ad shown before the user starts playing the game.**<br/> 
What you basically want to do is display the pre-roll as fast as possible to the user, so they don’t have the time to change their minds and close the game.<br/>
_Best practice: placing the pre-roll on buttons in the loading/splash screen (Start, Play, Continue)._<br/>

**Mid-roll: an ad shown in between game sessions.**<br/>
Ideally placed on all non-gameplay buttons, to spread the chance that users will see ads.<br/>
_Best practice: placing the mid-rolls on each button in the Game Over/Win screen (Replay, Next, Menu)._<br/>

To get the most out of your game revenue and to maintain a user friendly experience, we ask you to keep these requirements in mind when deciding on the placement of the ads: 
* Ads only display upon user input, e.g. when clicking a button
* Ads display outside of the gameplay only, to not disrupt the game experience
* Game audio is muted when the ad is displayed
* The game pauses when the ad is displayed

Don’t worry about spamming users with ads by placing ad-calls on too many buttons: we regulate the ad-interval through the SDK, so users will only see an ad when the set time-frame has passed. 

### Example:

```csharp
public class ExampleClass: MonoBehaviour {

    void Awake()
    {
        POSDK.OnResumeGame += OnResumeGame;
        POSDK.OnPauseGame += OnPauseGame;
        POSDK.OnPreloadRewardedVideo += OnPreloadRewardedVideo;
        POSDK.OnRewardedVideoSuccess += OnRewardedVideoSuccess;
        POSDK.OnRewardedVideoFailure += OnRewardedVideoFailure;
        POSDK.OnRewardGame += OnRewardGame;
    }

    public void OnResumeGame()
    {
        // RESUME MY GAME
    }

    public void OnPauseGame()
    {
        // PAUSE MY GAME
    }
    
    public void OnRewardGame()
    {
        // REWARD PLAYER HERE
    }

    public void OnRewardedVideoSuccess()
    {
        // Rewarded video succeeded/completed.;
    }

    public void OnRewardedVideoFailure()
    {
        // Rewarded video failed.;
    }

    public void OnPreloadRewardedVideo(int loaded)
    {
        // Feedback about preloading ad after called POSDK.Instance.PreloadRewardedAd
        // 0: SDK couldn't preload ad
        // 1: SDK preloaded ad
    }

    public void ShowAd()
    {
        POSDK.Instance.ShowAd();
    }

    public void ShowRewardedAd()
    {
        POSDK.Instance.ShowRewardedAd();
    }

    public void PreloadRewardedAd()
    {
        POSDK.Instance.PreloadRewardedAd();
    }
}
```

## Best Practice for Rewarded Ads

You can use multiple ad slots for rewarded ads and give your players multiple way of gathering rewards. Samples below is very nice way of implementing this feature.

`Let them watch an ad to increase their attacks!` <br>
<img src="https://static.pogame.com/wiki/rewarded-usage-1.png" width="70%">
<br>

`No coin no pain? Oh, it is not. Let them gain some free coins.` <br>
<img src="https://static.pogame.com/wiki/rewarded-usage-2.png" width="70%">
<br>

`Who doesn't want a second chance?` <br>
<img src="https://static.pogame.com/wiki/rewarded-usage-3.png" width="70%">
<br>

`Your players can take their chances to gain some buffs!` <br>
<img src="https://static.pogame.com/wiki/rewarded-usage-4.png" width="70%">
<br>

`You can give away some daily gifts to your players.` <br>
<img src="https://static.pogame.com/wiki/rewarded-usage-5.png" width="70%">
