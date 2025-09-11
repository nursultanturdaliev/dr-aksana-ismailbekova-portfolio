/**
 * Document Management System for Dr. Aksana Ismailbekova's Portfolio
 * This file provides utilities for easily adding and managing documents/files on the website
 */

// Document configuration - Add new files here to automatically display them
const documentConfig = {
    // Research Papers
    researchPapers: [
        {
            title: "Lineage Associations and Informal Politics",
            description: "Latest research on lineage-based political networks and their impact on governance structures in Central Asia.",
            filename: "Lineage_Associations_and_Informal_Politi.pdf",
            type: "PDF",
            category: "research"
        }
        // Add more research papers here following the same format
    ],
    
    // Academic Documents
    academicDocuments: [
        {
            title: "Curriculum Vitae",
            description: "Complete academic CV including detailed publication list, conference presentations, and professional achievements.",
            filename: "CV_final.docx",
            type: "DOCX",
            category: "cv"
        }
        // Add more academic documents here
    ]
    
    // You can add more categories like:
    // presentations: [],
    // reports: [],
    // etc.
};

/**
 * Creates HTML for a file download item
 * @param {Object} doc - Document object with title, description, filename, type
 * @returns {string} HTML string for the document item
 */
function createDocumentHTML(doc) {
    const downloadIcon = `
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
        </svg>
    `;

    return `
        <div class="file-download-item">
            <div class="file-info">
                <h4>"${doc.title}"</h4>
                <p>${doc.description}</p>
                <div class="file-meta">${doc.type} Document</div>
            </div>
            <div class="file-actions">
                <a href="assets/files/${doc.filename}" class="btn-download" download>
                    ${downloadIcon}
                    Download ${doc.type}
                </a>
            </div>
        </div>
    `;
}

/**
 * Creates HTML for a documents section
 * @param {Array} documents - Array of document objects
 * @param {string} sectionTitle - Title for the section
 * @returns {string} HTML string for the documents section
 */
function createDocumentsSection(documents, sectionTitle) {
    if (!documents || documents.length === 0) {
        return '';
    }

    const documentsHTML = documents.map(doc => createDocumentHTML(doc)).join('');
    
    return `
        <div class="publications-section">
            <h3>${sectionTitle}</h3>
            <div class="documents-grid">
                ${documentsHTML}
            </div>
        </div>
    `;
}

/**
 * Automatically generates all document sections based on configuration
 * Call this function after DOM is loaded to populate documents
 */
function initializeDocuments() {
    console.log('Initializing document system...');
    
    // You can extend this to automatically populate sections
    // For now, it just logs the available documents
    console.log('Available research papers:', documentConfig.researchPapers.length);
    console.log('Available academic documents:', documentConfig.academicDocuments.length);
}

/**
 * Helper function to add a new document to the configuration
 * @param {string} category - Category of the document (researchPapers, academicDocuments, etc.)
 * @param {Object} document - Document object
 */
function addDocument(category, document) {
    if (!documentConfig[category]) {
        documentConfig[category] = [];
    }
    
    documentConfig[category].push(document);
    console.log(`Added document "${document.title}" to ${category}`);
}

/**
 * Helper function to get documents by category
 * @param {string} category - Category name
 * @returns {Array} Array of documents in the category
 */
function getDocumentsByCategory(category) {
    return documentConfig[category] || [];
}

/**
 * Utility function to generate download button HTML
 * @param {string} filename - Name of the file
 * @param {string} type - File type (PDF, DOCX, etc.)
 * @param {string} customText - Optional custom button text
 * @returns {string} HTML for download button
 */
function createDownloadButton(filename, type = 'File', customText = null) {
    const buttonText = customText || `Download ${type}`;
    const downloadIcon = `
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
        </svg>
    `;

    return `
        <a href="assets/files/${filename}" class="btn-download" download>
            ${downloadIcon}
            ${buttonText}
        </a>
    `;
}

// Initialize the document system when the DOM is loaded
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', initializeDocuments);
}

// Export functions for use in other scripts (if using modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        documentConfig,
        createDocumentHTML,
        createDocumentsSection,
        addDocument,
        getDocumentsByCategory,
        createDownloadButton,
        initializeDocuments
    };
}

/*
USAGE GUIDE:
=============

To add a new research paper:
1. Add the PDF file to assets/files/
2. Add the document object to documentConfig.researchPapers array:

{
    title: "Your Paper Title",
    description: "Brief description of the paper",
    filename: "your-file-name.pdf",
    type: "PDF",
    category: "research"
}

To add a new academic document:
1. Add the file to assets/files/
2. Add the document object to documentConfig.academicDocuments array:

{
    title: "Document Title",
    description: "Description of the document",
    filename: "your-file-name.docx",
    type: "DOCX",
    category: "academic"
}

For easy HTML generation, you can use:
- createDocumentHTML(documentObject) - generates HTML for a single document
- createDownloadButton(filename, type) - generates just a download button
- createDocumentsSection(documents, title) - generates an entire section

The system is designed to be easily extensible for new file types and categories.
*/
