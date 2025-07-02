'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const faqCategories = [
    {
      category: "Getting Started",
      icon: "🚀",
      questions: [
        {
          question: "What is Hivetensor?",
          answer: "Hivetensor is a decentralized platform that combines artificial intelligence competitions with cryptocurrency rewards. Think of it as 'Kaggle meets Cryptocurrency' - miners compete to solve real-world AI challenges and earn Bitcoin for their contributions. We're democratizing AI development by creating a global, permissionless network of machine learning researchers and practitioners."
        },
        {
          question: "How do I get started mining on Hivetensor?",
          answer: "Getting started is simple: 1) Download the Hivetensor client from our docs page, 2) Create your miner account and set up your wallet, 3) Browse active challenges and pick ones that match your skills, 4) Submit your solutions and compete for rewards. No special hardware required beyond a decent computer - though GPU access helps for deep learning challenges."
        },
        {
          question: "Do I need to be an AI expert to participate?",
          answer: "Not at all! We have challenges for every skill level. Beginner challenges might involve basic data analysis or simple machine learning tasks, while expert challenges tackle cutting-edge research problems. Our tutorials and bootcamp materials help you level up your skills progressively."
        },
        {
          question: "What hardware do I need?",
          answer: "For most challenges, a standard laptop or desktop computer is sufficient. However, deep learning challenges may benefit from GPU acceleration. We recommend at least 8GB RAM and a modern CPU. Cloud computing resources like Google Colab or AWS can also be used for more demanding tasks."
        }
      ]
    },
    {
      category: "Challenges & Competition",
      icon: "🏆",
      questions: [
        {
          question: "How are challenges evaluated?",
          answer: "Each challenge specifies its evaluation metric (accuracy, F1-score, BLEU, etc.) and validation process. Solutions are typically evaluated on a held-out test set that participants can't access. Rankings are updated in real-time, and final rewards are distributed based on leaderboard positions when the challenge ends."
        },
        {
          question: "Can I submit multiple solutions to the same challenge?",
          answer: "Yes! You can submit multiple solutions to improve your score. However, there may be daily submission limits to prevent spam. Your best score is what counts for the final ranking. We encourage iterative improvement and learning from feedback."
        },
        {
          question: "What types of AI challenges are available?",
          answer: "We host challenges across all major AI domains: Computer Vision (image classification, object detection), Natural Language Processing (sentiment analysis, translation), Time Series (forecasting, anomaly detection), Reinforcement Learning (game playing, robotics), and more. Challenges range from academic research problems to real-world industry applications."
        },
        {
          question: "How are prize pools determined?",
          answer: "Prize pools are set by challenge sponsors - companies, research institutions, or individuals who want to crowdsource AI solutions. Larger, more complex challenges typically have higher rewards. The total pool is distributed among top performers, with the exact distribution specified for each challenge."
        },
        {
          question: "Can I collaborate with other miners?",
          answer: "This depends on the specific challenge rules. Some challenges allow team submissions, while others require individual work. Check each challenge's terms carefully. However, general discussion and knowledge sharing in our community forums is always encouraged!"
        }
      ]
    },
    {
      category: "Rewards & Payments",
      icon: "💰",
      questions: [
        {
          question: "How do I earn cryptocurrency rewards?",
          answer: "Rewards are earned by ranking highly in challenge leaderboards. The exact payout structure is specified for each challenge, but typically the top 10-20% of participants receive rewards proportional to their ranking. Payments are made in Bitcoin automatically after challenge completion."
        },
        {
          question: "When do I receive my rewards?",
          answer: "Rewards are typically distributed within 48 hours of challenge completion, after final verification and fraud checks. You'll need to provide a valid Bitcoin wallet address in your profile to receive payments. All transactions are recorded on the blockchain for transparency."
        },
        {
          question: "Are there minimum payout thresholds?",
          answer: "Yes, to minimize transaction fees, there's a minimum payout threshold of 0.001 BTC (approximately $30-50 depending on current prices). Smaller rewards accumulate in your account until you reach the threshold. You can view your current balance in your miner dashboard."
        },
        {
          question: "How are taxes handled?",
          answer: "Hivetensor does not provide tax advice. Cryptocurrency earnings may be subject to taxation in your jurisdiction. You're responsible for reporting earnings according to your local tax laws. We recommend consulting with a tax professional familiar with cryptocurrency regulations."
        },
        {
          question: "What happens if there are technical issues or disputes?",
          answer: "We have a dispute resolution process for technical issues, evaluation errors, or suspected cheating. Contact our support team with detailed information. In cases of platform errors, affected participants will be compensated fairly. Serious violations like data leakage or cheating result in disqualification and potential bans."
        }
      ]
    },
    {
      category: "Technical Details",
      icon: "⚙️",
      questions: [
        {
          question: "What programming languages and frameworks can I use?",
          answer: "You're free to use any programming language and framework you prefer! Python with scikit-learn, TensorFlow, and PyTorch are most common, but R, Julia, C++, and others are welcome. What matters is the quality of your solution, not the tools you use to build it."
        },
        {
          question: "How do I submit my solutions?",
          answer: "Solutions are submitted through the Hivetensor client application. You'll typically upload prediction files, model outputs, or complete model implementations depending on the challenge requirements. Each challenge provides clear submission guidelines and file format specifications."
        },
        {
          question: "Can I use pre-trained models and external data?",
          answer: "This varies by challenge. Some allow pre-trained models and external datasets, while others restrict participants to provided data only. Always check the specific rules for each challenge. Using prohibited resources can result in disqualification."
        },
        {
          question: "How is the platform secured against cheating?",
          answer: "We employ multiple anti-cheating measures: held-out test sets that participants can't access, submission limits, plagiarism detection, anomaly detection in results, and community reporting. Serious violations result in immediate disqualification and potential permanent bans."
        },
        {
          question: "Is my code and intellectual property protected?",
          answer: "You retain ownership of your code and models. However, by participating, you grant Hivetensor limited rights to evaluate your submissions. We never share your code with others unless explicitly required by challenge rules. Some challenges may require open-source solutions - this is always clearly stated upfront."
        }
      ]
    },
    {
      category: "Community & Support",
      icon: "🤝",
      questions: [
        {
          question: "How can I get help if I'm stuck?",
          answer: "We have multiple support channels: comprehensive documentation, video tutorials, community forums where experienced miners help newcomers, and direct support via email. Our community is generally very helpful and welcoming to new participants."
        },
        {
          question: "Are there educational resources available?",
          answer: "Absolutely! We offer a complete AutoML bootcamp curriculum, covering everything from basic machine learning to advanced techniques. There are also challenge-specific tutorials, best practices guides, and regular webinars from top performers sharing their strategies."
        },
        {
          question: "Can I create my own challenges?",
          answer: "Yes! Organizations and individuals can sponsor their own challenges through our challenge creation platform. You define the problem, provide the dataset, set the prize pool, and we handle the infrastructure and community engagement. It's a great way to crowdsource solutions to your specific AI problems."
        },
        {
          question: "How do I stay updated on new challenges and platform updates?",
          answer: "Follow us on Twitter @GPLv6, join our community forums, or enable notifications in the Hivetensor client. We announce new challenges, platform updates, and important news through these channels. You can also customize your notification preferences for challenges in specific domains."
        },
        {
          question: "Is there a referral or affiliate program?",
          answer: "Yes! You can earn bonuses for referring new miners who successfully complete challenges. Additionally, top community contributors, tutorial creators, and active forum helpers may be eligible for special rewards and recognition. We believe in rewarding those who help grow and support our community."
        }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b border-solar-gold bg-gradient-to-r from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-solar-gold mb-4">
              FREQUENTLY ASKED QUESTIONS
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to know about Hivetensor, from getting started 
              to earning your first cryptocurrency rewards through AI competition.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Contact */}
        <div className="mb-12 text-center">
          <div className="border-2 border-solar-gold p-6 bg-black">
            <h3 className="text-xl font-semibold text-solar-gold mb-3">Can't find what you're looking for?</h3>
            <p className="text-gray-300 mb-4">
              Our support team is here to help! Reach out with any questions about the platform, challenges, or technical issues.
            </p>
            <div className="space-x-4">
              <button className="bg-solar-gold text-black px-6 py-2 font-bold border-2 border-solar-gold hover:bg-black hover:text-solar-gold transition-all duration-300">
                CONTACT SUPPORT
              </button>
              <button className="border-2 border-solar-gold text-solar-gold px-6 py-2 font-bold hover:bg-solar-gold hover:text-black transition-all duration-300">
                JOIN COMMUNITY
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Categories */}
        {faqCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-8">
            <div className="border-2 border-gray-600 bg-black">
              {/* Category Header */}
              <div className="p-6 border-b border-gray-600">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{category.icon}</span>
                  <h2 className="text-2xl font-semibold text-solar-gold">{category.category}</h2>
                </div>
              </div>

              {/* Questions */}
              <div className="divide-y divide-gray-600">
                {category.questions.map((faq, questionIndex) => {
                  const globalIndex = categoryIndex * 100 + questionIndex; // Create unique index
                  const isOpen = openAccordion === globalIndex;
                  
                  return (
                    <div key={questionIndex}>
                      <button
                        onClick={() => toggleAccordion(globalIndex)}
                        className="w-full p-6 text-left hover:bg-gray-800 transition-colors duration-200 flex justify-between items-center"
                      >
                        <span className="text-lg font-medium text-white pr-4">
                          {faq.question}
                        </span>
                        <div className="flex-shrink-0 text-solar-gold">
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5" />
                          ) : (
                            <ChevronDown className="w-5 h-5" />
                          )}
                        </div>
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-6 bg-black">
                          <div className="border-l-4 border-solar-gold pl-4">
                            <p className="text-gray-300 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}

        {/* Additional Resources */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-solar-gold mb-8 text-center">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border-2 border-gray-600 p-6 bg-black text-center">
              <div className="text-3xl mb-4">📚</div>
              <h3 className="text-lg font-semibold text-white mb-2">Documentation</h3>
              <p className="text-gray-300 text-sm mb-4">
                Comprehensive guides, API references, and technical documentation.
              </p>
              <button className="border-2 border-solar-gold text-solar-gold px-4 py-2 font-bold hover:bg-solar-gold hover:text-black transition-all duration-300">
                VIEW DOCS
              </button>
            </div>

            <div className="border-2 border-gray-600 p-6 bg-black text-center">
              <div className="text-3xl mb-4">🎓</div>
              <h3 className="text-lg font-semibold text-white mb-2">Tutorials</h3>
              <p className="text-gray-300 text-sm mb-4">
                Step-by-step tutorials and our complete AutoML bootcamp curriculum.
              </p>
              <button className="border-2 border-solar-gold text-solar-gold px-4 py-2 font-bold hover:bg-solar-gold hover:text-black transition-all duration-300">
                START LEARNING
              </button>
            </div>

            <div className="border-2 border-gray-600 p-6 bg-black text-center">
              <div className="text-3xl mb-4">💬</div>
              <h3 className="text-lg font-semibold text-white mb-2">Community</h3>
              <p className="text-gray-300 text-sm mb-4">
                Connect with other miners, share strategies, and get help from experts.
              </p>
              <button className="border-2 border-solar-gold text-solar-gold px-4 py-2 font-bold hover:bg-solar-gold hover:text-black transition-all duration-300">
                JOIN FORUM
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="border-2 border-solar-gold p-8 bg-black">
            <h3 className="text-2xl font-bold text-solar-gold mb-4">Ready to Start Mining?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of AI researchers and practitioners earning cryptocurrency 
              rewards while solving real-world problems.
            </p>
            <div className="space-x-4">
              <button className="bg-solar-gold text-black px-8 py-3 font-bold border-2 border-solar-gold hover:bg-black hover:text-solar-gold transition-all duration-300">
                START MINING
              </button>
              <button className="border-2 border-solar-gold text-solar-gold px-8 py-3 font-bold hover:bg-solar-gold hover:text-black transition-all duration-300">
                VIEW CHALLENGES
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 