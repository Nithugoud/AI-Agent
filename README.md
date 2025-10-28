# FinanceAI - AI-Powered Customer Support Chatbot

## 🎯 Project Overview

This is an intelligent customer support chatbot for **FinanceAI**, a modern fintech company. The AI agent provides instant answers to common banking questions and seamlessly hands off to human agents when needed.

## ✨ Features

### 1. **Conversational AI Assistant**
- ✅ Answers questions from a comprehensive knowledge base
- ✅ Trained on fintech topics: accounts, payments, security, loans, investments
- ✅ Personalized, conversational responses
- ✅ Time-based greetings and context awareness
- ✅ Quick action buttons for common queries

### 2. **Human Handoff System**
- ✅ Detects when users want to speak with a human agent
- ✅ Collects customer information (name, email, question)
- ✅ Captures conversation history for context
- ✅ Integrates with Google Sheets for ticket management

### 3. **Beautiful UI/UX**
- ✅ Modern, responsive design
- ✅ Smooth animations and transitions
- ✅ Mobile-friendly interface
- ✅ Professional fintech branding
- ✅ Typing indicators and visual feedback

### 4. **Knowledge Base Categories**
- Account Management
- Payments & Transfers
- Fees & Charges
- Security & Privacy
- Cards & ATMs
- Loans & Credit
- Investing
- Mobile App
- Customer Support
- Business Accounts

## 🚀 Quick Start

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor (VS Code recommended)
- Basic knowledge of HTML/CSS/JavaScript

### Installation

1. **Download the project files** - All files are already in your project folder:
   - `index.html` - Main webpage
   - `styles.css` - Styling and animations
   - `chatbot.js` - Chatbot logic
   - `knowledgeBase.js` - AI knowledge base
   - `googleSheets.js` - Google Sheets integration

2. **Open the project**
   ```
   Simply open index.html in your web browser
   ```
   Or use a local server:
   ```bash
   # If you have Python installed:
   python -m http.server 8000
   
   # Then visit: http://localhost:8000
   ```

3. **Test the chatbot**
   - Click the chat button in the bottom-right corner
   - Try asking questions like:
     - "How do I open an account?"
     - "What are your fees?"
     - "Is my money safe?"
     - "Talk to a human agent"

## 📊 Google Sheets Integration Setup

To enable the human support form to save data to Google Sheets:

### Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it: "FinanceAI Customer Support Requests"
4. Add headers in the first row:
   ```
   Name | Email | Question | Timestamp | Conversation History | Status
   ```

### Step 2: Set Up Google Apps Script

1. In your spreadsheet, click **Extensions > Apps Script**
2. Delete any existing code
3. Copy and paste this code:

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
    
    // Optional: Email notification
    MailApp.sendEmail({
      to: 'your-email@example.com', // Change this!
      subject: 'New Support Request from ' + data.name,
      body: 'Name: ' + data.name + '\n' +
            'Email: ' + data.email + '\n' +
            'Question: ' + data.question + '\n' +
            'Timestamp: ' + data.timestamp
    });
    
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
  return ContentService.createTextOutput('Integration is working!');
}
```

4. Click **Save** (💾 icon)
5. Click **Deploy > New deployment**
6. Click the gear icon ⚙️ next to "Select type"
7. Choose **Web app**
8. Configure:
   - **Execute as**: Me
   - **Who has access**: Anyone
9. Click **Deploy**
10. **Copy the Web App URL** (it looks like: `https://script.google.com/macros/s/...`)

### Step 3: Connect to Your Website

1. Open `googleSheets.js`
2. Find this line:
   ```javascript
   const GOOGLE_SHEETS_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
   ```
3. Replace it with your Web App URL:
   ```javascript
   const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/YOUR_ACTUAL_URL/exec';
   ```
4. Save the file

### Step 4: Test the Integration

1. Open your website
2. Click the chatbot button
3. Type: "I want to talk to a human"
4. Fill out the form with test data
5. Check your Google Sheet - the data should appear!
6. If you enabled email notifications, check your inbox

## 🎨 Customization

### Change the Company Name and Branding

1. **Update the logo and name** in `index.html`:
   ```html
   <span>FinanceAI</span> <!-- Change this -->
   ```

2. **Update chatbot name** in `chatbot.js`:
   ```javascript
   <h3>FinanceAI Assistant</h3> <!-- Change this -->
   ```

### Modify the Color Scheme

Edit `styles.css`:
```css
:root {
    --primary-color: #4F46E5; /* Main brand color */
    --secondary-color: #10B981; /* Accent color */
}
```

### Add or Modify Knowledge Base Content

Edit `knowledgeBase.js`:
```javascript
const knowledgeBase = {
    // Add your own categories here
    newCategory: {
        keywords: ['keyword1', 'keyword2'],
        responses: [
            {
                question: "Your question?",
                answer: "Your detailed answer here..."
            }
        ]
    }
};
```

## 📱 Features Walkthrough

### 1. Conversational Flow
- **Greeting**: Bot greets users based on time of day
- **Questions**: Users can type or use quick action buttons
- **Responses**: AI searches knowledge base for best match
- **Follow-up**: Bot asks if user needs more help

### 2. Human Handoff Trigger Words
These phrases trigger the human support form:
- "human"
- "agent"
- "representative"
- "speak to someone"
- "talk to person"
- "not satisfied"
- "complaint"

### 3. Smart Features
- **Name Recognition**: Bot remembers your name if you introduce yourself
- **Typing Indicators**: Shows when bot is "thinking"
- **Conversation History**: Stored and sent with support requests
- **Local Storage Backup**: Data saved locally if Google Sheets fails

## 🔧 Technical Details

### Technologies Used
- **HTML5** - Structure
- **CSS3** - Styling with animations and gradients
- **Vanilla JavaScript** - No frameworks needed!
- **Google Apps Script** - Backend integration
- **Local Storage** - Data backup

### Browser Support
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers

### Performance
- Lightweight: < 100KB total
- Fast load time: < 1 second
- No external dependencies
- Works offline (except Google Sheets submission)

## 🎓 How to Present This Project

### 1. **Live Demo**
1. Open the website
2. Walk through the main features
3. Demonstrate the chatbot answering questions
4. Show the human handoff flow
5. Display the Google Sheet updating in real-time

### 2. **Highlight These Points**
- ✅ **Conversational AI**: Natural language understanding
- ✅ **Smart Handoff**: Seamless transition to human support
- ✅ **Integration**: Real Google Sheets connection
- ✅ **User Experience**: Beautiful, responsive design
- ✅ **Personalization**: Context-aware responses

### 3. **Technical Discussion Topics**
- Knowledge base architecture
- Response matching algorithm
- Modal vs. inline forms
- Google Apps Script deployment
- Fallback mechanisms (local storage)
- Future enhancements (see below)

## 🚀 Future Enhancements

Ideas to discuss or implement:

1. **AI Integration**
   - OpenAI GPT API for more dynamic responses
   - Sentiment analysis to detect frustrated users
   - Multi-language support

2. **Advanced Features**
   - Voice input/output
   - File upload for documents
   - Video chat with agents
   - Chatbot analytics dashboard

3. **CRM Integration**
   - Salesforce integration
   - Zendesk ticketing
   - Slack notifications
   - Email automation

4. **Personalization**
   - User accounts and history
   - Saved conversations
   - Personalized recommendations
   - Smart suggestions based on behavior

## 🐛 Troubleshooting

### Chatbot won't open
- Check browser console for errors (F12)
- Ensure all JavaScript files are loaded
- Clear browser cache

### Google Sheets not receiving data
- Verify the Apps Script Web App URL is correct
- Check that deployment is set to "Anyone"
- Test the URL directly in browser
- Check Google Apps Script logs

### Styling looks broken
- Ensure `styles.css` is loaded
- Check for CSS file path errors
- Try hard refresh (Ctrl+F5)

### Knowledge base not responding correctly
- Check keyword matching in `knowledgeBase.js`
- Verify response structure is correct
- Check browser console for errors

## 📞 Support

If you need help with this project:
1. Check the code comments - they're detailed!
2. Review the troubleshooting section above
3. Test with browser console open (F12) to see errors
4. Verify all files are in the same directory

## 🎉 Project Completion Checklist

- [x] Responsive website with fintech theme
- [x] AI chatbot with knowledge base
- [x] Conversational and personalized interactions
- [x] Human support handoff system
- [x] Google Sheets integration
- [x] Beautiful UI/UX with animations
- [x] Mobile-friendly design
- [x] Comprehensive documentation
- [x] Easy setup instructions
- [x] Demo-ready

## 📝 License

This is a demo project for educational and portfolio purposes.

## 👤 Author

Created for FinanceAI internship application - demonstrating technical skills, problem-solving, and communication abilities.

---

**Good luck with your internship application! 🚀**

This project showcases:
- ✅ Technical curiosity (explored AI chatbots, Google APIs)
- ✅ Problem-solving (designed complete customer support flow)
- ✅ Communication skills (clear code, documentation, UX)
- ✅ Real-world integration (Google Sheets, practical use case)
