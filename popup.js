
document.getElementById("summarize").addEventListener("click", async () => {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = '<div class="loading"><div class="loader"></div></div>';

  const summaryType = document.getElementById("summary-type").value;

  // Get API key from storage
  chrome.storage.sync.get(["geminiApiKey"], async (result) => {
    if (!result.geminiApiKey) {
      resultDiv.innerHTML =
        "API key not found. Please set your API key in the extension options.";
      return;
    }

    chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
      chrome.tabs.sendMessage(
        tab.id,
        { type: "GET_ARTICLE_TEXT" },
        async (res) => {
          if (!res || !res.text) {
            resultDiv.innerText =
              "Extracting article text from this page is not supported.";
            return;
          }

          try {
            const summary = await getGeminiSummary(
              res.text,
              summaryType,
              result.geminiApiKey
            );
            resultDiv.innerText = summary;
          } catch (error) {
            resultDiv.innerText = `Error: ${
              error.message || "Failed to generate summary."
            }`;
          }
        }
      );
    });
  });
});


async function getGeminiSummary(text, summaryType, apiKey) {
 
  const maxLength = 20000;
  const truncatedText = text.length > maxLength ? text.substring(0, maxLength) + "..." : text;


  let prompt;
  switch (summaryType) {
    case "brief":
      prompt = `Provide a concise summary in a few sentences of the following text:\n\n${truncatedText}`;
      break;
    case "detailed":
      prompt = `Provide a detailed summary with key points of the following text: \n\n${truncatedText}`;
      break;
    case "easy":
      prompt = `Explain the following text in simple and easy-to-understand way of the following text:\n\n${truncatedText}`;
      break;
    case "eli5":
      prompt = `Explain the following text as if I am 5 years old of the following text:\n\n${truncatedText}`;
      break;
    default:
      prompt = `Summarize the following article:\n\n${truncatedText}`;
  }

  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: prompt }],
            },
          ],
          generationConfig: {
            temperature: 0.2,
          },
        }),
      }
    );

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error?.message || "API request failed");
    }

    const data = await res.json();
    return (
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No summary available."
    );
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to generate summary. Please try again later.");
  }
}


document.getElementById("copy-btn").addEventListener("click", () => {
  const summaryText = document.getElementById("result").innerText;

  if (summaryText && summaryText.trim() !== "") {
    navigator.clipboard
      .writeText(summaryText)
      .then(() => {
        const copyBtn = document.getElementById("copy-btn");
        const originalText = copyBtn.innerText;

        copyBtn.innerText = "Copied!";
        setTimeout(() => {
          copyBtn.innerText = originalText;
        }, 2000);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  }
});









