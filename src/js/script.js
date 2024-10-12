const themeBtn = document.querySelector(".js-theme-switch");
const wrapper = document.querySelector(".js-theme-wrapper");
const MUSIC_DIR = "./src/assets/music/";
const NORMAL_MUSIC = `${MUSIC_DIR}normal-world.mpeg`;
const INVERTED_MUSIC = `${MUSIC_DIR}inverted-world.mpeg`;
const themes = { light: "light-theme", dark: "dark-theme" };
const musicPlayer = document.createElement("audio");
musicPlayer.src = NORMAL_MUSIC;
musicPlayer.volume = 0.2;
musicPlayer.loop = true;

const chooseMusic = () => {
  musicPlayer.src = wrapper.classList.contains(themes.light) ? NORMAL_MUSIC : INVERTED_MUSIC;
  musicPlayer.play();
}

const switchTheme = () => {
  wrapper.classList.toggle(themes.light);
  wrapper.classList.toggle(themes.dark);
  chooseMusic();
}

themeBtn.addEventListener("click", switchTheme);
window.addEventListener("click", () => musicPlayer.play(), { once: true });