import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-5 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold text-gray-800">{question}</span>
        {isOpen ? (
          <MinusIcon className="h-6 w-6 text-red-600 transition-transform duration-300 ease-in-out" />
        ) : (
          <PlusIcon className="h-6 w-6 text-red-600 transition-transform duration-300 ease-in-out" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pb-5 text-gray-600">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};


const FAQ = () => {
  const faqData = [
    {
      question: "Who can donate blood?",
      answer:
        "Generally, individuals who are at least 17 years old, weigh at least 110 pounds, and are in good health can donate blood. However, certain medical conditions or recent travels may affect eligibility.",
    },
    {
      question: "How often can I donate blood?",
      answer:
        "Whole blood donations can be made every 56 days (about 8 weeks). Platelet donations can be made more frequently, as often as every 7 days, up to 24 times a year.",
    },
    {
      question: "Is blood donation safe?",
      answer:
        "Yes, blood donation is very safe. All equipment used is sterile and disposed of after a single use. The donation process is conducted by trained professionals in a controlled environment.",
    },
    {
      question: "How long does the donation process take?",
      answer:
        "The entire process, from registration to post-donation refreshments, typically takes about an hour. The actual blood donation usually only takes 8-10 minutes.",
    },
    {
      question: "What should I do before donating blood?",
      answer:
        "Before donating, make sure to eat a healthy meal, stay hydrated, get a good night's sleep, and avoid alcohol consumption. Wear comfortable clothing with sleeves that can be easily rolled up.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-center text-4xl mb-8">FAQ</h1>
      {faqData.map((data, index) => (
        <div key={index} className="collapse collapse-arrow bg-base-200 mb-2">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            {data.question}
          </div>
          <div className="collapse-content">
            <p>{data.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
