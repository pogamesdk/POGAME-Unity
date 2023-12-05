#POSDK UNTIY PLUGIN

Setup:
 - Drag the prefab "POSDK" into your scene
 - Replace the GAME_KEY value with your own keys
 - Use POSDK.Instance.ShowAd() to show an interstitial advertisement
 - Use POSDK.Instance.ShowRewardedAd() to show a rewarded advertisement
 - Use POSDK.Instance.PreloadRewaredAd() to preload a rewarded advertisement
 - Make use of the events POSDK.OnResumeGame and POSDK.OnPauseGame for resuming/pausing your game in between ads
 - Make use of the event POSDK.OnPreloadRewardedVideo for checking the availability of rewarded advertisement after called POSDK.Instance.PreloadAd("rewarded")

Example:

public class ExampleClass: MonoBehaviour {

    void Awake()
    {
        POSDK.OnResumeGame += OnResumeGame;
        POSDK.OnPauseGame += OnPauseGame;
        POSDK.OnPreloadRewardedVideo += OnPreloadRewardedVideo;
    }

    public void OnResumeGame()
    {
        // RESUME MY GAME
    }

    public void OnPauseGame()
    {
        // PAUSE MY GAME
    }

    public void OnPreloadRewardedVideo(int loaded)
    {
        // FEEDBACK ABOUT PRELOADING AD
		// 0: SDK couldn't preloaded ad
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