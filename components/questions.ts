// components/questions.ts

export interface Question {
    question: string;
    options: string[];
    answer: string;
  }
  
  export type Subject = 'Math' | 'Science' | 'History' | 'Geography' | 'Sports';
  
  const questions: Record<Subject, Question[]> = {
    Math: [
      { question: 'What is 2 + 2?', options: ['3', '4', '5', '6'], answer: '4' },
      { question: 'What is 5 x 3?', options: ['15', '10', '20', '12'], answer: '15' },
      { question: 'What is √16?', options: ['3', '4', '5', '6'], answer: '4' },
    ],
    Science: [
      { question: 'H2O is the formula of?', options: ['Oxygen', 'Water', 'Hydrogen', 'Salt'], answer: 'Water' },
      { question: 'Sun is a?', options: ['Planet', 'Comet', 'Star', 'Asteroid'], answer: 'Star' },
      { question: 'Which gas is essential for breathing?', options: ['Carbon', 'Oxygen', 'Hydrogen', 'Nitrogen'], answer: 'Oxygen' },
    ],
    History: [
      { question: 'Who discovered America?', options: ['Columbus', 'Newton', 'Einstein', 'Tesla'], answer: 'Columbus' },
      { question: 'Mahatma Gandhi was born in?', options: ['1879', '1869', '1889', '1859'], answer: '1869' },
      { question: 'Who was the first Indian PM?', options: ['Gandhi', 'Patel', 'Nehru', 'Modi'], answer: 'Nehru' },
    ],
    Geography: [
      { question: 'Capital of India?', options: ['Mumbai', 'Delhi', 'Kolkata', 'Chennai'], answer: 'Delhi' },
      { question: 'Largest ocean?', options: ['Atlantic', 'Arctic', 'Indian', 'Pacific'], answer: 'Pacific' },
      { question: 'Mount Everest is in?', options: ['India', 'China', 'Nepal', 'Bhutan'], answer: 'Nepal' },
    ],
    Sports: [
      { question: 'How many players in a cricket team?', options: ['10', '11', '12', '9'], answer: '11' },
      { question: 'Olympics held every?', options: ['2', '4', '3', '5'], answer: '4' },
      { question: 'FIFA is for?', options: ['Cricket', 'Tennis', 'Football', 'Hockey'], answer: 'Football' },
    ],
  };
  
  export default questions;
  