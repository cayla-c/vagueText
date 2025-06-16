document.getElementById("weirdChars").addEventListener("click", () => {
  const text = "Hello, 世界! こんにちは 안녕하세요 𝒜𝓃𝒹𝓇é مرحبا‏‎ ‍‎​‎​‎​(     ) –—…“”‘’✓©®𝌆𠀋𡃁"
  navigator.clipboard.writeText(text);
});
