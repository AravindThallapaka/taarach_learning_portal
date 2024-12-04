import React from 'react';
import { LoginForm } from './components/auth/LoginForm';
import { Logo } from './components/ui/Logo';
import { Footer } from './components/layout/Footer';
import { AnimatedHi } from './components/ui/AnimatedHi';
import { BackgroundAnimation } from './components/ui/BackgroundAnimation';

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#0A192F] via-[#112240] to-[#1A365D]">
      <BackgroundAnimation />
      <AnimatedHi />

      {/* Header with logo */}
      <div className="relative z-10">
        <div className="fixed top-0 left-0 p-6">
          <Logo />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="flex justify-center">
            <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/20 transform hover:scale-105 transition-transform duration-300">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Welcome to Tarcah Solutions
          </h2>
          <p className="mt-2 text-center text-sm text-cyan-200">
            Empowering the next generation of cybersecurity professionals{' '}
            <a href="#" className="font-medium text-emerald-400 hover:text-emerald-300 transition-colors duration-200">
              Start your learning journey today
            </a>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="backdrop-blur-xl bg-white/[0.07] py-8 px-4 shadow-2xl shadow-black/20 sm:rounded-2xl sm:px-10 border border-cyan-500/10 transform hover:scale-[1.01] transition-transform duration-300">
            <LoginForm />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;