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

  // Only "like" the first post for demo purposes.
  const buttonToClick = likeButtons[0];

  buttonToClick.click();
  console.log('Liked a post.');

  const randomInterval = getRandomInterval(10 * 1000, 30 * 1000);
  setTimeout(autoLike, randomInterval);
}

autoLike();
