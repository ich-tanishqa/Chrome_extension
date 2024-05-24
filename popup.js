document.getElementById('scrapeTitle').addEventListener('click', async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: scrapeTitleFromPage,
    }, (results) => {
        if (results && results[0] && results[0].result) {
            document.getElementById('titleDisplay').innerText = results[0].result;
        } else {
            document.getElementById('titleDisplay').innerText = 'Title not found or cannot access this URL.';
        }
    });
});

function scrapeTitleFromPage() {
    return document.title;
}
