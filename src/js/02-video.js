var throttle = require('lodash.throttle');

import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const STORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(onPlay, 1000));
isPlayed();

function onPlay({ seconds }) {
  localStorage.setItem(STORAGE_KEY, seconds);
}

function isPlayed() {
  const played = localStorage.getItem(STORAGE_KEY);
  if (played) {
    player.setCurrentTime(played);
  }
}
