import React, { useState } from 'react';
import { type UserProfile } from '../types';
import { UserCircleIcon, LogoIcon } from './icons/Icons';

interface OnboardingProps {
  onProfileCreated: (profile: UserProfile) => void;
}

const Onboarding: React.FC<OnboardingProps> = ({ onProfileCreated }) => {
  const [name, setName] = useState('');
  const [course, setCourse] = useState('3° Medio A');
  const [image, setImage] = useState<string | null>(null);
  const [error, setError] = useState('');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim().length < 3) {
      setError('Por favor, ingresa un nombre válido.');
      return;
    }
    setError('');
    onProfileCreated({
      name: name.trim(),
      course,
      profileImage: image,
    });
  };
  
  const courses = ["A", "B", "C", "D", "E", "F"].map(letter => `3° Medio ${letter}`);

  return (
    <div className="w-full max-w-md bg-white/30 backdrop-blur-lg border border-white/40 rounded-2xl shadow-lg p-8 text-gray-800">
      <div className="flex flex-col items-center mb-6">
        <LogoIcon className="w-16 h-16 mb-2" />
        <h1 className="text-4xl font-bold text-center text-gray-800">Civis</h1>
        <p className="text-center text-gray-700 mt-2">Crea tu perfil para comenzar a aprender.</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col items-center space-y-4">
            <label htmlFor="profile-image-upload" className="cursor-pointer">
                {image ? (
                    <img src={image} alt="Perfil" className="w-28 h-28 rounded-full object-cover border-4 border-white/50 shadow-md" />
                ) : (
                    <div className="w-28 h-28 rounded-full bg-white/50 flex items-center justify-center border-2 border-dashed border-gray-400">
                        <UserCircleIcon className="w-16 h-16 text-gray-500" />
                    </div>
                )}
            </label>
            <input id="profile-image-upload" type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
             <span className="text-sm text-gray-600">Toca para subir una imagen</span>
        </div>

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full bg-white/70 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#A3DFFF]"
            placeholder="Tu nombre"
          />
        </div>
        
        <div>
          <label htmlFor="course" className="block text-sm font-medium text-gray-700">Curso</label>
          <select
            id="course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            className="mt-1 block w-full bg-white/70 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#A3DFFF]"
          >
            {courses.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <button 
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
        >
          Comenzar
        </button>
      </form>
    </div>
  );
};

export default Onboarding;