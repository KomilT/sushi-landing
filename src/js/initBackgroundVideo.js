import isMobile from "is-mobile";

const initBackgroundVideo = () => {
  if (isMobile()) {
    return;
  }

  const video = document.querySelector("#background-video");
  const sources = video.querySelectorAll("source");

  Array.from(sources).map((source) => {
    return source.setAttribute("src", source.getAttribute("data-src"));
  });

  video.load();
};

window.addEventListener("DOMContentLoaded", initBackgroundVideo);
