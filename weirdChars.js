document.getElementById("weirdChars").addEventListener("click", () => {
  const text = "Hello, 世界! こんにちは 안녕하세요 𝒜𝓃𝒹𝓇é مرحبا‏‎ ‍‎​‎​‎​ (ZWSPs) – — … “ ” ‘ ’ ✓ © ® 𝌆 𠀋 𡃁 :tada::sparkles::boom::rocket::robot_face::package::test_tube::thread::male-detective::pizza::dragon::brain::recycle::rainbow-flag::flag-un::mahjong:️:symbols::notes::100:"
  navigator.clipboard.writeText(text);
});
