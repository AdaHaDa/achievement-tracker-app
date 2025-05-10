import React, { useState } from 'react';

export default function Home() {
  const [achievements, setAchievements] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const addAchievement = () => {
    if (input.trim()) {
      setAchievements([...achievements, input]);
      setInput('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-4">Achievement Tracker</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a new achievement"
          className="border rounded px-3 py-2 w-full"
        />
        <button
          onClick={addAchievement}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      <ul className="list-disc pl-5">
        {achievements.map((achievement, index) => (
          <li key={index} className="mb-1">
            {achievement}
          </li>
        ))}
      </ul>
    </div>
  );
}
