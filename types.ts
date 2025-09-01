
export interface UserProfile {
  name: string;
  course: string;
  profileImage: string | null; // Base64 string
}

export interface Answer {
  text: string;
  isCorrect: boolean;
}

export interface Question {
  questionText: string;
  answers: Answer[];
  feedback: string;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  questions: Question[];
}

export interface QuizProgress {
  score: number;
  answers: (number | null)[];
  completed: boolean;
}

export interface AppProgress {
  [moduleId: string]: QuizProgress;
}
