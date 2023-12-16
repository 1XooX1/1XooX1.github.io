const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gifContainer = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

// Giphy direct GIF links
const giphyLinks = [
  "https://media.giphy.com/media/3tE1YGjnDP6dPnL8qw/giphy.gif", // Default gif link
  "https://media.giphy.com/media/pJzetkW7ryIfDjK8gc/giphy.gif", // Replace with your second Giphy link
  "https://media.giphy.com/media/JnsTyQxv02GIbiJuNS/giphy.gif" // Replace with your "No" button Giphy link
];

// Corresponding text for each gif
const gifTexts = [
  "✨Will you be my Jasmine?😋", // Default gif text
  "Congratulations  you're officially mine and I'm yours✨☝️🤓", // Second gif text
  "Hmm, no?" // "No" button gif text
];

// Audio URLs
const yesAudioUrl = 'https://audio.jukehost.co.uk/Oi1X7JzQQhmHPoJMxaQpUPfEaaJnlMgy'; // Replace with the URL of your "Yes" audio file
const noAudioUrl = 'https://audio.jukehost.co.uk/P7fcj2drzIWED7YFku9cwCvHzexS5Cez';

// Audio elements
const yesAudio = new Audio(yesAudioUrl);
const noAudio = new Audio(noAudioUrl);

// Preload Giphy GIFs
const preloadGifs = () => {
  giphyLinks.forEach((giphyLink) => {
    const img = new Image();
    img.src = giphyLink;
  });
};

preloadGifs();

// Display the default gif and text
const defaultGifIndex = 0;
gifContainer.src = giphyLinks[defaultGifIndex];
question.innerHTML = gifTexts[defaultGifIndex];

yesBtn.addEventListener("click", () => {
  // Change text after clicking "Yes"
  const secondGifIndex = 1;
  question.innerHTML = gifTexts[secondGifIndex];

  // Change to the second gif after clicking "Yes"
  gifContainer.src = giphyLinks[secondGifIndex];

  // Play "Yes" audio when "Yes" is clicked
  yesAudio.play();

  // Pause "No" audio when "Yes" is clicked
  noAudio.pause();
});

noBtn.addEventListener("click", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  // Change position of "No" button
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";

  // Play "No" audio when "No" is clicked
  noAudio.play();

  // Update text for "No" button
  const noGifIndex = 2; // Replace with the index of the "No" button gif
  gifContainer.src = giphyLinks[noGifIndex];
  const noButtonTextIndex = 2; // Replace with the index of the "No" button text
  question.innerHTML = gifTexts[noButtonTextIndex];

  // Pause "Yes" audio when "No" is clicked
  yesAudio.pause();
});
