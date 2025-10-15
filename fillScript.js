document.getElementById('fillButton').addEventListener('click', () => {
    // 1. Dapatkan informasi tab yang sedang aktif
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      // 2. Eksekusi script 'filler.js' pada tab tersebut
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        files: ['filler.js']
      });
    });
  });