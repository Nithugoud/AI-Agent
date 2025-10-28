// Google Sheets Integration
// This file handles sending customer support requests to Google Sheets

/**
 * SETUP INSTRUCTIONS:
 * 
 * 1. Go to Google Sheets and create a new spreadsheet
 * 2. Name it "FinanceAI Customer Support Requests"
 * 3. Create headers in the first row: Name | Email | Question | Timestamp | Conversation History | Status
 * 
 * 4. Set up Google Apps Script:
 *    - In your spreadsheet, click Extensions > Apps Script
 *    - Delete any code in the editor
 *    - Copy and paste the code from the bottom of this file
 *    - Click "Deploy" > "New deployment"
 *    - Choose "Web app"
 *    - Set "Execute as" to "Me"
 *    - Set "Who has access" to "Anyone"
 *    - Click "Deploy"
 *    - Copy the Web App URL
 * 
 * 5. Replace the GOOGLE_SHEETS_URL below with your Web App URL
 */

// Replace this with your Google Apps Script Web App URL
const GOOGLE_SHEETS_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';

/**
 * Submit form data to Google Sheets
 * @param {Object} formData - The form data to submit
 * @returns {Promise<boolean>} - Success status
 */
async function submitToGoogleSheets(formData) {
    // For demo purposes, if URL is not set, simulate success
    if (GOOGLE_SHEETS_URL === 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE') {
        console.log('Demo mode: Data that would be sent to Google Sheets:', formData);
        
        // Store in localStorage as backup
        storeLocally(formData);
        
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        return true;
    }

    try {
        const response = await fetch(GOOGLE_SHEETS_URL, {
            method: 'POST',
            mode: 'no-cors', // Required for Google Apps Script
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        // Note: no-cors mode doesn't allow reading the response
        // We'll assume success if no error was thrown
        console.log('Data sent to Google Sheets successfully');
        
        // Store locally as backup
        storeLocally(formData);
        
        return true;
    } catch (error) {
        console.error('Error sending to Google Sheets:', error);
        
        // Store locally as fallback
        storeLocally(formData);
        
        return false;
    }
}

/**
 * Store data locally as a backup
 * @param {Object} formData - The form data to store
 */
function storeLocally(formData) {
    try {
        let requests = JSON.parse(localStorage.getItem('supportRequests') || '[]');
        requests.push(formData);
        localStorage.setItem('supportRequests', JSON.stringify(requests));
        console.log('Data stored locally as backup');
    } catch (error) {
        console.error('Error storing data locally:', error);
    }
}

/**
 * Get all locally stored requests (for admin/debugging)
 * @returns {Array} - Array of support requests
 */
function getLocalRequests() {
    try {
        return JSON.parse(localStorage.getItem('supportRequests') || '[]');
    } catch (error) {
        console.error('Error retrieving local data:', error);
        return [];
    }
}

/**
 * Clear locally stored requests (for admin/debugging)
 */
function clearLocalRequests() {
    try {
        localStorage.removeItem('supportRequests');
        console.log('Local requests cleared');
    } catch (error) {
        console.error('Error clearing local data:', error);
    }
}

// Make functions available globally
window.googleSheetsAPI = {
    submitToGoogleSheets,
    getLocalRequests,
    clearLocalRequests
};

/**
 * GOOGLE APPS SCRIPT CODE
 * Copy the code below into your Google Apps Script editor:
 * 
 * ============================================
 * 
 * function doPost(e) {
 *   try {
 *     // Get the active spreadsheet
 *     var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 *     
 *     // Parse the incoming data
 *     var data = JSON.parse(e.postData.contents);
 *     
 *     // Format conversation history
 *     var conversationText = '';
 *     if (data.conversationHistory && data.conversationHistory.length > 0) {
 *       conversationText = data.conversationHistory.map(function(msg) {
 *         return msg.role + ': ' + msg.message;
 *       }).join('\n');
 *     }
 *     
 *     // Append data to the sheet
 *     sheet.appendRow([
 *       data.name,
 *       data.email,
 *       data.question,
 *       data.timestamp,
 *       conversationText,
 *       'New' // Status column
 *     ]);
 *     
 *     // Optional: Send email notification
 *     MailApp.sendEmail({
 *       to: 'support@financeai.com', // Change this to your email
 *       subject: 'New Support Request from ' + data.name,
 *       body: 'Name: ' + data.name + '\n' +
 *             'Email: ' + data.email + '\n' +
 *             'Question: ' + data.question + '\n' +
 *             'Timestamp: ' + data.timestamp + '\n\n' +
 *             'Conversation History:\n' + conversationText
 *     });
 *     
 *     return ContentService.createTextOutput(JSON.stringify({
 *       'status': 'success',
 *       'message': 'Data added successfully'
 *     })).setMimeType(ContentService.MimeType.JSON);
 *     
 *   } catch (error) {
 *     return ContentService.createTextOutput(JSON.stringify({
 *       'status': 'error',
 *       'message': error.toString()
 *     })).setMimeType(ContentService.MimeType.JSON);
 *   }
 * }
 * 
 * function doGet(e) {
 *   return ContentService.createTextOutput('Google Sheets Integration is working!');
 * }
 * 
 * ============================================
 * 
 * ALTERNATIVE: Using Google Sheets API directly (more complex but more powerful)
 * 
 * If you prefer to use the Google Sheets API directly instead of Apps Script:
 * 
 * 1. Go to Google Cloud Console (console.cloud.google.com)
 * 2. Create a new project
 * 3. Enable the Google Sheets API
 * 4. Create credentials (API Key or OAuth 2.0)
 * 5. Use the Google Sheets API client library
 * 
 * This method is more complex but gives you more control and better error handling.
 * For a simple implementation, the Apps Script method above is recommended.
 */

/**
 * TESTING YOUR INTEGRATION:
 * 
 * 1. After deploying your Google Apps Script, open the browser console
 * 2. Run: await googleSheetsAPI.submitToGoogleSheets({
 *          name: 'Test User',
 *          email: 'test@example.com',
 *          question: 'This is a test',
 *          timestamp: new Date().toISOString(),
 *          conversationHistory: []
 *        })
 * 3. Check your Google Sheet to see if the data appears
 * 4. If using email notifications, check your inbox
 */

// Alternative method using Google Sheets API v4 (for reference)
/*
async function submitToGoogleSheetsAPI(formData) {
    const API_KEY = 'YOUR_API_KEY';
    const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID';
    const RANGE = 'Sheet1!A:F';
    
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}:append?valueInputOption=USER_ENTERED&key=${API_KEY}`;
    
    const conversationHistory = formData.conversationHistory
        .map(msg => `${msg.role}: ${msg.message}`)
        .join('\n');
    
    const values = [[
        formData.name,
        formData.email,
        formData.question,
        formData.timestamp,
        conversationHistory,
        'New'
    ]];
    
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            values: values
        })
    });
    
    return response.ok;
}
*/
