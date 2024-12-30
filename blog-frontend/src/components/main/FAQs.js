import React, { useState } from 'react';
import './styles.css'; 

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null); 

  const toggleAnswer = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); 
    } else {
      setActiveIndex(index); 
    }
  };

  const faqData = [
    {
      question: 'How can I register on the platform?',
      answer:
        'You can easily register by clicking the "User Registration" button on the dashboard. Fill in your username, email, and password to create an account.',
    },
    {
      question: 'How do I log in to my account?',
      answer:
        'Once registered, you can log in by entering your username and password on the "User Login" page. If you’re an admin, you can access the admin panel through the "Admin Login" page.',
    },
    {
      question: 'What should I do if I forget my password?',
      answer:
        'If you forget your password, click on the "Forgot Password" link to reset it. Follow the instructions sent to your email.',
    },
    {
      question: 'How can I create a new blog post?',
      answer:
        'After logging in, you can navigate to the "Create Post" page, where you can write and publish your blog posts.',
    },
    {
      question: 'Can I edit or delete my blog posts?',
      answer:
        'Yes, after logging in, you can edit or delete your blog posts through your dashboard.',
    },
  ];

  return (
    <div className="faqs-page">
      <div className="faq-container">
        <h1>Frequently Asked Questions</h1>
        <p className="faq-description">Everything you need to know about our blog platform.</p>
        <div className="faq-list">
          {faqData.map((faq, index) => (
            <div className="faq-item" key={index}>
              <div
                className="faq-question"
                onClick={() => toggleAnswer(index)} 
              >
                <span>{faq.question}</span>
                <span className="arrow">{activeIndex === index ? '▲' : '▼'}</span>
              </div>
              {activeIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
