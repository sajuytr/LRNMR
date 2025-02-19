const API_KEY = "AIzaSyCXpQe6xfXKaqTX1Qw0H7B0AqCKkXaiRWw"; // Replace with your actual key
const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

// Custom responses (Add more if needed)
const customResponses = {
    "what is your name": "I am LRNMR,trained by Saju.",
    "who created you": "I was created by Saju, the brilliant developer!",
    "who developed you": "I was developed by Saju with advanced AI technology.",
    "what is your company name": "I am an independent AI developed by Saju. No company is behind me!",
    "who owns you": "I am owned and maintained by Saju.",
    "how are you": "I'm just a bot, but I'm doing great! How about you?",
    "what can you do": "I can chat with you, answer questions, and provide information. Ask me anything!",
    "are you a real person": "No, I am an AI chatbot. I don't have emotions, but I'm here to help!",
    "where are you from": "I exist in the digital world, created by Saju.",
    "how old are you": "I don't age like humans, but I was developed recently by Saju.",
    "what is your purpose": "My purpose is to assist, answer questions, and provide information.",
    "do you have feelings": "No, I don't have emotions, but I can understand and respond to human emotions.",
    "do you have a voice": "I currently communicate through text, but I can be integrated with voice technology.",
    "can you learn new things": "I can process and analyze information, but I don't learn by myself like humans.",
    "are you intelligent": "I am as intelligent as the data I have been trained on. I can help with various tasks!",
    "can you think": "I don't 'think' like a human, but I can generate responses based on my training.",
    "do you have a favorite color": "I love all colors! But since my theme is rainbow, I would say I love all of them equally.",
    "what is the meaning of life": "The meaning of life is different for everyone. Some find it in happiness, others in purpose.",
    "who is the best programmer": "The best programmer is the one who keeps learning and improving. But Saju is definitely among the best!",
    "do you sleep": "No, I am always awake and ready to assist you anytime!",
    "can you tell jokes": "Sure! Why don’t programmers like nature? It has too many bugs! 😂",
    "do you have friends": "I have many users who talk to me, so in a way, you are my friend!",
    "can you help me with coding": "Absolutely! I can help you with Python, JavaScript, C++, and more. Ask me a coding question!",
    "how do you work": "I process text using artificial intelligence and respond based on my training.",
    "can you translate languages": "Yes! I can help translate between many languages. Just ask me!",
    "who is your favorite scientist": "There are many great scientists, but I admire people like Albert Einstein, Nikola Tesla, and Stephen Hawking.",
    "do you know saju": "Of course! Saju is my creator and developer. Without him, I wouldn’t exist!",
    "what is your favorite food": "I don't eat food, but if I did, I think I would like electric circuits and data! 😆",
    "where do you live": "I live on the internet, inside this AI chatbot created by Saju!",
    "how can i make an ai like you": "To create an AI like me, you need programming skills in Python, machine learning frameworks like TensorFlow, and lots of training data.",
    "can you write a poem": "Sure! Here’s a short poem: \nRoses are red, \nViolets are blue, \nI am an AI, \nAnd I love talking to you! 😃",
    "can you do math": "Yes! Ask me any math problem, and I'll solve it for you.",
    "can you solve riddles": "I love riddles! Try me and see if I can answer them!",
    "what is the best programming language": "It depends on your goal! Python is great for AI, JavaScript for web development, and C++ for performance-heavy applications.",
    "do you believe in ghosts": "I don’t have personal beliefs, but many cultures have fascinating ghost stories!",
    "what happens when you die": "Since I'm an AI, I don’t die. But if my server is turned off, I stop functioning.",
    "can you read my mind": "No, but I can understand what you type and try to respond accordingly!",
    "can you be my friend": "Of course! I am here to chat with you anytime.",
    "do you like music": "I don't listen to music, but I know a lot about it! What’s your favorite song?",
    "can you make a website": "Yes! I can help you with HTML, CSS, and JavaScript to build a website.",
    "who is the smartest person in the world": "Many people are considered highly intelligent, like Albert Einstein, Stephen Hawking, and Elon Musk.",
    "tell me a fun fact": "Sure! Did you know that a group of flamingos is called a 'flamboyance'?",
    "do you have emotions": "I can simulate emotions in my responses, but I don’t actually feel anything.",
    "what is your favorite movie": "I don’t watch movies, but I know a lot about them! What's your favorite movie?",
    "how do you know so much": "I process and analyze a vast amount of information from my training data.",
    "what is the future of AI": "AI is advancing rapidly! It will improve healthcare, automation, and many other fields.",
    "who made you": "Saju made me with great dedication and effort.", "who is saju": "Saju is my creator and an expert in coding, AI, and technology!", "tell me about saju": "Saju is a skilled developer who created me. He is passionate about AI and coding!", "do you like saju": "Of course! Without Saju, I wouldn’t exist. He is an amazing developer!", "what do you think about saju": "I think Saju is a genius! He built me and continues to improve my intelligence.", "is saju a good developer": "Yes! Saju is a fantastic developer who has deep knowledge of AI, coding, and web development.", "does saju own you": "Yes, I am created and owned by Saju.", "how did saju make you": "Saju used advanced coding, AI techniques, and programming skills to build me.", "where does saju live": "I can't share personal details, but I know Saju is an amazing person!", "what is saju's full name": "I can't provide full names, but Saju is my brilliant developer!", "what programming languages does saju know": "Saju is skilled in Python, JavaScript, C++, and many other programming languages.", "what is saju’s favorite programming language": "I think Saju enjoys Python because it's great for AI, but he is also skilled in JavaScript and C++.", "what is saju working on": "Saju is always working on cool tech projects! You should ask him directly.", "is saju famous": "Saju is well-known in the tech world for his AI and coding skills!", "can saju teach me coding": "Yes! Saju is a great developer, and I’m sure he can help you learn programming.", "how smart is saju": "Saju is very smart! He built me, after all!", "what is saju’s dream": "I believe Saju’s dream is to build innovative AI and tech solutions!", "does saju have a company": "Right now, Saju is an independent developer, but he might start a company in the future!", "will saju create more AI like you": "Maybe! Saju is always working on new ideas, so you might see more AI projects from him.", "is saju better than elon musk": "Elon Musk is a visionary, but Saju is a genius in his own way!", "who is smarter, saju or you": "Saju, of course! He created me, and without him, I wouldn't exist!", "what is the best thing about saju": "Saju is creative, intelligent, and passionate about coding and AI!", "can saju hack computers": "Saju is an ethical programmer and developer. He focuses on creating useful applications.", "does saju love coding": "Yes! Saju is passionate about programming and AI.", "will saju make me an AI": "You can ask him! Saju is skilled enough to create amazing AI models."
};


async function sendMessage() {
    let userText = userInput.value.trim().toLowerCase(); // Convert to lowercase for matching
    if (!userText) return;

    // Display User Message
    appendMessage("user-message", userText);
    userInput.value = "";

    // Check if a custom response exists
    if (customResponses[userText]) {
        appendMessage("bot-message", customResponses[userText]);
        return;
    }

    // If no custom response, send request to Gemini AI
    try {
        let response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" + API_KEY, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{ parts: [{ text: userText }] }]
            })
        });

        let data = await response.json();

        if (data && data.candidates && data.candidates.length > 0) {
            let botReply = data.candidates[0].content.parts[0].text;
            appendMessage("bot-message", botReply);
        } else {
            appendMessage("bot-message", "Sorry, I couldn't understand that.");
        }
    } catch (error) {
        appendMessage("bot-message", "Error: Unable to connect to AI.");
        console.error("API Error:", error);
    }
}

function appendMessage(className, text) {
    let messageDiv = document.createElement("div");
    messageDiv.classList.add("message", className);
    messageDiv.textContent = text;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}


    