
import { useState, useCallback, useEffect } from 'react';
import { type UserProfile, type AppProgress, type QuizProgress } from '../types';

const USER_PROFILE_KEY = 'userProfile';
const QUIZ_PROGRESS_KEY = 'quizProgress';

const useUserProfile = () => {
  const [userProfile, setUserProfileState] = useState<UserProfile | null>(null);
  const [progress, setProgressState] = useState<AppProgress>({});

  useEffect(() => {
    try {
      const storedProfile = localStorage.getItem(USER_PROFILE_KEY);
      const storedProgress = localStorage.getItem(QUIZ_PROGRESS_KEY);
      if (storedProfile) {
        setUserProfileState(JSON.parse(storedProfile));
      }
      if (storedProgress) {
        setProgressState(JSON.parse(storedProgress));
      }
    } catch (error) {
      console.error("Failed to parse data from localStorage", error);
    }
  }, []);

  const setUserProfile = useCallback((profile: UserProfile) => {
    try {
      localStorage.setItem(USER_PROFILE_KEY, JSON.stringify(profile));
      setUserProfileState(profile);
    } catch (error) {
      console.error("Failed to save profile to localStorage", error);
    }
  }, []);

  const updateProgress = useCallback((moduleId: string, newProgress: QuizProgress) => {
    setProgressState(prevProgress => {
      const updatedProgress = { ...prevProgress, [moduleId]: newProgress };
      try {
        localStorage.setItem(QUIZ_PROGRESS_KEY, JSON.stringify(updatedProgress));
      } catch (error) {
        console.error("Failed to save progress to localStorage", error);
      }
      return updatedProgress;
    });
  }, []);
  
  const clearAllData = useCallback(() => {
    try {
      localStorage.removeItem(USER_PROFILE_KEY);
      localStorage.removeItem(QUIZ_PROGRESS_KEY);
      setUserProfileState(null);
      setProgressState({});
      window.location.reload();
    } catch (error) {
      console.error("Failed to clear data from localStorage", error);
    }
  }, []);

  return { userProfile, setUserProfile, progress, updateProgress, clearAllData };
};

export default useUserProfile;
