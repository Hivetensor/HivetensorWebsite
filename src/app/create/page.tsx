'use client';

import { useState } from 'react';

export default function CreateChallenge() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    difficulty: '',
    prizePool: '',
    dataset: '',
    metric: '',
    deadline: '',
    maxParticipants: '',
    requirements: '',
    evaluationCriteria: '',
    sponsor: '',
    contactEmail: '',
    datasetSize: '',
    tags: '',
  });

  const categories = [
    { id: 'computer-vision', name: 'Computer Vision', icon: '👁️' },
    { id: 'nlp', name: 'Natural Language Processing', icon: '📝' },
    { id: 'reinforcement', name: 'Reinforcement Learning', icon: '🎮' },
    { id: 'time-series', name: 'Time Series Analysis', icon: '📈' },
    { id: 'tabular', name: 'Tabular Data', icon: '📊' },
    { id: 'generative', name: 'Generative AI', icon: '🎨' },
    { id: 'speech', name: 'Speech Recognition', icon: '🎤' },
    { id: 'robotics', name: 'Robotics', icon: '🤖' },
  ];

  const difficulties = [
    { id: 'beginner', name: 'Beginner', description: 'Entry-level challenge, basic ML knowledge required' },
    { id: 'intermediate', name: 'Intermediate', description: 'Moderate complexity, some ML experience needed' },
    { id: 'advanced', name: 'Advanced', description: 'High complexity, extensive ML expertise required' },
    { id: 'expert', name: 'Expert', description: 'Cutting-edge research level, PhD/industry expert level' },
  ];

  const metrics = [
    { id: 'accuracy', name: 'Accuracy' },
    { id: 'f1-score', name: 'F1 Score' },
    { id: 'auc-roc', name: 'AUC-ROC' },
    { id: 'mse', name: 'Mean Squared Error' },
    { id: 'mae', name: 'Mean Absolute Error' },
    { id: 'dice', name: 'Dice Coefficient' },
    { id: 'iou', name: 'Intersection over Union (IoU)' },
    { id: 'bleu', name: 'BLEU Score' },
    { id: 'rouge', name: 'ROUGE Score' },
    { id: 'reward', name: 'Cumulative Reward' },
    { id: 'fid', name: 'FID Score' },
    { id: 'custom', name: 'Custom Metric' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Challenge submitted:', formData);
  };

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b border-solar-gold bg-gradient-to-r from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-solar-gold mb-4">
              CREATE CHALLENGE
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Launch your own AI challenge and engage the community. 
              Define the problem, set the prize pool, and watch miners compete to solve it.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Challenge Creation Benefits */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-solar-gold mb-6">Why Create a Challenge?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border-2 border-gray-600 p-6 bg-gray-900">
              <div className="text-3xl mb-4">🧠</div>
              <h3 className="text-lg font-semibold text-white mb-2">Advance Research</h3>
              <p className="text-gray-300 text-sm">Crowdsource solutions to complex AI problems and accelerate breakthrough discoveries.</p>
            </div>
            <div className="border-2 border-gray-600 p-6 bg-gray-900">
              <div className="text-3xl mb-4">🌍</div>
              <h3 className="text-lg font-semibold text-white mb-2">Global Talent</h3>
              <p className="text-gray-300 text-sm">Access diverse perspectives from AI researchers and practitioners worldwide.</p>
            </div>
            <div className="border-2 border-gray-600 p-6 bg-gray-900">
              <div className="text-3xl mb-4">💎</div>
              <h3 className="text-lg font-semibold text-white mb-2">Quality Solutions</h3>
              <p className="text-gray-300 text-sm">Competition drives innovation and produces high-quality, validated solutions.</p>
            </div>
          </div>
        </div>

        {/* Challenge Creation Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <div className="border-2 border-gray-600 p-6 bg-gray-900">
            <h3 className="text-xl font-semibold text-solar-gold mb-6">Basic Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Challenge Title *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="e.g., Medical Image Segmentation Challenge"
                  className="w-full bg-black border-2 border-gray-600 text-white px-4 py-3 focus:border-solar-gold focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Sponsor Organization *
                </label>
                <input
                  type="text"
                  name="sponsor"
                  value={formData.sponsor}
                  onChange={handleInputChange}
                  placeholder="e.g., MedAI Labs"
                  className="w-full bg-black border-2 border-gray-600 text-white px-4 py-3 focus:border-solar-gold focus:outline-none"
                  required
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Challenge Description *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Provide a detailed description of the challenge, including objectives, context, and expected outcomes..."
                rows={6}
                className="w-full bg-black border-2 border-gray-600 text-white px-4 py-3 focus:border-solar-gold focus:outline-none resize-none"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Contact Email *
                </label>
                <input
                  type="email"
                  name="contactEmail"
                  value={formData.contactEmail}
                  onChange={handleInputChange}
                  placeholder="contact@yourorganization.com"
                  className="w-full bg-black border-2 border-gray-600 text-white px-4 py-3 focus:border-solar-gold focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Tags (comma-separated)
                </label>
                <input
                  type="text"
                  name="tags"
                  value={formData.tags}
                  onChange={handleInputChange}
                  placeholder="medical, image-processing, deep-learning"
                  className="w-full bg-black border-2 border-gray-600 text-white px-4 py-3 focus:border-solar-gold focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Challenge Configuration */}
          <div className="border-2 border-gray-600 p-6 bg-gray-900">
            <h3 className="text-xl font-semibold text-solar-gold mb-6">Challenge Configuration</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Category *
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full bg-black border-2 border-gray-600 text-white px-4 py-3 focus:border-solar-gold focus:outline-none"
                  required
                >
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.icon} {category.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Difficulty Level *
                </label>
                <select
                  name="difficulty"
                  value={formData.difficulty}
                  onChange={handleInputChange}
                  className="w-full bg-black border-2 border-gray-600 text-white px-4 py-3 focus:border-solar-gold focus:outline-none"
                  required
                >
                  <option value="">Select difficulty</option>
                  {difficulties.map((difficulty) => (
                    <option key={difficulty.id} value={difficulty.id}>
                      {difficulty.name} - {difficulty.description}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Prize Pool (₿) *
                </label>
                <input
                  type="number"
                  name="prizePool"
                  value={formData.prizePool}
                  onChange={handleInputChange}
                  placeholder="25.5"
                  min="0"
                  step="0.1"
                  className="w-full bg-black border-2 border-gray-600 text-white px-4 py-3 focus:border-solar-gold focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Challenge Deadline *
                </label>
                <input
                  type="datetime-local"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleInputChange}
                  className="w-full bg-black border-2 border-gray-600 text-white px-4 py-3 focus:border-solar-gold focus:outline-none"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Evaluation Metric *
                </label>
                <select
                  name="metric"
                  value={formData.metric}
                  onChange={handleInputChange}
                  className="w-full bg-black border-2 border-gray-600 text-white px-4 py-3 focus:border-solar-gold focus:outline-none"
                  required
                >
                  <option value="">Select evaluation metric</option>
                  {metrics.map((metric) => (
                    <option key={metric.id} value={metric.id}>
                      {metric.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Maximum Participants
                </label>
                <input
                  type="number"
                  name="maxParticipants"
                  value={formData.maxParticipants}
                  onChange={handleInputChange}
                  placeholder="1000"
                  min="1"
                  className="w-full bg-black border-2 border-gray-600 text-white px-4 py-3 focus:border-solar-gold focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Dataset Information */}
          <div className="border-2 border-gray-600 p-6 bg-gray-900">
            <h3 className="text-xl font-semibold text-solar-gold mb-6">Dataset Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Dataset Name/Description *
                </label>
                <input
                  type="text"
                  name="dataset"
                  value={formData.dataset}
                  onChange={handleInputChange}
                  placeholder="e.g., Medical CT Scans Dataset"
                  className="w-full bg-black border-2 border-gray-600 text-white px-4 py-3 focus:border-solar-gold focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Dataset Size
                </label>
                <input
                  type="text"
                  name="datasetSize"
                  value={formData.datasetSize}
                  onChange={handleInputChange}
                  placeholder="e.g., 15GB, 10,000 images"
                  className="w-full bg-black border-2 border-gray-600 text-white px-4 py-3 focus:border-solar-gold focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Additional Requirements */}
          <div className="border-2 border-gray-600 p-6 bg-gray-900">
            <h3 className="text-xl font-semibold text-solar-gold mb-6">Additional Requirements</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Participation Requirements
                </label>
                <textarea
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleInputChange}
                  placeholder="Specify any special requirements for participants (e.g., GPU requirements, software dependencies, experience level)..."
                  rows={4}
                  className="w-full bg-black border-2 border-gray-600 text-white px-4 py-3 focus:border-solar-gold focus:outline-none resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Evaluation Criteria & Rules
                </label>
                <textarea
                  name="evaluationCriteria"
                  value={formData.evaluationCriteria}
                  onChange={handleInputChange}
                  placeholder="Describe how submissions will be evaluated, validation procedures, and any specific rules participants must follow..."
                  rows={4}
                  className="w-full bg-black border-2 border-gray-600 text-white px-4 py-3 focus:border-solar-gold focus:outline-none resize-none"
                />
              </div>
            </div>
          </div>

          {/* Review & Submit */}
          <div className="border-2 border-gray-600 p-6 bg-gray-900">
            <h3 className="text-xl font-semibold text-solar-gold mb-4">Review & Submit</h3>
            <div className="bg-black border-2 border-gray-700 p-4 mb-6">
              <h4 className="text-lg font-semibold text-white mb-2">Before Submitting:</h4>
              <ul className="text-gray-300 space-y-1 text-sm">
                <li>• Ensure your challenge description is clear and comprehensive</li>
                <li>• Verify that your dataset is properly prepared and accessible</li>
                <li>• Double-check the prize pool amount and deadline</li>
                <li>• Review evaluation criteria for fairness and clarity</li>
                <li>• Confirm your contact information is correct</li>
              </ul>
            </div>
            
            <div className="mb-6">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="w-5 h-5 bg-black border-2 border-gray-600 checked:bg-solar-gold checked:border-solar-gold"
                  required
                />
                <span className="text-sm text-gray-300">
                  I agree to the <a href="/terms" className="text-solar-gold hover:underline">Terms of Service</a> and confirm that I have the rights to use and distribute the provided dataset.
                </span>
              </label>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                className="flex-1 border-2 border-gray-600 text-gray-300 py-4 px-6 font-bold hover:border-solar-gold hover:text-solar-gold transition-all duration-300"
              >
                SAVE AS DRAFT
              </button>
              <button
                type="submit"
                className="flex-1 bg-solar-gold text-black py-4 px-6 font-bold border-2 border-solar-gold hover:bg-black hover:text-solar-gold transition-all duration-300"
              >
                SUBMIT CHALLENGE
              </button>
            </div>
          </div>
        </form>

        {/* Support Section */}
        <div className="mt-12 text-center">
          <div className="border-2 border-solar-gold p-8 bg-gradient-to-r from-gray-900 to-black">
            <h3 className="text-2xl font-bold text-solar-gold mb-4">Need Help Creating Your Challenge?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our team is here to help you design and launch successful AI challenges. 
              Get expert guidance on problem formulation, dataset preparation, and evaluation metrics.
            </p>
            <div className="space-x-4">
              <button className="bg-solar-gold text-black px-8 py-3 font-bold border-2 border-solar-gold hover:bg-black hover:text-solar-gold transition-all duration-300">
                CONTACT SUPPORT
              </button>
              <button className="border-2 border-solar-gold text-solar-gold px-8 py-3 font-bold hover:bg-solar-gold hover:text-black transition-all duration-300">
                VIEW EXAMPLES
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 