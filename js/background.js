// Array of colors to cycle through
const colors = [
    'red','blue','green','yellow','orange','purple','pink','brown','black','white','navy blue','sky blue','light green','light yellow','light orange','light purple','light pink','light brown','light black','light white'
];

// Function to check if tab is ready for styling
function isValidTab(tab) {
    return tab.id && tab.url && 
           !tab.url.startsWith('chrome://') && 
           !tab.url.startsWith('chrome-extension://') &&
           tab.status === 'complete';
}

// Function to apply color to a tab
function applyColorToTab(tabId, index) {
    const color = colors[index % colors.length];
    chrome.scripting.executeScript({
        target: { tabId },
        func: (color) => {
            document.body.style.borderTop = `5px solid ${color}`;
            console.log(`Applied color: ${color}`);
        },
        args: [color]
    }).catch((error) => console.error(`Error applying color to tab ${tabId}: ${error.message}`));
}

// Listener for newly created tabs
chrome.tabs.onCreated.addListener((tab) => {
    chrome.tabs.query({}, (tabs) => {
        const index = tabs.length - 1;
        if (isValidTab(tab)) {
            applyColorToTab(tab.id, index);
        }
    });
});

// Listener for tab updates
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && isValidTab(tab)) {
        chrome.tabs.query({}, (tabs) => {
            const index = tabs.findIndex(t => t.id === tabId);
            applyColorToTab(tabId, index);
        });
    }
});

// Listener for activated tabs
chrome.tabs.onActivated.addListener((activeInfo) => {
    chrome.tabs.query({}, (tabs) => {
        tabs.forEach((tab, index) => {
            if (isValidTab(tab)) {
                applyColorToTab(tab.id, index);
            }
        });
    });
});