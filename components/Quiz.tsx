'use client';
import React, { useEffect, useState } from 'react';
import { Question, Subject } from './questions';

interface QuizProps {
  subject: Subject;
  questions: Question[];
}

interface SavedQuizData {
  answers: Record<number, string>;
  submitted: boolean;
}

const Quiz: React.FC<QuizProps> = ({ subject, questions }) => {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(`quiz-${subject}`);
    if (saved) {
      const parsed: SavedQuizData = JSON.parse(saved);
      setAnswers(parsed.answers || {});
      setSubmitted(parsed.submitted || false);
    }
  }, [subject]);

  const handleAnswer = (index: number, option: string) => {
    if (submitted) return;
    const updated = { ...answers, [index]: option };
    setAnswers(updated);
    localStorage.setItem(`quiz-${subject}`, JSON.stringify({ answers: updated, submitted }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
    localStorage.setItem(`quiz-${subject}`, JSON.stringify({ answers, submitted: true }));
  };

  const score = questions.reduce((acc, q, i) => {
    return answers[i] === q.answer ? acc + 1 : acc;
  }, 0);

  return (
    <div className="space-y-6 max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center dark:text-white text-gray-800">
        {subject} Quiz
      </h2>

      {questions.map((q, i) => (
        <div
          key={i}
          className="p-5 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
        >
          <p className="mb-4 font-semibold text-lg dark:text-gray-100 text-gray-800">
            {i + 1}. {q.question}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {q.options.map((opt) => {
              const isSelected = answers[i] === opt;
              const isCorrect = opt === q.answer;
              const isWrong = submitted && isSelected && !isCorrect;

              return (
                <button
                  key={opt}
                  onClick={() => handleAnswer(i, opt)}
                  disabled={submitted}
                  className={`px-4 py-2 rounded-lg transition border font-medium
                    ${
                      isSelected
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-gray-100 dark:bg-gray-800 dark:text-gray-100 text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }
                    ${
                      submitted && isCorrect
                        ? 'border-green-500 ring-2 ring-green-400'
                        : ''
                    }
                    ${isWrong ? 'border-red-500 ring-2 ring-red-400' : ''}
                  `}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </div>
      ))}

      <div className="text-center">
        {!submitted ? (
          <button
            onClick={handleSubmit}
            className="mt-6 px-8 py-3 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded-xl shadow-md transition"
          >
            Submit Quiz
          </button>
        ) : (
          <p className="text-xl font-semibold text-gray-900 dark:text-white mt-4">
            Your Score: <span className="text-green-600">{score}</span> / {questions.length}
          </p>
        )}
      </div>
    </div>
  );
};

export default Quiz;
