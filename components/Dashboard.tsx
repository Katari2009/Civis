import React from 'react';
import { type UserProfile, type Module, type AppProgress } from '../types';
import { UserCircleIcon, DownloadIcon, TrashIcon, BookOpenIcon, UsersIcon, CheckBadgeIcon, ClipboardDocumentListIcon, SparklesIcon, LogoIcon } from './icons/Icons';

// Fix: Declare jspdf on the window object to resolve TypeScript error.
// The jsPDF library is likely loaded via a script tag and is not typed.
declare global {
  interface Window {
    jspdf: any;
  }
}

interface DashboardProps {
  userProfile: UserProfile;
  modules: Module[];
  progress: AppProgress;
  onStartQuiz: (module: Module) => void;
  onResetAll: () => void;
}

const ModuleCard: React.FC<{ module: Module; progress?: number; onStart: () => void; }> = ({ module: mod, progress = 0, onStart }) => {
    const isCompleted = progress === 100;
    return (
        <div className="bg-white/30 backdrop-blur-lg border border-white/40 rounded-2xl p-6 shadow-lg flex flex-col transition-transform transform hover:-translate-y-1">
            <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white/50 rounded-full flex items-center justify-center mr-4">
                    <mod.icon className="w-7 h-7 text-blue-500" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-gray-800">{mod.title}</h3>
                    <p className="text-sm text-gray-600">{mod.description}</p>
                </div>
            </div>
            <div className="w-full bg-gray-200/50 rounded-full h-2.5 mb-4 mt-auto">
                <div className="bg-green-400 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
            </div>
            <button
                onClick={onStart}
                className={`w-full text-white font-bold py-2 px-4 rounded-lg shadow-md transition-all ${
                    isCompleted 
                    ? 'bg-green-500 hover:bg-green-600' 
                    : 'bg-blue-500 hover:bg-blue-600'
                }`}
            >
                {isCompleted ? 'Repasar' : 'Comenzar'}
            </button>
        </div>
    );
}

const InfoRow: React.FC<{ icon: React.ElementType, label: string, children: React.ReactNode }> = ({ icon: Icon, label, children }) => (
    <div className="flex items-start">
        <Icon className="w-6 h-6 text-blue-500 mr-3 mt-1 flex-shrink-0" />
        <div>
            <span className="font-bold text-gray-800">{label}:</span>
            <span className="text-gray-700 ml-1">{children}</span>
        </div>
    </div>
);


const Dashboard: React.FC<DashboardProps> = ({ userProfile, modules, progress, onStartQuiz, onResetAll }) => {

  const totalModules = modules.length;
  const completedModules = Object.values(progress).filter(p => p.completed).length;
  const globalProgress = totalModules > 0 ? (completedModules / totalModules) * 100 : 0;

  const exportToPDF = () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const today = new Date();

    doc.setFontSize(20);
    doc.text("Reporte de Progreso - Civis", 10, 20);
    
    doc.setFontSize(12);
    doc.text(`Nombre: ${userProfile.name}`, 10, 35);
    doc.text(`Curso: ${userProfile.course}`, 10, 42);
    doc.text(`Fecha: ${today.toLocaleDateString('es-CL')}`, 10, 49);
    doc.text(`Hora: ${today.toLocaleTimeString('es-CL')}`, 10, 56);

    doc.text(`Progreso Global: ${globalProgress.toFixed(0)}%`, 10, 68);

    let yPos = 80;
    modules.forEach(module => {
        const moduleProgress = progress[module.id];
        const status = moduleProgress?.completed ? 'Completado' : 'Pendiente';
        const score = moduleProgress ? `${(moduleProgress.score / module.questions.length * 100).toFixed(0)}%` : 'N/A';
        doc.text(`Módulo: ${module.title} - Estado: ${status} - Puntaje: ${score}`, 10, yPos);
        yPos += 7;
        if (moduleProgress?.answers) {
            module.questions.forEach((q, i) => {
                const userAnswerIndex = moduleProgress.answers[i];
                const userAnswer = userAnswerIndex !== null ? q.answers[userAnswerIndex].text : "No respondida";
                const isCorrect = userAnswerIndex !== null ? q.answers[userAnswerIndex].isCorrect : false;
                doc.text(`  P${i+1}: ${q.questionText.substring(0, 30)}... - R: ${userAnswer} (${isCorrect ? 'Correcta' : 'Incorrecta'})`, 15, yPos);
                yPos += 6;
                if (yPos > 280) {
                    doc.addPage();
                    yPos = 20;
                }
            });
        }
        yPos += 5;
    });

    doc.setFontSize(8);
    doc.text("Creado por Christian Núñez Vega, Asesor Pedagógico, Programa PACE-UDA, 2025.", 10, 290);
    
    doc.save(`progreso_${userProfile.name.replace(' ', '_')}.pdf`);
  };

  const handleReset = () => {
    if (window.confirm('¿Estás seguro de que quieres borrar todo tu progreso y perfil? Esta acción no se puede deshacer.')) {
        onResetAll();
    }
  }

  return (
    <div className="space-y-8">
      <header className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <LogoIcon className="w-12 h-12" />
          <h1 className="text-4xl font-bold text-gray-800">Civis</h1>
        </div>
        <div className="flex space-x-2">
            <button onClick={exportToPDF} className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition shadow-md" title="Exportar Progreso a PDF">
                <DownloadIcon className="w-5 h-5" />
            </button>
            <button onClick={handleReset} className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition shadow-md" title="Borrar todos los datos">
                <TrashIcon className="w-5 h-5" />
            </button>
        </div>
      </header>
      
      <div className="bg-white/30 backdrop-blur-lg border border-white/40 rounded-2xl p-6 shadow-lg flex items-center">
        {userProfile.profileImage ? (
            <img src={userProfile.profileImage} alt="Perfil" className="w-16 h-16 rounded-full object-cover border-4 border-white/50 shadow-md" />
        ) : (
            <UserCircleIcon className="w-16 h-16 text-gray-500" />
        )}
        <div className="ml-4">
          <h2 className="text-2xl font-bold text-gray-800">¡Hola, {userProfile.name}!</h2>
          <p className="text-gray-600">{userProfile.course}</p>
        </div>
      </div>

      <div className="bg-white/30 backdrop-blur-lg border border-white/40 rounded-2xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Información Pedagógica</h2>
          <div className="space-y-3">
              <p className="text-gray-700 mb-4">
                  <strong>Civis</strong> es una herramienta de aprendizaje diseñada para explorar los conceptos clave de la formación ciudadana de una manera interactiva y significativa.
              </p>
              <InfoRow icon={BookOpenIcon} label="Asignatura">Educación Ciudadana</InfoRow>
              <InfoRow icon={UsersIcon} label="Curso">3º Medio</InfoRow>
              <InfoRow icon={CheckBadgeIcon} label="Objetivo de Aprendizaje (OA)">Identificar los fundamentos, atributos y dimensiones de la democracia y la ciudadanía, considerando las libertades fundamentales de las personas y el rol del Estado.</InfoRow>
              <InfoRow icon={ClipboardDocumentListIcon} label="Contenidos">Democracia, Ciudadanía, Estado, Constitución, Nacionalidad, Derechos y Deberes.</InfoRow>
              <InfoRow icon={SparklesIcon} label="Habilidades del Siglo XXI">Pensamiento Crítico y Responsabilidad Social e Individual.</InfoRow>
          </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Tu Progreso</h2>
         <div className="w-full bg-white/30 rounded-full h-4 backdrop-blur-lg border border-white/40">
            <div className="bg-gradient-to-r from-green-300 to-green-500 h-4 rounded-full" style={{ width: `${globalProgress}%` }}></div>
        </div>
        <p className="text-right text-sm text-gray-700 mt-1">{completedModules} de {totalModules} módulos completados</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Módulos de Aprendizaje</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modules.map(mod => (
            <ModuleCard 
                key={mod.id} 
                module={mod} 
                progress={progress[mod.id]?.completed ? 100 : 0} 
                onStart={() => onStartQuiz(mod)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;