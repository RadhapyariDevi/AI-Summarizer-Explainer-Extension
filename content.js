//Content script for text extraction
console.log("AI Summarizer content script loaded");


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("Content script received message:", request);
  
  if (request.type === "GET_ARTICLE_TEXT"){
      const articleText = extractArticleText();
     
      sendResponse({ 
        text: articleText,
        success: true,
        length: articleText.length 
      });
   
  }
  
  return true;
});

function extractArticleText(){
  const articleSelectors = [
    'article',
    '[role="article"]',
    '.article-content',
    '.post-content',
    '.entry-content',
    '.story-content',
    '.post-body',
    '.article-body',
    '.content-area',
    'main',
    '.main-content',
    '.story-body',
    '.article-text'
  ];

  for(const selector of articleSelectors){
    const element = document.querySelector(selector);
    if(element){
      const text = element.innerText || element.textContent;
      if(text && text.trim().length > 200){
        return cleanText(text);
      }
    }
  }
  const bodyText = getMainContent();
  return cleanText(bodyText);
}

function getMainContent(){

  const clone = document.body.cloneNode(true);
  
  // Remove common non-content elements
  const noiseSelectors = [
    'nav', 'header', 'footer', 'aside', 
    'script', 'style', 'noscript',
    '.nav', '.header', '.footer', '.sidebar',
    '.menu', '.advertisement', '.ad', 
    '.social-share', '.comments', '.related-posts',
    '.newsletter', '.popup', '.modal'
  ];
  
  noiseSelectors.forEach(selector => {
    const elements = clone.querySelectorAll(selector);
    elements.forEach(el => el.remove());
  });
  
  return clone.innerText || clone.textContent || '';
}

function cleanText(text){
  if (!text) return '';
  
  return text
    .replace(/\s+/g, ' ')
    .replace(/\n+/g, '\n')
    .trim()
    .substring(0, 30000); 
}