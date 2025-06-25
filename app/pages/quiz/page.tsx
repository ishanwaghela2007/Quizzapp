'use client';

import React, { useState } from 'react';
import SubjectSelector from '@/components/ SubjectSelector';
import Quiz from '@/components/Quiz';
import questions, { Subject } from '@/components/questions';

const QuizPage = () => {
  const [subject, setSubject] = useState<Subject | null>(null);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 py-10">
        {!subject ? (
          <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-xl shadow-lg">
            <h1 className="text-4xl font-extrabold mb-6 text-center">QuizzWorld</h1>
            <SubjectSelector
              subjects={Object.keys(questions) as Subject[]}
              onSelect={setSubject}
            />
          </div>
        ) : (
          <Quiz subject={subject} questions={questions[subject]} />
        )}
      </div>
    </div>
  );
};

export default QuizPage;
