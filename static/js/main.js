/**
 * Gmail Unsubscribe - Main Entry Point
 * Initializes the application and loads all modules
 */

// Global state
window.GmailCleaner = {
    results: [],
    deleteResults: [],
    scanning: false,
    deleteScanning: false,
    currentView: 'login'
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    GmailCleaner.Auth.checkStatus();
    GmailCleaner.Auth.checkWebAuthMode();
    GmailCleaner.UI.setupNavigation();
    GmailCleaner.Filters.setup();
    initializeTheme();
    initializeAnimations();
});

function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.classList.toggle('light', savedTheme === 'light');
    updateThemeToggleLabel();
}

function toggleTheme() {
    document.body.classList.toggle('light');
    const theme = document.body.classList.contains('light') ? 'light' : 'dark';
    localStorage.setItem('theme', theme);
    updateThemeToggleLabel();
}

function updateThemeToggleLabel() {
    const toggle = document.querySelector('.theme-toggle');
    if (!toggle) return;
    toggle.textContent = document.body.classList.contains('light') ? 'Light' : 'Dark';
}

function initializeAnimations() {
    if (GmailCleaner.UI && typeof GmailCleaner.UI.animateCards === 'function') {
        GmailCleaner.UI.animateCards();
    }
}
