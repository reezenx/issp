function scrollToTop(topValue = 0) {
  window.scroll({
    top: topValue,
    left: 0,
    behavior: 'smooth'
  });
}

export { scrollToTop }
