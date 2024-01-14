// script.js

function loadItem(itemPage) {
    // You can implement logic to load the content of the item page here
    // For simplicity, let's assume you have a function to load Markdown content
    loadMarkdownContent(itemPage);
}

function loadMarkdownContent(itemPage) {
    // Implement logic to load and render Markdown content on the page
    // This could involve AJAX requests, Markdown parsing libraries, etc.
    // For demonstration purposes, let's assume there's a function renderMarkdown(content)
    // that renders the Markdown content to a specific element.
    // Example:
    renderMarkdown(`# ${itemPage}\n\nThis is the content of ${itemPage}`);
}

function renderMarkdown(content) {
    // Implement logic to render Markdown content
    // For simplicity, let's assume there's an element with ID "markdown-content"
    // where we can display the rendered Markdown.
    document.getElementById("markdown-content").innerHTML = content;
}
