// Knowledge Base for FinanceAI Chatbot
// This contains all the information the AI will use to answer customer questions

const knowledgeBase = {
    // Account Management
    account: {
        keywords: ['account', 'open account', 'create account', 'sign up', 'register', 'new account', 'account types'],
        responses: [
            {
                question: "How do I open an account?",
                answer: "Opening an account with FinanceAI is quick and easy! Here's how:\n\n1. Click 'Get Started' or 'Open Account'\n2. Provide your basic information (name, email, phone)\n3. Verify your identity with a government ID\n4. Set up your security PIN\n5. Make your initial deposit (minimum $10)\n\nThe entire process takes just 5 minutes and can be done from your phone or computer. You'll get instant access to your account once verified!"
            },
            {
                question: "What types of accounts do you offer?",
                answer: "We offer several account types to suit your needs:\n\n💳 **Personal Checking** - Zero monthly fees, unlimited transactions\n💰 **High-Yield Savings** - Up to 4.5% APY, FDIC insured\n📈 **Investment Account** - Start investing with as little as $10\n🏢 **Business Account** - Tailored solutions for entrepreneurs\n👨‍👩‍👧 **Joint Account** - Share finances with family members\n\nAll accounts come with free debit cards, mobile app access, and 24/7 customer support!"
            },
            {
                question: "Is there a minimum balance requirement?",
                answer: "Great news! Our accounts have no minimum balance requirements. You can maintain any balance without worrying about fees. However, we recommend keeping at least $10 in your checking account to ensure smooth transactions."
            }
        ]
    },

    // Payments & Transfers
    payments: {
        keywords: ['payment', 'transfer', 'send money', 'receive money', 'wire transfer', 'ach', 'instant payment', 'pay', 'transaction'],
        responses: [
            {
                question: "How do I transfer money?",
                answer: "Transferring money is super simple with FinanceAI! Here are your options:\n\n**Instant Transfer** (within FinanceAI)\n• Open the app or website\n• Click 'Send Money'\n• Enter recipient's email or phone number\n• Enter amount and confirm\n• Money arrives in seconds!\n\n**External Transfer** (to other banks)\n• Link your external bank account\n• Initiate transfer from the 'Transfer' section\n• Typically arrives in 1-3 business days\n• No fees for standard transfers\n\n**Wire Transfer**\n• Available for larger amounts\n• Same-day processing\n• Small fee applies ($15 domestic, $40 international)"
            },
            {
                question: "Are there any transfer limits?",
                answer: "Transfer limits depend on your account verification level:\n\n**Standard Account:**\n• Daily limit: $5,000\n• Monthly limit: $20,000\n\n**Verified Account:**\n• Daily limit: $25,000\n• Monthly limit: $100,000\n\n**Premium Account:**\n• Daily limit: $100,000\n• Custom limits available\n\nYou can verify your account by providing additional documentation through our app."
            },
            {
                question: "How long do transfers take?",
                answer: "Transfer speeds vary by type:\n\n⚡ **Instant** - Within FinanceAI network (seconds)\n🚀 **Same Day** - Wire transfers (within 24 hours)\n📅 **Standard** - To external banks (1-3 business days)\n🌍 **International** - 3-5 business days\n\nYou'll receive notifications at each step, so you always know where your money is!"
            }
        ]
    },

    // Fees & Charges
    fees: {
        keywords: ['fee', 'fees', 'charges', 'cost', 'price', 'pricing', 'how much', 'free'],
        responses: [
            {
                question: "What are your fees?",
                answer: "We believe in transparent pricing! Here's our fee structure:\n\n✅ **FREE Services:**\n• Account maintenance - $0\n• Debit card - $0\n• Domestic ATM withdrawals (our network) - $0\n• Online bill pay - $0\n• Mobile check deposits - $0\n• Standard transfers - $0\n• Account statements - $0\n\n💵 **Paid Services:**\n• Out-of-network ATM - $2.50\n• Wire transfers - $15 (domestic), $40 (international)\n• Expedited card replacement - $25\n• Paper check orders - $15/book\n• Overdraft protection - $0 (we decline instead of charging!)\n\nNo hidden fees, no surprises!"
            }
        ]
    },

    // Security & Privacy
    security: {
        keywords: ['security', 'safe', 'secure', 'privacy', 'protection', 'hack', 'fraud', 'encryption', '2fa', 'two factor'],
        responses: [
            {
                question: "Is my money safe?",
                answer: "Absolutely! Your security is our top priority:\n\n🔒 **Bank-Grade Security:**\n• 256-bit encryption (same as major banks)\n• FDIC insured up to $250,000\n• Multi-factor authentication (2FA)\n• Biometric login (fingerprint/face ID)\n\n🛡️ **Fraud Protection:**\n• 24/7 transaction monitoring\n• Instant fraud alerts\n• $0 liability for unauthorized transactions\n• Ability to freeze card instantly\n\n🔐 **Privacy:**\n• We never sell your data\n• SOC 2 Type II certified\n• PCI DSS compliant\n• Regular security audits\n\nYour money and data are safer with us than cash in your wallet!"
            },
            {
                question: "What should I do if I suspect fraud?",
                answer: "If you notice suspicious activity, act immediately:\n\n**Step 1:** Freeze your card instantly through the app\n**Step 2:** Call our fraud hotline: 1-800-FINANCEAI (24/7)\n**Step 3:** Dispute any unauthorized transactions\n**Step 4:** Change your password and enable 2FA\n\nWe'll investigate within 24 hours and reimburse any fraudulent charges. Your account is protected with $0 liability guarantee!"
            }
        ]
    },

    // Cards & ATMs
    cards: {
        keywords: ['card', 'debit card', 'credit card', 'atm', 'lost card', 'stolen card', 'replace card', 'activate card'],
        responses: [
            {
                question: "How do I get a debit card?",
                answer: "Your debit card is automatically issued when you open an account!\n\n📬 **Physical Card:**\n• Ships within 5-7 business days\n• Contactless payment enabled\n• Works at any Visa/Mastercard merchant\n• Free replacement every 3 years\n\n📱 **Virtual Card:**\n• Available immediately in the app\n• Use for online purchases right away\n• Add to Apple Pay, Google Pay, Samsung Pay\n\nActivate your card through the app or by calling the number on the sticker!"
            },
            {
                question: "What if I lose my card?",
                answer: "Don't worry! Here's what to do:\n\n**Immediately:**\n1. Open the app and tap 'Freeze Card' - this stops all transactions\n2. Order a replacement card (free, arrives in 5-7 days)\n3. Or pay $25 for expedited delivery (2-3 days)\n\n**In the meantime:**\n• Use your virtual card for purchases\n• Your account remains fully accessible\n• All your money stays safe\n\nYou can unfreeze your card anytime if you find it!"
            },
            {
                question: "Where can I withdraw cash for free?",
                answer: "You have access to 55,000+ fee-free ATMs nationwide!\n\n🏧 **Free ATM Networks:**\n• AllPoint Network\n• MoneyPass\n• SUM Network\n• Most major retail locations (CVS, Walgreens, Target, etc.)\n\n📍 **Find ATMs:**\nUse our app's ATM locator to find the nearest free ATM\n\n💵 **ATM Limits:**\n• Daily withdrawal: $500\n• No limit on transactions\n\nOut-of-network ATMs charge $2.50, but we reimburse up to $15/month for Premium accounts!"
            }
        ]
    },

    // Loans & Credit
    loans: {
        keywords: ['loan', 'borrow', 'credit', 'lending', 'personal loan', 'interest rate', 'apr'],
        responses: [
            {
                question: "Do you offer personal loans?",
                answer: "Yes! We offer flexible personal loans with competitive rates:\n\n💰 **Loan Details:**\n• Amount: $1,000 - $50,000\n• APR: Starting at 6.99%\n• Terms: 12, 24, 36, or 60 months\n• No prepayment penalties\n• Fixed interest rates\n\n⚡ **Quick Approval:**\n• Apply in 5 minutes\n• Instant credit decision\n• Funds in your account within 24 hours\n\n📋 **Requirements:**\n• 18+ years old\n• Steady income\n• Credit score 580+\n• U.S. resident\n\nCheck your rate without affecting your credit score!"
            },
            {
                question: "How do I apply for a loan?",
                answer: "Applying is quick and easy:\n\n**Step 1:** Check your rate\n• Soft credit check (won't impact score)\n• See personalized offers instantly\n\n**Step 2:** Choose your loan\n• Select amount and term\n• Review monthly payment\n\n**Step 3:** Complete application\n• Verify income (recent pay stub)\n• Connect bank account\n• Digital signature\n\n**Step 4:** Get funded\n• Approval within minutes\n• Money in your account in 1 business day\n\nNo hidden fees, no surprises. What you see is what you get!"
            }
        ]
    },

    // Investing
    investing: {
        keywords: ['invest', 'investment', 'stocks', 'etf', 'portfolio', 'trading', 'crypto', 'bitcoin'],
        responses: [
            {
                question: "Can I invest with FinanceAI?",
                answer: "Absolutely! Our investment platform makes investing simple:\n\n📈 **What You Can Invest In:**\n• Individual stocks\n• ETFs (Exchange-Traded Funds)\n• Fractional shares (own part of expensive stocks)\n• Cryptocurrency (Bitcoin, Ethereum, etc.)\n• Automated portfolios\n\n💵 **Getting Started:**\n• Minimum investment: Just $10!\n• No commission fees on stocks/ETFs\n• Real-time trading\n• Educational resources included\n\n🤖 **Automated Investing:**\n• Set it and forget it\n• AI-powered portfolio management\n• Automatic rebalancing\n• Tax-loss harvesting\n\nInvesting involves risk. Not FDIC insured. Securities offered through partner brokerage."
            }
        ]
    },

    // Mobile App
    mobile: {
        keywords: ['app', 'mobile', 'download', 'ios', 'android', 'phone', 'mobile banking'],
        responses: [
            {
                question: "Is there a mobile app?",
                answer: "Yes! Our award-winning mobile app is available for both iPhone and Android:\n\n📱 **Features:**\n• Check balances and transactions\n• Transfer money instantly\n• Deposit checks with your camera\n• Pay bills\n• Freeze/unfreeze your card\n• Find nearby ATMs\n• Chat with support\n• Biometric login (Face ID/Fingerprint)\n\n⭐ **Ratings:**\n• iOS: 4.8/5 (App Store)\n• Android: 4.7/5 (Google Play)\n\n📲 **Download:**\nSearch 'FinanceAI' in the App Store or Google Play, or visit financeai.com/app"
            }
        ]
    },

    // Customer Support
    support: {
        keywords: ['help', 'support', 'customer service', 'contact', 'phone number', 'email', 'hours', 'speak to human', 'representative'],
        responses: [
            {
                question: "How can I contact support?",
                answer: "We're here to help 24/7! Multiple ways to reach us:\n\n💬 **In-App Chat** (Fastest)\n• Available 24/7\n• Response in under 2 minutes\n\n📞 **Phone Support**\n• 1-800-FINANCEAI\n• 24/7 availability\n• Average wait time: 3 minutes\n\n📧 **Email**\n• support@financeai.com\n• Response within 24 hours\n\n🤖 **AI Assistant** (That's me!)\n• Instant answers to common questions\n• Available right here, right now\n\nFor complex issues, I can connect you with a human agent!"
            }
        ]
    },

    // Business Accounts
    business: {
        keywords: ['business', 'business account', 'company', 'merchant', 'invoice', 'payroll'],
        responses: [
            {
                question: "Do you offer business accounts?",
                answer: "Yes! We have powerful solutions for businesses of all sizes:\n\n🏢 **Business Checking:**\n• No monthly fees\n• Unlimited transactions\n• Employee debit cards\n• Integration with accounting software\n\n💼 **Business Features:**\n• Invoice creation and payment\n• Expense tracking and categorization\n• Team member access with permissions\n• Bulk payments and payroll\n• Virtual cards for online purchases\n• Cashback rewards (1.5% on purchases)\n\n📊 **Built for Growth:**\n• Credit lines up to $250,000\n• Merchant services (accept payments)\n• API access for developers\n• Dedicated business support\n\nSchedule a call with our business team to learn more!"
            }
        ]
    },

    // General Information
    general: {
        keywords: ['about', 'who are you', 'what is financeai', 'company', 'founded', 'location'],
        responses: [
            {
                question: "What is FinanceAI?",
                answer: "FinanceAI is a modern fintech company making banking simple, fast, and accessible for everyone.\n\n🎯 **Our Mission:**\nTo provide financial services that are transparent, affordable, and powered by cutting-edge technology.\n\n✨ **What Makes Us Different:**\n• No hidden fees or minimum balances\n• Lightning-fast transfers\n• AI-powered insights and support\n• Bank-grade security\n• Beautiful, intuitive mobile app\n\n📊 **By The Numbers:**\n• Founded: 2020\n• Customers: 2M+\n• Transactions processed: $10B+\n• Customer satisfaction: 4.8/5\n\nWe're backed by leading investors and regulated by federal banking authorities. Your deposits are FDIC insured up to $250,000!"
            }
        ]
    }
};

// AI Response System - finds best match for user questions
function findBestResponse(userMessage) {
    const message = userMessage.toLowerCase();
    let bestMatch = null;
    let highestScore = 0;

    // Search through all categories
    for (const category in knowledgeBase) {
        const categoryData = knowledgeBase[category];
        
        // Check if keywords match
        const keywordScore = categoryData.keywords.filter(keyword => 
            message.includes(keyword.toLowerCase())
        ).length;

        if (keywordScore > highestScore) {
            highestScore = keywordScore;
            bestMatch = categoryData.responses[0]; // Return first response in category
        }

        // Check individual questions for exact matches
        categoryData.responses.forEach(response => {
            const questionWords = response.question.toLowerCase().split(' ');
            const matchScore = questionWords.filter(word => 
                message.includes(word) && word.length > 3
            ).length;

            if (matchScore > highestScore) {
                highestScore = matchScore;
                bestMatch = response;
            }
        });
    }

    return bestMatch;
}

// Get a random greeting
function getGreeting() {
    const greetings = [
        "Hello! 👋 I'm your FinanceAI Assistant. How can I help you today?",
        "Hi there! 😊 Welcome to FinanceAI. What can I assist you with?",
        "Hey! 🌟 I'm here to help with any questions about your finances. What would you like to know?",
        "Welcome to FinanceAI! 💼 I'm your AI assistant, ready to help you with banking, payments, and more."
    ];
    return greetings[Math.floor(Math.random() * greetings.length)];
}

// Get fallback responses when no match is found
function getFallbackResponse() {
    return {
        question: "I'm not sure about that",
        answer: "I'm not quite sure about that specific question, but I'd be happy to help you with:\n\n• Opening an account\n• Transferring money\n• Fee information\n• Security and privacy\n• Loan applications\n• Investment options\n• Mobile app features\n\nCould you rephrase your question, or would you like to speak with a human agent?"
    };
}
