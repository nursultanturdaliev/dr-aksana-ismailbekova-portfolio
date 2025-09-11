# Adding New Files to the Portfolio Website

This guide explains how to easily add new documents, research papers, and other files to Dr. Aksana Ismailbekova's portfolio website.

## Quick Start

### Adding a New Research Paper

1. **Upload the file**: Place your PDF file in the `assets/files/` directory
2. **Update the publications section**: Edit `index.html` and add a new file download item to the "Recent Research Papers" section

Example code to add:
```html
<div class="file-download-item">
    <div class="file-info">
        <h4>"Your Paper Title"</h4>
        <p>Brief description of your research paper and its key findings.</p>
        <div class="file-meta">PDF Document</div>
    </div>
    <div class="file-actions">
        <a href="assets/files/your-file-name.pdf" class="btn-download" download>
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
            </svg>
            Download PDF
        </a>
    </div>
</div>
```

### Adding a New CV or Academic Document

1. **Upload the file**: Place your file in the `assets/files/` directory
2. **Update the Academic Documents section**: Add a new file download item to the "Academic Documents" section in `index.html`

### Adding a New File Type or Category

You can create new sections by copying the existing section structure:

```html
<div class="publications-section">
    <h3>Your New Section Title</h3>
    <div class="documents-grid">
        <!-- Add your file-download-items here -->
    </div>
</div>
```

## File Structure

```
assets/
├── files/
│   ├── CV_final.docx                                    # Current CV
│   ├── Lineage_Associations_and_Informal_Politi.pdf    # Research paper
│   └── your-new-file.pdf                               # Your new files go here
├── css/
│   └── styles.css                                       # Contains styling for download buttons
└── js/
    ├── script.js                                        # Main JavaScript functionality
    └── documents.js                                     # Document management utilities
```

## Supported File Types

The website supports download buttons for any file type, but the most common are:
- **PDF** - Research papers, articles, presentations
- **DOCX** - CV, reports, documents  
- **PPTX** - Presentation slides
- **ZIP** - Multiple files or datasets

## Styling Guidelines

All download buttons and file items use consistent styling:
- **Download buttons**: Green background (`btn-download` class)
- **File items**: White background with blue left border
- **Icons**: Consistent download icon from Bootstrap Icons
- **Responsive**: Adapts to mobile screens automatically

## Advanced Usage

### Using the Document Management System

The `assets/js/documents.js` file provides utilities for managing documents programmatically. You can:

1. **Add documents to the configuration**:
```javascript
addDocument('researchPapers', {
    title: "Your Paper Title",
    description: "Paper description",
    filename: "your-file.pdf",
    type: "PDF",
    category: "research"
});
```

2. **Generate HTML automatically**:
```javascript
const documentHTML = createDocumentHTML(documentObject);
```

3. **Create download buttons**:
```javascript
const downloadButton = createDownloadButton('filename.pdf', 'PDF');
```

## Best Practices

1. **File Naming**: Use descriptive filenames without spaces (use underscores or hyphens)
2. **File Size**: Keep files under 10MB for web performance
3. **Descriptions**: Write clear, concise descriptions for each document
4. **Organization**: Group related documents in the same section
5. **Mobile-Friendly**: Test that download buttons work on mobile devices

## Updating the CV

To update the CV:
1. Replace `assets/files/CV_final.docx` with your new CV file
2. The download links will automatically use the updated file
3. Consider updating the CV page (`cv.html`) if major changes were made

## Testing

After adding new files:
1. **Check file paths**: Ensure the file path in the HTML matches the actual file location
2. **Test downloads**: Click download buttons to verify they work
3. **Mobile testing**: Check the layout on mobile devices
4. **File permissions**: Ensure files are readable by the web server

## Troubleshooting

**Download not working?**
- Check that the file path is correct in the HTML
- Ensure the file exists in the `assets/files/` directory
- Check file permissions

**Layout issues?**
- Verify you're using the correct HTML structure
- Check that you've included all required CSS classes
- Test on different screen sizes

**File not displaying?**
- Clear browser cache
- Check browser developer tools for errors
- Ensure HTML is properly formatted

---

For technical support or questions about the website structure, refer to the main documentation or contact the web developer.
