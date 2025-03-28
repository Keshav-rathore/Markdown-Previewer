document.addEventListener("DOMContentLoaded", () => {
  const clearbtn = document.getElementById("clear-btn");
  const rawtext = document.getElementById("text");
  const preview = document.getElementById("previewtext");
  console.log(marked.parse("> This is a blockquote"));


  // Clear button
  clearbtn.addEventListener("click", () => {
    rawtext.value = "";
    preview.innerHTML = "";
  });

  rawtext.addEventListener("input", () => {
    const markdownText = rawtext.value.trim();

    if (!markdownText) {
      preview.innerHTML = "";
      return;
    }
    const cleanedText = markdownText.replace(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]+/, "");

    // Convert to HTML
    const htmlText = marked.parse(markdownText, { breaks: true });


    // Sanitize and render
    preview.innerHTML = DOMPurify.sanitize(htmlText, { ALLOWED_TAGS: ['ul', 'ol', 'li', 'b', 'i', 'em', 'strong', 'a', 'p', 'br', 'code', 'pre', 'blockquote', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']});
  
  });
});
