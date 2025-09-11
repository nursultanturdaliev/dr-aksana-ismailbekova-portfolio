# 📁 How to Add New Files to Your Portfolio Website

**A Simple Guide for Non-Technical Users**

This guide will help you add new documents, research papers, and other files to Dr. Aksana Ismailbekova's portfolio website without needing any technical knowledge.

---

## 🚀 Two Easy Ways to Add Files

### Method 1: The Simple Way (Recommended for Beginners)

**Step 1: Prepare Your File**
- Make sure your file has a simple name without spaces (use dashes or underscores instead)
- Examples: `my-research-paper.pdf` or `new_CV_2024.docx`

**Step 2: Put Your File in the Right Place**
- Open the website folder on your computer
- Find the folder called `assets`, then `files`
- Copy your document into this `files` folder

**Step 3: Get the Code You Need**
- Copy one of the HTML templates below based on your file type
- Replace the parts marked in CAPITAL LETTERS with your specific information
- The complete code is ready to paste into your website

**Step 4: Add the Code to Your Website**
- Open the file called `index.html`
- Find the section where you want your file to appear (like "Recent Research Papers" or "Academic Documents")
- Paste the HTML code template with your information filled in

### Method 2: The Template Way

Use the ready-made templates provided in this guide (scroll down to see them)

---

## 🛠️ Ready-to-Use HTML Code Templates

**Copy these templates and replace the CAPITAL LETTER parts with your information:**

## 📋 Simple Templates (Copy & Paste)

### Template 1: Research Paper or Article (PDF)
**Use this when adding a PDF research paper**

```html
<div class="file-download-item">
    <div class="file-info">
        <h4>"YOUR_PAPER_TITLE_HERE"</h4>
        <p>YOUR_DESCRIPTION_HERE</p>
        <div class="file-meta">PDF Document</div>
    </div>
    <div class="file-actions">
        <a href="assets/files/YOUR_FILE_NAME.pdf" class="btn-download" download>
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
            </svg>
            Download PDF
        </a>
    </div>
</div>
```

**Replace these parts:**
- `YOUR_PAPER_TITLE_HERE` → the title you want to show (keep the quotation marks if it's a paper title)
- `YOUR_DESCRIPTION_HERE` → a short description of your paper
- `YOUR_FILE_NAME.pdf` → your actual PDF filename

### Template 2: CV or Resume (Word Document)
**Use this when adding a new CV or resume**

```html
<div class="file-download-item">
    <div class="file-info">
        <h4>Curriculum Vitae</h4>
        <p>YOUR_CV_DESCRIPTION_HERE</p>
        <div class="file-meta">DOCX Document</div>
    </div>
    <div class="file-actions">
        <a href="assets/files/YOUR_CV_FILE_NAME.docx" class="btn-download" download>
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
            </svg>
            Download DOCX
        </a>
    </div>
</div>
```

**Replace these parts:**
- `YOUR_CV_DESCRIPTION_HERE` → description of your CV (e.g., "Updated academic CV with latest publications and achievements")
- `YOUR_CV_FILE_NAME.docx` → your CV filename

### Template 3: Presentation or Other Documents
**Use this for PowerPoint files, reports, or other documents**

```html
<div class="file-download-item">
    <div class="file-info">
        <h4>YOUR_DOCUMENT_TITLE_HERE</h4>
        <p>YOUR_DESCRIPTION_HERE</p>
        <div class="file-meta">YOUR_FILE_TYPE Document</div>
    </div>
    <div class="file-actions">
        <a href="assets/files/YOUR_FILE_NAME.YOUR_EXTENSION" class="btn-download" download>
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
            </svg>
            Download YOUR_FILE_TYPE
        </a>
    </div>
</div>
```

**Replace these parts:**
- `YOUR_DOCUMENT_TITLE_HERE` → the title of your document
- `YOUR_DESCRIPTION_HERE` → a short description 
- `YOUR_FILE_TYPE` → file type (e.g., PPTX, XLSX, ZIP, DOC)
- `YOUR_FILE_NAME.YOUR_EXTENSION` → complete filename with extension

**Common file types:**
- PowerPoint: `.pptx` (use "PPTX" for file type)
- Excel: `.xlsx` (use "XLSX" for file type)  
- ZIP archive: `.zip` (use "ZIP" for file type)
- Word document: `.docx` (use "DOCX" for file type)

---

## 📁 What Files Can You Add?

Your website can display download buttons for any type of file:
- **📄 PDF files** - Research papers, articles, presentations
- **📝 Word documents** - CV, reports, letters
- **📊 PowerPoint** - Presentation slides
- **📦 ZIP files** - Multiple files bundled together
- **And many more!**

## 🎨 How Your Files Will Look

All files you add will automatically have:
- ✅ A nice green download button
- ✅ Professional styling that matches your website
- ✅ Works perfectly on phones and tablets
- ✅ Clear file information for visitors

## 📍 Where to Add Different Types of Files

### Research Papers & Articles
**Add these to the "Recent Research Papers" section**
- Look for the heading "Recent Research Papers" in your `index.html` file
- Add your new paper right after the existing ones

### CV & Academic Documents
**Add these to the "Academic Documents" section**
- Find the "Academic Documents" heading
- Usually best to replace the existing CV rather than add multiple versions

### Creating New Categories
**Want to add a new type of document section?**
- You can create sections like "Conference Presentations", "Reports", "Teaching Materials", etc.
- Use the HTML templates above and wrap them in a new section with a heading

---

## ✅ Important Tips

### File Naming Rules (Very Important!)
- ❌ Don't use: `My Research Paper (Final Version).pdf`  
- ✅ Do use: `my-research-paper-2024.pdf`
- No spaces, special characters, or parentheses
- Use dashes (-) or underscores (_) instead

### File Size Guidelines
- Keep files under 10 MB for fast website loading
- If your file is larger, consider compressing it or splitting it

### Writing Good Descriptions
- Write 1-2 sentences that explain what the document is about
- Think about what visitors would want to know before downloading
- Example: "This study examines the role of kinship networks in contemporary Kyrgyz politics and governance structures."

---

## 🔄 Updating Your CV

**This is the most common task!**

**Easy Method:**
1. Name your new CV file exactly the same as the old one: `CV_final.docx`
2. Replace the old file in the `assets/files/` folder
3. Your website will automatically use the new version!

**If you want to keep the old CV:**
1. Use a different filename like `CV_2024.docx`
2. Add it as a new document using the methods above

---

## 🧪 How to Test Your Changes

**After adding new files, always check:**

1. **Can you download the file?**
   - Click the download button on your website
   - Make sure the file opens correctly

2. **Does it look good on your phone?**
   - Open your website on your mobile device
   - Check that everything displays properly

3. **Is the description clear?**
   - Ask yourself: would a visitor understand what this file contains?

---

## 🆘 Common Problems & Solutions

### "My download button doesn't work!"
- **Check:** Is your file name exactly the same in the website code and in the files folder?
- **Check:** Did you put the file in the right folder? (`assets/files/`)
- **Try:** Refresh your web browser

### "The layout looks strange!"
- **Try:** Clear your browser's cache (Ctrl+F5 or Cmd+Shift+R)
- **Check:** Did you copy the code exactly as shown?

### "I can't find where to add my file!"
- Look for sections with headings like "Recent Research Papers" or "Academic Documents"
- Use Ctrl+F (or Cmd+F) to search for "documents-grid" in the `index.html` file

---

## 💡 Quick Summary

**Here's everything you need to remember:**

1. **Put your file** in the `assets/files/` folder
2. **Copy an HTML template** from this guide and replace the placeholder text with your information
3. **Paste the completed code** into your `index.html` file in the right section
4. **Test your download button** to make sure it works

**That's it! No technical knowledge required.** 🎉

---

## 📞 Need Help?

If you're still having trouble:
1. Double-check that you followed each step exactly
2. Make sure you replaced ALL placeholder text in the HTML template
3. Make sure your file name doesn't have any spaces or special characters
4. Contact your web developer for technical assistance

**Remember:** This process is designed to be simple - if something seems too complicated, you might be overthinking it!
