# 📝AI Article Explainer & Summarizer

A powerful Chrome extension that uses the Google Gemini API to summarize and explain web articles, making complex information easy to understand with just one click.

## Features

* **One-Click Summaries**: Get the gist of any article without reading the whole thing.
* **Multiple Explanation Styles**: Choose from four different modes:
    * **Brief**: A concise, few-sentence summary.
    * **Detailed**: A more in-depth summary with key points.
    * **Easy Explanation**: Simplifies complex topics for better understanding.
    * **Explain Like I'm 5 years old**: The simplest possible explanation for anyone.
* **Powered by Google Gemini**: Leverages Google's state-of-the-art AI for high-quality, coherent, and context-aware summaries.
* **Smart Text Extraction**: Intelligently identifies and extracts the main article content, filtering out ads, headers, and footers.
* **Copy to Clipboard**: Easily copy the generated summary with a single button click.
* **Secure API Key Storage**: Your personal Gemini API key is stored securely using `chrome.storage.sync`.

---
Here’s a preview of the app running locally:

<table>
  <tr>
    <td>
      <img width="500" height="300" alt="brief" src="https://github.com/RadhapyariDevi/AI-Summarizer-Explainer-Extension/blob/main/Screenshots/brief.png" />
    </td>
    <td>
      <img width="500" height="300" alt="Detailed" src="https://github.com/RadhapyariDevi/AI-Summarizer-Explainer-Extension/blob/main/Screenshots/detailed.png" />
    </td>
  </tr>
  <tr>
    <td>
      <img width="500" height="300" alt="easy explanation" src="https://github.com/RadhapyariDevi/AI-Summarizer-Explainer-Extension/blob/main/Screenshots/Easy%20explanation.png" />
    </td>
    <td>
      <img width="500" height="300" alt="eli5" src="https://github.com/RadhapyariDevi/AI-Summarizer-Explainer-Extension/blob/main/Screenshots/explain%20like%20I'm%205%20years%20old.png" />
    </td>
  </tr>
</table>

---

## Installation

### Manual Installation (Developer Mode)

1.  **Download the code**: Clone this repository or download it as a ZIP file and unzip it.
    ```bash
    git clone https://github.com/RadhapyariDevi/AI-Summarizer-Explainer-Extension
    ```
2.  **Open Chrome Extensions**: Open Google Chrome and navigate to `chrome://extensions`.
3.  **Enable Developer Mode**: Turn on the "Developer mode" toggle in the top-right corner.
4.  **Load the Extension**: Click the "Load unpacked" button and select the directory where you cloned or unzipped the repository.
5.  The extension icon will now appear in your Chrome toolbar!

---

## Setup & Configuration

To use the extension, you need a Google Gemini API key.

1.  **Get an API Key**:
    * Go to **[Google AI Studio](https://aistudio.google.com/app/apikey)**.
    * Sign in with your Google account.
    * Click "**Create API key**" and copy the generated key.

2.  **Set the API Key**:
    * The first time you install the extension, an **options page** will open automatically.
    * Paste your copied API key into the input field and click "**Save Settings**".
    * If you need to change the key later, you can right-click the extension icon and select "Options".


---

## How to Use

1.  Navigate to any online article you want to summarize.
2.  Click the **AI Explainer icon** in your Chrome toolbar.
3.  Select your desired summary type from the dropdown menu (e.g., "Brief", "Detailed", "Easy", "ELI5").
4.  Click the "**Summarize**" button.
5.  Wait a few moments for the AI to generate the summary. The result will appear in the popup window.
6.  Click the "**Copy**" button to copy the text to your clipboard.

---

## License

This project is licensed under the **MIT License**.
