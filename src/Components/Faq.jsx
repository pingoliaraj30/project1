import React, { useState } from 'react';
import './FAQ.css'; // Optional for styling

const Faq = [
  {
    question: 'Where can I get a sensor module?',
    answer:
      'Sensors online shopping is now at its peak! Buy sensors with special offers and free shipping above Rs.500.',
  },
  {
    question: 'What is the most accurate Sensors and chips value Website?',
    answer:
      'We source products from reputable manufacturers and suppliers known for accuracy and reliability. We provide the most accurate and reliable information to our customers.',
  },
  {
    question: 'What is the difference between a sensor and a module?',
    answer:
      'Sensors detect changes in the environment and convert them to electrical signals, while modules integrate sensors with electronic components for added functionality.',
  },
  {
    question: 'Can I Trust a Sensors Site?',
    answer:
      'Absolutely! We are committed to high-quality, reliable sensors that meet industry standards. Customer satisfaction and privacy are our top priorities.',
  },
  {
    question: 'Exporting Content and Publishing',
    answer:
      'Our system allows you to export sensor data and reports in various formats such as CSV, Excel, and PDF for easy integration and sharing.',
  },
  {
    question: 'Getting started with SensorSphere',
    answer:
      'Follow the installation guide to set up your sensors and connect them to our platform for real-time monitoring. Contact support for assistance.',
  },
  {
    question: 'How can I Get More Content Credit',
    answer:
      'Focus on producing high-quality content consistently, network with influencers, and improve your skills to gain more credit.',
  },
  {
    question: 'I wish to Cancel My Subscription',
    answer:
      'Log in to your account, go to "Subscription" or "Account Settings", and follow the instructions to cancel your subscription.',
  },
  {
    question: 'Requesting Revisions',
    answer:
      'Contact our support team for revisions. We are committed to ensuring your satisfaction and will promptly assist you.',
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container" style={{ marginTop: "90px" }}>
      <h1 className='mb-4'>Frequently Asked Questions</h1>
      <div className="faq-list">
        {Faq.map((faq, index) => (
          <div key={index} className="faq-item">
            <h3 onClick={() => toggleAnswer(index)} className="faq-question">
              {faq.question}
            </h3>
            {activeIndex === index && (
              <p className="faq-answer">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
