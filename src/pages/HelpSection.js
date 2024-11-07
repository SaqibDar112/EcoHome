import React, { useState } from 'react';
import '../css/HelpSection.css';

const HelpSection = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const faqData = [
    {
      question: "How do I redeem my coins?",
      answer:
        "To redeem your coins, go to the 'Rewards' section in the app. You can exchange your coins for discounts on your electricity bill or other available rewards."
    },
    {
      question: "How can I check my total consumption?",
      answer:
        "Your total electricity consumption can be found on the dashboard. It shows a breakdown of daily, weekly, and monthly usage."
    },
    {
      question: "How do I manage my connected devices?",
      answer:
        "In the 'Devices' section, you can view all connected devices and monitor their electricity consumption. You can also turn off devices remotely to save energy."
    },
    {
      question: "Who can I contact for additional support?",
      answer:
        "If you need further assistance, you can reach out to our support team through the dial - 1234567890 section or call our customer service 1800 1345 2345."
    }
  ];
  return (
    <div className="help-section">
      <h2>Help & FAQs</h2>
      <div className="faq-container">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleQuestion(index)}>
              <h4>{item.question}</h4>
              <span>{activeQuestion === index ? '-' : '+'}</span>
            </div>
            {activeQuestion === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default HelpSection;