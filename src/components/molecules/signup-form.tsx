import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, Loader, LogOut } from 'lucide-react';
import { Input } from '@/components/ui/signup-input';

type FormData = {
  username: string;
  email: string;
  password: string;
};

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
};

const ProgressButton = ({ 
  isLoading, 
  progress, 
  onClick, 
  children, 
  mode 
}: { 
  isLoading: boolean;
  progress: number;
  onClick?: () => void;
  children: React.ReactNode;
  mode: 'signin' | 'signup';
}) => (
  <button
    type={onClick ? "button" : "submit"}
    onClick={onClick}
    disabled={isLoading}
    className="relative rounded-full bg-black text-base font-medium text-white px-6 py-3 hover:bg-gray-800 transition-all duration-200 flex items-center gap-2 disabled:opacity-50 disabled:hover:bg-black overflow-hidden"
  >
    <div className="relative z-10 flex items-center gap-2">
      {isLoading ? (
        <>
          <Loader className="w-4 h-4 animate-spin" />
          {mode === 'signin' ? 'Signing in...' : 'Creating account...'}
        </>
      ) : (
        <>
          {onClick ? <ArrowRight className="w-4 h-4" /> : <Check className="w-4 h-4" />}
          {children}
        </>
      )}
    </div>
    {isLoading && (
      <motion.div
        className="absolute left-0 top-0 bottom-0 bg-gray-800"
        initial={{ width: "0%" }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.1 }}
        style={{ zIndex: 1 }}
      />
    )}
  </button>
);

export default function AuthForm() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [signInTime, setSignInTime] = useState<Date>();
  const [userData, setUserData] = useState<FormData>();
  const [isSignIn, setIsSignIn] = useState(false);
  const [error, setError] = useState<string>();
  const [formData, setFormData] = useState<Partial<FormData>>({});
  const [completionProgress, setCompletionProgress] = useState(0);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const getProgress = () => {
    const progress = {
      username: !isSignIn ? (formData.username && formData.username.length >= 3 ? 100 : (formData.username?.length || 0) * 33) : 100,
      email: formData.email?.includes('@') && formData.email?.includes('.') ? 100 : (formData.email?.length ? 50 : 0),
      password: formData.password ? (formData.password.length >= 8 ? 100 : (formData.password.length / 8) * 100) : 0
    };
    return progress;
  };

  const simulateProgress = () => {
    setCompletionProgress(0);
    const interval = setInterval(() => {
      setCompletionProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);
    return () => clearInterval(interval);
  };

  const checkExistingAccount = async (email: string) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return email.includes('existing');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.password || (!isSignIn && !formData.username)) return;

    setIsLoading(true);
    setError(undefined);
    simulateProgress();
    
    try {
      const hasAccount = await checkExistingAccount(formData.email);
      
      if (!isSignIn && hasAccount) {
        setError('An account with this email already exists. Please sign in instead.');
        setIsLoading(false);
        setCompletionProgress(0);
        return;
      }
      
      if (isSignIn && !hasAccount) {
        setError('No account found with this email. Please sign up instead.');
        setIsLoading(false);
        setCompletionProgress(0);
        return;
      }

      await new Promise(resolve => setTimeout(resolve, 2000));
      setUserData(formData as FormData);
      setSignInTime(new Date());
      setIsSignedIn(true);
    } catch (error) {
      setError('Authentication failed. Please try again.');
      setCompletionProgress(0);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNext = async () => {
    if (step === 0 && !isSignIn && (!formData.username || formData.username.length < 3)) {
      setError('Username must be at least 3 characters');
      return;
    }
    if ((step === 1 || (isSignIn && step === 0)) && (!formData.email || !formData.email.includes('@'))) {
      setError('Please enter a valid email');
      return;
    }
    setError(undefined);
    setDirection(1);
    setStep(prev => prev + 1);
  };

  const handleBack = () => {
    setDirection(-1);
    setStep(prev => prev - 1);
    setError(undefined);
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
    setUserData(undefined);
    setSignInTime(undefined);
    setStep(0);
    setIsSignIn(false);
    setError(undefined);
    setFormData({});
    setCompletionProgress(0);
  };

  const toggleAuthMode = () => {
    setIsSignIn(!isSignIn);
    setStep(0);
    setError(undefined);
    setFormData({});
    setCompletionProgress(0);
  };

  if (isSignedIn && userData && signInTime) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="min-h-screen bg-background flex items-center justify-center p-4"
      >
        <div className="max-w-md mx-auto">
          <div className="space-y-6">
            <h1 className="text-2xl font-semibold tracking-tight">
              Welcome back, <span className="font-semibold">{isSignIn ? userData.email : userData.username}</span>
            </h1>
            <p className="text-base text-gray-600">
              Signed in at {signInTime.toLocaleTimeString()}
            </p>
            <button
              onClick={handleSignOut}
              className="inline-flex items-center gap-2 text-base font-medium text-gray-600 hover:text-black transition-all duration-200"
            >
              <LogOut className="w-4 h-4" />
              Sign out
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  const progress = getProgress();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 overflow-hidden">
      <div className="max-w-md w-full mx-auto relative">
        <div className="mb-8 text-center">
          <button
            onClick={toggleAuthMode}
            className="text-sm font-medium text-gray-600 hover:text-black transition-all duration-200"
          >
            {isSignIn ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-50 text-red-600 p-4 rounded-lg text-sm font-medium"
            >
              {error}
            </motion.div>
          )}

          <AnimatePresence mode="wait" custom={direction}>
            {!isSignIn && step === 0 && (
              <motion.div
                key="username"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
              >
                <h2 className="crazyfont text-2xl font-semibold mb-4">Choose Your Username</h2>
                <Input
                  value={formData.username || ''}
                  onChange={(e) => handleInputChange('username', e.target.value)}
                  placeholder="username"
                  className="w-full"
                />
              </motion.div>
            )}

            {((!isSignIn && step === 1) || (isSignIn && step === 0)) && (
              <motion.div
                key="email"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
              >
                <h2 className="crazyfont text-2xl font-semibold mb-4">Enter Your Email</h2>
                <Input
                  type="email"
                  value={formData.email || ''}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="email@example.com"
                  className="w-full"
                />
              </motion.div>
            )}

            {((!isSignIn && step === 2) || (isSignIn && step === 1)) && (
              <motion.div
                key="password"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
              >
                <h2 className="crazyfont text-2xl font-semibold mb-4">
                  {isSignIn ? 'Enter Your Password' : 'Create a Password'}
                </h2>
                <Input
                  type="password"
                  value={formData.password || ''}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  placeholder="••••••••"
                  className="w-full"
                />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex justify-between items-center mt-8">
            {step > 0 && (
              <button
                type="button"
                onClick={handleBack}
                className="text-base font-medium text-gray-600 hover:text-black transition-all duration-200"
              >
                Back
              </button>
            )}
            
            <motion.div className="ml-auto">
              {((isSignIn && step < 1) || (!isSignIn && step < 2)) ? (
                <ProgressButton 
                  onClick={handleNext} 
                  isLoading={false}
                  progress={0}
                  mode={isSignIn ? 'signin' : 'signup'}
                >
                  Next
                </ProgressButton>
              ) : (
                <ProgressButton 
                  isLoading={isLoading}
                  progress={completionProgress}
                  mode={isSignIn ? 'signin' : 'signup'}
                >
                  {isSignIn ? 'Sign in' : 'Complete'}
                </ProgressButton>
              )}
            </motion.div>
          </div>
        </form>

        <div className="fixed bottom-0 left-0 right-0 p-8 bg-background border-t border-gray-100">
          <div className="max-w-md mx-auto">
            <div className="grid grid-cols-3 gap-4">
              {!isSignIn && (
                <div className="col-span-1">
                  <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-black"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress.username}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <span className="text-xs font-medium text-gray-500 mt-2 block">Username</span>
                </div>
              )}
              <div className={`col-span-1 ${isSignIn ? 'col-span-1' : ''}`}>
                <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-black"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress.email}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <span className="text-xs font-medium text-gray-500 mt-2 block">Email</span>
              </div>
              <div className={`col-span-1 ${isSignIn ? 'col-span-1' : ''}`}>
                <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-black"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress.password}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <span className="text-xs font-medium text-gray-500 mt-2 block">Password</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}