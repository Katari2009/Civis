
import React, { useState, useEffect } from 'react';
import { type Module, type QuizProgress } from '../types';
import { CheckCircleIcon, XCircleIcon, ArrowRightIcon, XMarkIcon } from './icons/Icons';

interface QuizViewProps {
  module: Module;
  onComplete: (moduleId: string, score: number, userAnswers: (number | null)[]) => void;
  onExit: () => void;
  initialProgress?: QuizProgress;
}

const QuizView: React.FC<QuizViewProps> = ({ module, onComplete, onExit, initialProgress }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>(() => {
    if (initialProgress) {
        return initialProgress.answers;
    }
    return Array(module.questions.length).fill(null);
  });
  const [score, setScore] = useState(() => initialProgress ? initialProgress.score : 0);
  const [isAnswered, setIsAnswered] = useState(false);
  
  const currentQuestion = module.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === module.questions.length - 1;

  const handleAnswerSelect = (index: number) => {
    if (isAnswered) return;
    
    setSelectedAnswerIndex(index);
    setIsAnswered(true);

    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = index;
    setUserAnswers(newAnswers);

    if (currentQuestion.answers[index].isCorrect) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (isLastQuestion) {
      onComplete(module.id, score, userAnswers);
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswerIndex(null);
      setIsAnswered(false);
    }
  };
  
  const getButtonClass = (index: number) => {
    if (!isAnswered) {
      return 'bg-white/50 hover:bg-white/80 border-gray-300';
    }
    if (currentQuestion.answers[index].isCorrect) {
      return 'bg-green-200 border-green-400 ring-2 ring-green-500';
    }
    if (index === selectedAnswerIndex) {
      return 'bg-red-200 border-red-400';
    }
    return 'bg-white/40 border-gray-300 opacity-70';
  };

  return (
    <div className="bg-white/30 backdrop-blur-2xl border border-white/40 rounded-2xl shadow-2xl p-6 md:p-10 text-gray-800 animate-fade-in">
        <div className="flex justify-between items-center mb-4">
            <div>
                <h2 className="text-2xl md:text-3xl font-bold">{module.title}</h2>
                <p className="text-gray-600">Pregunta {currentQuestionIndex + 1} de {module.questions.length}</p>
            </div>
            <button onClick={onExit} className="text-gray-500 hover:text-gray-800 transition p-2 rounded-full hover:bg-white/50">
                <XMarkIcon className="w-7 h-7" />
            </button>
        </div>

        <div className="w-full bg-gray-200/50 rounded-full h-2.5 my-4">
            <div className="bg-blue-400 h-2.5 rounded-full" style={{ width: `${((currentQuestionIndex + 1) / module.questions.length) * 100}%` }}></div>
        </div>

        <div className="mt-8">
            <p className="text-lg md:text-xl font-semibold mb-6">{currentQuestion.questionText}</p>
            <div className="space-y-4">
                {currentQuestion.answers.map((answer, index) => (
                    <button
                        key={index}
                        onClick={() => handleAnswerSelect(index)}
                        disabled={isAnswered}
                        className={`w-full text-left p-4 rounded-lg border transition flex items-center justify-between text-base ${getButtonClass(index)}`}
                    >
                        <span>{answer.text}</span>
                        {isAnswered && currentQuestion.answers[index].isCorrect && <CheckCircleIcon className="w-6 h-6 text-green-600" />}
                        {isAnswered && index === selectedAnswerIndex && !currentQuestion.answers[index].isCorrect && <XCircleIcon className="w-6 h-6 text-red-600" />}
                    </button>
                ))}
            </div>
        </div>
        
        {isAnswered && (
            <div className="mt-6 p-4 rounded-lg bg-blue-50 border border-blue-200 animate-fade-in">
                <p className="font-semibold text-blue-800">Retroalimentación:</p>
                <p className="text-blue-700">{currentQuestion.feedback}</p>
            </div>
        )}
        
        <div className="mt-8 text-right">
            <button
                onClick={handleNext}
                disabled={!isAnswered}
                className="bg-blue-500 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-blue-600 transition-all disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center ml-auto"
            >
                {isLastQuestion ? 'Finalizar' : 'Siguiente'}
                <ArrowRightIcon className="w-5 h-5 ml-2" />
            </button>
        </div>
    </div>
  );
};

export default QuizView;
