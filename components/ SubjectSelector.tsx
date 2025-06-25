'use client';
import React from 'react';
import { Subject } from './questions';

interface SubjectSelectorProps {
  subjects: Subject[];
  onSelect: (subject: Subject) => void;
}

const SubjectSelector: React.FC<SubjectSelectorProps> = ({ subjects, onSelect }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
        Choose a Subject
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {subjects.map((subj) => (
          <button
            key={subj}
            onClick={() => onSelect(subj)}
            className="w-full px-4 py-3 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 
                       bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 
                       hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 
                       transition duration-200 ease-in-out"
          >
            {subj}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SubjectSelector;
