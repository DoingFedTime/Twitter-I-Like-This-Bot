# Twitter-I-Like-This-Bot
If you can copy and paste, you can use this. 

It's a snippet of javascript that auto likes for you, just drop it into your console! 
Use the "NoLoop1-2Min" to use the version that likes a tweet ever 1-2 minutes and loops indefinitely. 
Both TwitterLikeBot and NoLoop1-2Min scripts are basically the same minus some basic changes. 

Add a ⭐ star ⭐ if this is useful to you, OR if you saved $50 per year because now you don't have to 
pay for a stupid FF or Chrome google extension.

# 🐦 Twitter I Like This Bot

<p align="center">
  <img src="https://media.tenor.com/RTDwD5D6G9EAAAAi/downsign-twitter-followers.gif" alt="Twitter I Like This Bot Logo"/>
</p>

## About 📚

This is a simple and fun JavaScript bot that automates 🤖 liking 🥰 Twitter posts, which (probably) helps with engagement, and gaining followers(?). 
It uses JavaScript (so no installing and no "git clone") to find and click the 'Like' button on Twitter posts at random intervals. 
This bot is intended to be used for educational purposes. 
<b> Please use it responsibly, and keep in mind that it might violate Twitter's Terms of Service. You agree to use this at your own risk. </b>
By default, it will ONLY like the <b>first post on the page BUT YOU CAN DISABLE THIS!</b> Details below on customization.

## Features 🚀

- 🕓 Likes a tweet every 10 to 30 seconds (or any interval you set).
- 🕹️ Easy to start and stop. (Hit f12 open dev tools paste the code in console, hit enter)(close dev tools & refresh page to stop)
- 👀 Only likes the first unliked tweet it sees. (Remove a line to make it work continuously)
- 💫 Simple, fun, (free) and educational!

## Customization 🎨

- **Editing the Time Between Likes** 

In the `autoLike` function, find the following line of code:

const randomInterval = getRandomInterval(10 * 1000, 30 * 1000);

Here, `10 * 1000` and `30 * 1000` represent the minimum and maximum wait times between likes, in milliseconds. To adjust these times, simply change the `10` and `30` to your desired number of seconds.

- **Making the Script Run Indefinitely** 

By default, the script only likes the first post it finds. To make it like multiple posts, remove the following line from the `autoLike` function:
```
return;
```

## Installation & Usage 🛠️

1. **Clone the repository**
OR just copy the code and paste it to your dev console! 

```bash
git clone https://github.com/DoingFedTime/twitter-i-like-this-bot.git
```

2. **Open Twitter** 
Navigate to [Twitter](https://twitter.com/). `to stick to what you like search for a hashtag - this will make it so you like posts you actually like`

3. **Open the Developer Console**
Right-click anywhere, select 'Inspect', and then navigate to the 'Console' tab. `OR just hit F12`

4. **Paste and Run**
Copy the code from `TwitterLikeBot.js` OR `NoLoop1-2Min` in the repository, paste it into the console, and press 'Enter'. 

> ⚠️ **Warning:** This bot is intended for educational purposes. It might violate Twitter's Terms of Service, and could potentially lead to your account being suspended or banned. Use at your own risk.

## Contributing 🤝

We welcome contributions to improve this bot! Please feel free to submit a pull request or open an issue.

## License 📜

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```
