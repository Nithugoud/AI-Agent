# 🚀 Quick Setup Guide - FinanceAI Chatbot

## ⏱️ 10-Minute Setup

Follow these steps to get your AI chatbot running:

---

## 📋 Step 1: Verify Files (1 minute)

Make sure you have all these files in your project folder:
```
new project 1/
├── index.html          ✓ Main webpage
├── styles.css          ✓ Styling
├── chatbot.js          ✓ Chatbot logic
├── knowledgeBase.js    ✓ AI responses
├── googleSheets.js     ✓ Integration
├── README.md           ✓ Documentation
└── SETUP_GUIDE.md      ✓ This file
```

---

## 🌐 Step 2: Test Locally (2 minutes)

### Option A: Simple (Double-click)
1. Find `index.html` in your folder
2. Double-click to open in browser
3. Done! ✨

### Option B: Local Server (Better for testing)
**Windows PowerShell:**
```powershell
cd "C:\Users\ABHINAY\new project 1"
python -m http.server 8000
```
Then open: http://localhost:8000

**If Python is not installed:**
- Just use Option A (double-click index.html)
- Or install Python from python.org

---

## 💬 Step 3: Test the Chatbot (2 minutes)

1. **Click the blue chat button** (bottom-right corner)
2. **Try these test questions:**
   - "How do I open an account?"
   - "What are your fees?"
   - "Is my money safe?"
   - "How do I transfer money?"

3. **Test the human handoff:**
   - Type: "I want to talk to a human agent"
   - Fill out the form (use fake data for testing)
   - Click Submit

**Note:** Without Google Sheets setup, data is stored locally in browser storage.

---

## 📊 Step 4: Google Sheets Integration (5 minutes)

### Create Your Spreadsheet

1. **Go to Google Sheets:** https://sheets.google.com
2. **Click "Blank"** to create new spreadsheet
3. **Name it:** "FinanceAI Support Requests"
4. **Add headers in Row 1:**
   ```
   A1: Name
   B1: Email
   C1: Question
   D1: Timestamp
   E1: Conversation History
   F1: Status
   ```

### Set Up Apps Script

1. **In your Google Sheet, click:** Extensions → Apps Script
2. **Delete** any existing code
3. **Copy & paste this code:**

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    var conversationText = '';
    if (data.conversationHistory && data.conversationHistory.length > 0) {
      conversationText = data.conversationHistory.map(function(msg) {
        return msg.role + ': ' + msg.message;
      }).join('\n');
    }
    
    sheet.appendRow([
      data.name,
      data.email,
      data.question,
      data.timestamp,
      conversationText,
      'New'
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'success'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput('Integration active!');
}
```

4. **Click the Save icon** (💾)
5. **Name your project:** "FinanceAI Integration"

### Deploy the Script

1. **Click:** Deploy → New deployment
2. **Click the gear icon** (⚙️) next to "Select type"
3. **Choose:** Web app
4. **Settings:**
   - Execute as: **Me (your email)**
   - Who has access: **Anyone**
5. **Click:** Deploy
6. **Authorize:** Grant permissions when prompted
7. **Copy the Web App URL** (looks like: `https://script.google.com/macros/s/ABC123...`)

### Connect to Your Website

1. **Open:** `googleSheets.js` in your text editor
2. **Find line 24:**
   ```javascript
   const GOOGLE_SHEETS_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
   ```
3. **Replace with your URL:**
   ```javascript
   const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/YOUR_ACTUAL_URL/exec';
   ```
4. **Save the file**

### Test the Integration

1. **Refresh your website** in browser
2. **Open chatbot**
3. **Type:** "Talk to a human"
4. **Fill the form:**
   - Name: Test User
   - Email: test@example.com
   - Question: Testing the integration
5. **Click Submit**
6. **Check your Google Sheet** - new row should appear! ✅

---

## ✅ Verification Checklist

Before your demo, verify:

- [ ] Website loads without errors
- [ ] Chatbot button appears in bottom-right
- [ ] Chatbot opens when clicked
- [ ] Chatbot responds to questions
- [ ] Quick action buttons work
- [ ] Human handoff form opens
- [ ] Form submits successfully
- [ ] Data appears in Google Sheet
- [ ] Website looks good on mobile
- [ ] All animations work smoothly

---

## 🎨 Quick Customization (Optional)

### Change Colors
Edit `styles.css` line 10-11:
```css
--primary-color: #4F46E5;  /* Your brand color */
--secondary-color: #10B981; /* Accent color */
```

### Change Company Name
Edit `index.html`:
- Line 28: `<span>FinanceAI</span>` → `<span>YourCompany</span>`
- Line 110: `<h3>FinanceAI Assistant</h3>` → `<h3>YourCompany Assistant</h3>`

---

## 🎬 Demo Presentation Tips

### 1. Opening (30 seconds)
"I built an AI-powered customer support chatbot for a fintech company. It answers questions from a knowledge base and seamlessly hands off to human agents when needed."

### 2. Main Demo (2 minutes)
1. **Show the website** - "Here's the fintech company website"
2. **Open chatbot** - "Customers can ask questions anytime"
3. **Ask questions** - Show 2-3 different types of questions
4. **Human handoff** - "When AI can't help, users can request human support"
5. **Google Sheets** - Show the form submission and Sheet update

### 3. Technical Details (1 minute)
"The knowledge base contains 50+ responses across 10 categories. The chatbot uses keyword matching and pattern recognition. The human handoff form integrates with Google Sheets via Apps Script, capturing the full conversation history for context."

### 4. Future Improvements (30 seconds)
"Next steps would include OpenAI integration for more dynamic responses, sentiment analysis to detect frustrated users, and CRM integration like Salesforce or Zendesk."

### 5. Questions
Be ready to discuss:
- Why this architecture?
- How does response matching work?
- What about scaling?
- How would you add AI/ML?

---

## 🐛 Common Issues & Fixes

### Issue: Chatbot button doesn't appear
**Fix:** Check browser console (F12) for errors. Ensure all JS files are loaded.

### Issue: Questions don't get responses
**Fix:** Check `knowledgeBase.js` is loaded. Try exact questions from knowledge base.

### Issue: Google Sheets not updating
**Fix:** 
1. Verify URL in `googleSheets.js` is correct
2. Check Apps Script deployment is set to "Anyone"
3. Test the Apps Script URL directly in browser
4. Check Apps Script execution logs

### Issue: Form doesn't submit
**Fix:** Open browser console, look for errors. Data is still saved locally.

### Issue: Website looks broken on mobile
**Fix:** Clear browser cache (Ctrl+Shift+Delete), hard refresh (Ctrl+F5)

---

## 📱 Test on Mobile

1. **Find your computer's IP address:**
   ```powershell
   ipconfig
   ```
   Look for "IPv4 Address" (e.g., 192.168.1.100)

2. **Start local server** (if not already running)

3. **On your phone:** Open browser and go to:
   ```
   http://YOUR_IP:8000
   ```
   (e.g., http://192.168.1.100:8000)

4. **Test the chatbot** on mobile!

---

## 🎉 You're Ready!

Your AI chatbot is now:
- ✅ Fully functional
- ✅ Connected to Google Sheets
- ✅ Demo-ready
- ✅ Mobile-responsive

### Final Testing Script:
1. Open website ✓
2. Click chatbot ✓
3. Ask: "How do I open an account?" ✓
4. Ask: "What are your fees?" ✓
5. Type: "Talk to a human" ✓
6. Submit form ✓
7. Check Google Sheet ✓

---

## 📞 Need Help?

1. **Check the README.md** for detailed documentation
2. **Look at code comments** - they explain everything
3. **Browser console** (F12) shows errors
4. **Test step-by-step** - don't skip verification

---

## 🌟 Bonus Points

Want to impress even more?

### Add Email Notifications (2 minutes)
In your Apps Script (after line 12), add:
```javascript
MailApp.sendEmail({
  to: 'your-email@example.com',
  subject: 'New Support Request from ' + data.name,
  body: 'Email: ' + data.email + '\nQuestion: ' + data.question
});
```

### Add More Knowledge Base Content (5 minutes)
Edit `knowledgeBase.js` and add your own Q&A pairs!

### Deploy to GitHub Pages (5 minutes)
1. Create GitHub account
2. Create new repository
3. Upload all files
4. Enable GitHub Pages
5. Share the live URL!

---

**You've got this! 🚀 Good luck with your internship application!**
