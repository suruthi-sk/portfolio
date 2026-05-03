import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { searchKnowledge } from '../../utils/ragSearch';
import styles from './Chatbot.module.css';

const BOTNAME = 'Micky';

// Small talk responses
const smallTalk = [
  { patterns: ['hi', 'hello', 'hey', 'hola', 'sup', 'yo', 'hii', 'hiii', 'heya'], replies: ['Hey there! 👋 How can I help you today?', 'Hello! Ask me anything about Suruthi\'s portfolio!', 'Hi! 😊 What would you like to know?'] },
  { patterns: ['bye', 'goodbye', 'see ya', 'later', 'cya', 'gotta go'], replies: ['Bye! Thanks for stopping by! 👋', 'See you around! Have a great day! ✨', 'Catch you later! Don\'t be a stranger 😄'] },
  { patterns: ['thank', 'thanks', 'thx', 'ty', 'thank you', 'appreciate'], replies: ['You\'re welcome! 😊', 'Happy to help! Anything else?', 'No problem at all! Let me know if you need anything else ✌️'] },
  { patterns: ['how are you', 'how r u', 'hows it going', 'whats up', 'wassup'], replies: ['I\'m just a bunch of code, but I\'m vibing! 🤖 What can I do for you?', 'Living my best bot life! How can I help?', 'All good in the digital world! What\'s on your mind?'] },
  { patterns: ['good morning', 'morning'], replies: ['Good morning! ☀️ Ready to answer your questions!', 'Morning! What would you like to know about Suruthi?'] },
  { patterns: ['good night', 'gn', 'night'], replies: ['Good night! 🌙 Sweet dreams!', 'Night night! Come back anytime! 💤'] },
  { patterns: ['cool', 'nice', 'awesome', 'great', 'wow', 'amazing'], replies: ['Right?! 😎 Anything else you\'d like to know?', 'Glad you think so! What else can I help with?'] },
  { patterns: ['help', 'what can you do', 'options', 'menu'], replies: ['I can tell you about Suruthi\'s skills, projects, experience, and contact info. Or if I can\'t answer something, I\'ll help you send her an email! Just ask away 🚀'] },
  { patterns: ['who are you', 'what are you', 'your name'], replies: ['I\'m Micky! 🤖 Suruthi\'s portfolio chatbot. I know stuff about her skills, projects, and experience. Try asking me something!'] },
  { patterns: ['lol', 'haha', 'lmao', 'rofl', 'funny'], replies: ['Glad I could make you smile! 😄', 'I try my best to be entertaining AND informative 😏'] },
  { patterns: ['ok', 'okay', 'k', 'alright', 'sure'], replies: ['Cool! Let me know if there\'s anything else! 👍', 'Alrighty! I\'m here if you need me 😊'] },
];

function getSmallTalkReply(text) {
  const lower = text.toLowerCase().trim();
  for (const entry of smallTalk) {
    for (const pattern of entry.patterns) {
      if (lower === pattern || lower === pattern + '!' || lower === pattern + '.') {
        return entry.replies[Math.floor(Math.random() * entry.replies.length)];
      }
    }
  }
  return null;
}

function getBotGreeting() {
  return `Hey there! I'm ${BOTNAME}, Suruthi's portfolio assistant. Ask me anything about her skills, projects, or experience!`;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: getBotGreeting() },
  ]);
  const [input, setInput] = useState('');
  const [emailFlow, setEmailFlow] = useState(null); // null | 'ask' | 'collecting' | 'done'
  const [emailData, setEmailData] = useState({ name: '', email: '', message: '' });
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const addBotMessage = (text) => {
    setMessages((prev) => [...prev, { role: 'bot', text }]);
  };

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    setMessages((prev) => [...prev, { role: 'user', text: trimmed }]);
    setInput('');

    // If in email collection flow
    if (emailFlow === 'collecting') {
      handleEmailInput(trimmed);
      return;
    }

    // Search knowledge base
    setTimeout(() => {
      // Check small talk first
      const smallTalkReply = getSmallTalkReply(trimmed);
      if (smallTalkReply) {
        addBotMessage(smallTalkReply);
        return;
      }

      const answer = searchKnowledge(trimmed);
      if (answer) {
        addBotMessage(answer);
      } else {
        // No answer found - offer email option
        addBotMessage(
          `Hmm, I'm not sure about that one. Would you like to send a message directly to Suruthi? I can help you draft an email!`
        );
        setEmailFlow('ask');
      }
    }, 400);
  };

  const handleEmailYes = () => {
    setEmailFlow('collecting');
    setEmailData({ name: '', email: '', message: '' });
    addBotMessage(
      `Great! Let me collect a few details.\n\nWhat's your name?`
    );
  };

  const handleEmailNo = () => {
    setEmailFlow(null);
    addBotMessage(`No worries! Feel free to ask me anything else about Suruthi's portfolio.`);
  };

  const handleEmailInput = (text) => {
    if (!emailData.name) {
      // Name validation - at least 2 characters, no numbers only
      if (text.length < 2) {
        setTimeout(() => addBotMessage(`That's a bit short! Could you give me your full name?`), 300);
        return;
      }
      setEmailData((prev) => ({ ...prev, name: text }));
      setTimeout(() => addBotMessage(`Nice to meet you, ${text}! What's your email address?`), 300);
    } else if (!emailData.email) {
      // Email validation
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text)) {
        setTimeout(() => addBotMessage(`Hmm, that doesn't look like a valid email address. Make sure it's something like name@example.com 📧`), 300);
        return;
      }
      setEmailData((prev) => ({ ...prev, email: text }));
      setTimeout(() => addBotMessage(`Got it! Now, what would you like to say to Suruthi?`), 300);
    } else if (!emailData.message) {
      // Message validation - at least 10 characters
      if (text.length < 10) {
        setTimeout(() => addBotMessage(`Could you write a bit more? At least a sentence would be great so Suruthi knows what's up! ✍️`), 300);
        return;
      }
      setEmailData((prev) => ({ ...prev, message: text }));
      setTimeout(() => {
        sendEmail({ ...emailData, message: text });
      }, 300);
    }
  };

  const sendEmail = async (data) => {
    addBotMessage(`Sending your message... hang tight! ✉️`);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '3c5dd8ca-6ef2-47a8-bfcb-b02e75fb8f84', // Replace with your key from web3forms.com
          subject: `From ${BOTNAME}: Message from ${data.name}`,
          from_name: data.name,
          email: data.email,
          message: data.message,
          to: 'suruthisk7@gmail.com',
        }),
      });

      const result = await response.json();

      if (result.success) {
        addBotMessage(
          `Mail sent successfully! 🎉 Suruthi will get back to you soon.\n\nAnything else I can help with?`
        );
      } else {
        addBotMessage(
          `Oops! Something went wrong and the mail didn't go through. 😅 Could you please try again? Or you can directly reach Suruthi at suruthisk7@gmail.com`
        );
      }
    } catch {
      addBotMessage(
        `Oops! Looks like the internet gremlins ate your message. 🐛 Could you please try again? Or email Suruthi directly at suruthisk7@gmail.com`
      );
    }

    setEmailFlow(null);
    setEmailData({ name: '', email: '', message: '' });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating chat button */}
      <motion.button
        className={styles.fab}
        onClick={() => setIsOpen((v) => !v)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Chat with Micky"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.svg
              key="close"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </motion.svg>
          ) : (
            <motion.svg
              key="chat"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.chatWindow}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            {/* Header */}
            <div className={styles.header}>
              <div className={styles.headerInfo}>
                <div className={styles.botAvatar}>M</div>
                <div>
                  <p className={styles.botName}>{BOTNAME}</p>
                  <p className={styles.botStatus}>Portfolio Assistant</p>
                </div>
              </div>
              <button
                className={styles.closeBtn}
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className={styles.messages}>
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`${styles.message} ${
                    msg.role === 'bot' ? styles.botMsg : styles.userMsg
                  }`}
                >
                  <p className={styles.msgText}>{msg.text}</p>
                </div>
              ))}

              {/* Email action buttons */}
              {emailFlow === 'ask' && (
                <div className={styles.actionBtns}>
                  <button className={styles.yesBtn} onClick={handleEmailYes}>
                    Yes, let's email
                  </button>
                  <button className={styles.noBtn} onClick={handleEmailNo}>
                    No thanks
                  </button>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className={styles.inputArea}>
              <input
                className={styles.input}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={
                  emailFlow === 'collecting'
                    ? 'Type your answer...'
                    : 'Ask about Suruthi...'
                }
              />
              <button
                className={styles.sendBtn}
                onClick={handleSend}
                disabled={!input.trim()}
                aria-label="Send message"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>

            {/* Disclaimer */}
            <p className={styles.disclaimer}>
              ⚡ I'm Micky — sometimes brilliant, sometimes confused. Don't take my word as gospel, double-check the important stuff!
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
