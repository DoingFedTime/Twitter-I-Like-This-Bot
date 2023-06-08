// In this version of the script, the "Like" button of the first post found will be clicked, then the script will wait a random amount of time between 1-2 minutes before repeating the process. The line to stop the script after liking one post has been removed, allowing the script to run indefinitely.
function getRandomInterval(min, max) {
  return Math.random() * (max - min) + min;
}

function autoLike() {
  const likeButtonSelector = 'div[data-testid="like"]';
  const likeButtons = document.querySelectorAll(likeButtonSelector);

  if (!likeButtons.length) {
    console.log('No "Like" buttons found, please check your selector.');
    return;
  }

  // Like the first post found.
  const buttonToClick = likeButtons[0];

  buttonToClick.click();
  console.log('Liked a post.');

  const randomInterval = getRandomInterval(60 * 1000, 120 * 1000); // Random interval between 1-2 minutes.
  setTimeout(autoLike, randomInterval);
}

autoLike();
