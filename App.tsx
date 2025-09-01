
import React, { useState, useMemo } from 'react';
import Onboarding from './components/Onboarding';
import Dashboard from './components/Dashboard';
import QuizView from './components/QuizView';
import useUserProfile from './hooks/useUserProfile';
import { type Module, type QuizProgress } from './types';
import { QUIZ_MODULES } from './constants';

const App: React.FC = () => {
  const { userProfile, setUserProfile, progress, updateProgress, clearAllData } = useUserProfile();
  const [activeModule, setActiveModule] = useState<Module | null>(null);

  const handleStartQuiz = (module: Module) => {
    setActiveModule(module);
  };

  const handleQuizComplete = (moduleId: string, score: number, userAnswers: (number | null)[]) => {
    updateProgress(moduleId, { score, answers: userAnswers, completed: true });
    setActiveModule(null);
  };

  const handleExitQuiz = () => {
    setActiveModule(null);
  };
  
  const backgroundStyle = {
    backgroundImage: `linear-gradient(to top right, #A3DFFF, #A8F1D6)`,
  };

  if (!userProfile) {
    return (
        <div className="min-h-screen w-full flex items-center justify-center p-4" style={backgroundStyle}>
            <Onboarding onProfileCreated={setUserProfile} />
        </div>
    );
  }

  return (
    <div className="min-h-screen w-full" style={backgroundStyle}>
      <main className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8">
        {activeModule ? (
          <QuizView
            module={activeModule}
            onComplete={handleQuizComplete}
            onExit={handleExitQuiz}
            initialProgress={progress[activeModule.id]}
          />
        ) : (
          <Dashboard
            userProfile={userProfile}
            modules={QUIZ_MODULES}
            progress={progress}
            onStartQuiz={handleStartQuiz}
            onResetAll={clearAllData}
          />
        )}
      </main>
      <footer className="text-center p-4 text-xs text-gray-600 dark:text-gray-400">
        Creado por Christian Núñez Vega, Asesor Pedagógico, Programa PACE-UDA, 2025.
      </footer>
    </div>
  );
};

export default App;
