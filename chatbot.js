// Main Chatbot Logic
let conversationHistory = [];
let userName = '';

// DOM Elements
const chatbotButton = document.getElementById('chatbot-button');
const chatbotWindow = document.getElementById('chatbot-window');
const closeChatbot = document.getElementById('close-chatbot');
const chatbotMessages = document.getElementById('chatbot-messages');
const chatbotInput = document.getElementById('chatbot-input');
const sendButton = document.getElementById('send-button');
const quickActionButtons = document.querySelectorAll('.quick-action-btn');
const humanSupportModal = document.getElementById('human-support-modal');

// Initialize chatbot
function initChatbot() {
    // Add welcome message
    setTimeout(() => {
        addBotMessage(getGreeting());
        addBotMessage("I can help you with account opening, payments, security, loans, investments, and more. What would you like to know?");
    }, 500);

    // Event listeners
    chatbotButton.addEventListener('click', openChatbot);
    closeChatbot.addEventListener('click', closeChatWindow);
    sendButton.addEventListener('click', handleSendMessage);
    chatbotInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    });

    // Quick action buttons
    quickActionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const question = button.getAttribute('data-question');
            handleUserMessage(question);
        });
    });

    // Modal close buttons
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', closeModal);
    });

    // Close modal on outside click
    humanSupportModal.addEventListener('click', (e) => {
        if (e.target === humanSupportModal) {
            closeModal();
        }
    });
}

// Open chatbot window
function openChatbot() {
    chatbotWindow.classList.add('active');
    chatbotButton.style.display = 'none';
    chatbotInput.focus();
    
    // Remove notification badge
    const badge = document.querySelector('.chatbot-badge');
    if (badge) {
        badge.style.display = 'none';
    }
}

// Close chatbot window
function closeChatWindow() {
    chatbotWindow.classList.remove('active');
    chatbotButton.style.display = 'flex';
}

// Handle sending messages
function handleSendMessage() {
    const message = chatbotInput.value.trim();
    if (message) {
        handleUserMessage(message);
        chatbotInput.value = '';
    }
}

// Handle user message
function handleUserMessage(message) {
    // Add user message to chat
    addUserMessage(message);
    
    // Store in conversation history
    conversationHistory.push({
        role: 'user',
        message: message,
        timestamp: new Date()
    });

    // Check for name introduction
    const nameMatch = message.match(/(?:my name is|i'm|i am|call me)\s+(\w+)/i);
    if (nameMatch) {
        userName = nameMatch[1];
        addBotMessage(`Nice to meet you, ${userName}! 😊 How can I assist you today?`);
        return;
    }

    // Check if user wants human support
    if (isRequestingHumanSupport(message)) {
        addBotMessage("I understand you'd like to speak with a human agent. Let me connect you with our support team!");
        setTimeout(() => {
            openHumanSupportModal();
        }, 800);
        return;
    }

    // Show typing indicator
    showTypingIndicator();

    // Simulate AI thinking time
    setTimeout(() => {
        removeTypingIndicator();
        
        // Get response from knowledge base
        const response = findBestResponse(message);
        
        if (response) {
            addBotMessage(response.answer);
            
            // Store in conversation history
            conversationHistory.push({
                role: 'bot',
                message: response.answer,
                timestamp: new Date()
            });

            // Add helpful follow-up
            setTimeout(() => {
                addBotMessage("Is there anything else I can help you with?");
            }, 1000);
        } else {
            const fallback = getFallbackResponse();
            addBotMessage(fallback.answer);
        }
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
}

// Check if user is requesting human support
function isRequestingHumanSupport(message) {
    const humanKeywords = [
        'human', 'agent', 'representative', 'speak to someone',
        'talk to person', 'customer service', 'help me', 'support team',
        'real person', 'not satisfied', 'unhappy', 'complaint'
    ];
    
    const lowerMessage = message.toLowerCase();
    return humanKeywords.some(keyword => lowerMessage.includes(keyword));
}

// Add user message to chat
function addUserMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message user-message';
    messageDiv.innerHTML = `
        <div class="message-content">${escapeHtml(message)}</div>
    `;
    chatbotMessages.appendChild(messageDiv);
    scrollToBottom();
}

// Add bot message to chat
function addBotMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message bot-message';
    
    // Convert markdown-style formatting to HTML
    const formattedMessage = formatMessage(message);
    
    messageDiv.innerHTML = `
        <div class="message-avatar">🤖</div>
        <div class="message-content">${formattedMessage}</div>
    `;
    chatbotMessages.appendChild(messageDiv);
    scrollToBottom();
}

// Format message with markdown-style formatting
function formatMessage(message) {
    let formatted = escapeHtml(message);
    
    // Bold text (**text**)
    formatted = formatted.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    
    // Bullet points
    formatted = formatted.replace(/^• /gm, '<br>• ');
    
    // Line breaks
    formatted = formatted.replace(/\n/g, '<br>');
    
    return formatted;
}

// Show typing indicator
function showTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot-message typing-indicator-message';
    typingDiv.id = 'typing-indicator';
    typingDiv.innerHTML = `
        <div class="message-avatar">🤖</div>
        <div class="message-content typing-indicator">
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
        </div>
    `;
    chatbotMessages.appendChild(typingDiv);
    scrollToBottom();
}

// Remove typing indicator
function removeTypingIndicator() {
    const typingIndicator = document.getElementById('typing-indicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

// Scroll to bottom of chat
function scrollToBottom() {
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Open human support modal
function openHumanSupportModal() {
    humanSupportModal.classList.add('active');
    closeChatWindow();
}

// Close modal
function closeModal() {
    humanSupportModal.classList.remove('active');
    
    // Show success message in chat if form was submitted
    const successMsg = document.querySelector('.success-message');
    if (successMsg && successMsg.classList.contains('show')) {
        setTimeout(() => {
            openChatbot();
            addBotMessage("Thank you! Your request has been submitted. A team member will reach out to you within 24 hours via email. Is there anything else I can help you with in the meantime?");
        }, 300);
    }
}

// Handle form submission (will be connected to Google Sheets)
const supportForm = document.getElementById('support-form');
if (supportForm) {
    supportForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('user-name').value,
            email: document.getElementById('user-email').value,
            question: document.getElementById('user-question').value,
            timestamp: new Date().toISOString(),
            conversationHistory: conversationHistory
        };

        // Show loading state
        const submitBtn = supportForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Submitting...';
        submitBtn.disabled = true;

        try {
            // Send to Google Sheets
            const success = await submitToGoogleSheets(formData);
            
            if (success) {
                // Show success message
                showSuccessMessage();
                
                // Reset form
                supportForm.reset();
                
                // Close modal after delay
                setTimeout(() => {
                    closeModal();
                }, 2000);
            } else {
                alert('There was an error submitting your request. Please try again or email us at support@financeai.com');
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('There was an error submitting your request. Please try again or email us at support@financeai.com');
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });
}

// Show success message
function showSuccessMessage() {
    let successDiv = document.querySelector('.success-message');
    
    if (!successDiv) {
        successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        const modalBody = document.querySelector('.modal-body');
        modalBody.insertBefore(successDiv, modalBody.firstChild);
    }
    
    successDiv.textContent = '✓ Success! Your request has been submitted. We\'ll be in touch soon!';
    successDiv.classList.add('show');
    
    setTimeout(() => {
        successDiv.classList.remove('show');
    }, 5000);
}

// Personalization: Add contextual suggestions
function addContextualSuggestions(category) {
    const suggestions = {
        account: ['How do I verify my identity?', 'What documents do I need?'],
        payments: ['What are instant transfers?', 'How do I set up recurring payments?'],
        loans: ['What is my interest rate?', 'Can I pay off my loan early?']
    };

    if (suggestions[category]) {
        setTimeout(() => {
            const suggestionText = `You might also want to know:\n${suggestions[category].map(s => `• ${s}`).join('\n')}`;
            addBotMessage(suggestionText);
        }, 2000);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initChatbot);

// Add some personality - greet based on time of day
function getTimeBasedGreeting() {
    const hour = new Date().getHours();
    let greeting = 'Hello';
    
    if (hour < 12) {
        greeting = 'Good morning';
    } else if (hour < 18) {
        greeting = 'Good afternoon';
    } else {
        greeting = 'Good evening';
    }
    
    if (userName) {
        greeting += `, ${userName}`;
    }
    
    return greeting + '! 👋';
}

// Export for use in other modules
window.chatbotAPI = {
    addBotMessage,
    addUserMessage,
    openChatbot,
    closeChatWindow
};
