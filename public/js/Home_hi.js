// Get the language dropdown element
var languageDropdown = document.getElementById("languageDropdown");

// Add event listener to handle language selection change
languageDropdown.addEventListener("change", function() {
  // Get the selected language value
  var selectedLanguage = languageDropdown.value;

  // Redirect to the corresponding HTML page based on the selected language
  if (selectedLanguage === "en") {
    window.location.href = "index.html"; // Redirect to English HTML page
  } else if (selectedLanguage === "hi") {
    window.location.href = "hiHome.html"; // Redirect to Hindi HTML page
  }
});
