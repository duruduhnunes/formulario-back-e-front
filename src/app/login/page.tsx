'use client'

import { InputRoot, InputControl, InputPrefix } from '@/components/sizebar/input';
import { Button } from '@/components/button';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { motion } from 'framer-motion';

export default function Page() {
  const [data, setData]  = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const { data: response } = await axios.post('http://localhost:3333/auth', data);
      localStorage.setItem('token', response.token);
      localStorage.setItem('user', JSON.stringify(response.user_logged));
      router.push('/');
    } catch (e) {
      console.error(e);
      setError('Falha ao fazer login. Verifique suas credenciais.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-violet-50 via-white to-violet-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center">
      
      {/* Framer Motion animação */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', type: 'spring' }}
        className="w-full max-w-md mx-auto flex flex-col items-center justify-center shadow-2xl p-8 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/50 dark:border-slate-700/50"
      >
        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-2 text-center tracking-tight">
          Bem-vindo de volta
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-400 mb-8 text-center">
          Acesse sua conta para continuar
        </p>

        <form onSubmit={handleSubmit} className="space-y-8 w-full">
          {error && (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4">
              <p className="text-sm text-red-600 dark:text-red-400 text-center">{error}</p>
            </div>
          )}

          {/* Campo de e-mail */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-base font-semibold text-slate-700 dark:text-slate-300 mb-1">
              E-mail
            </label>
            <div className="relative">
              <InputRoot className="w-full">
                <InputPrefix className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-full pointer-events-none">
                  <Mail className="h-6 w-6 text-slate-400" />
                </InputPrefix>
                <InputControl
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={data.email}
                  onChange={(e) => setData({...data, email: e.target.value})}
                  required
                />
              </InputRoot>
            </div>
          </div>

          {/* Campo de senha */}
          <div className="space-y-2">
            <label htmlFor="password" className="block text-base font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Senha
            </label>
            <div className="relative">
              <InputRoot className="w-full">
                <InputPrefix className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-full pointer-events-none">
                  <Lock className="h-6 w-6 text-slate-400" />
                </InputPrefix>
                <InputControl
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Sua senha"
                  value={data.password}
                  onChange={(e) => setData({...data, password: e.target.value})}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-full text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff className="h-6 w-6" /> : <Eye className="h-6 w-6" />}
                </button>
              </InputRoot>
            </div>
          </div>

          {/* Botão de login */}
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full h-14 p-4 text-lg font-semibold bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-700 hover:to-violet-800 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl shadow-lg mt-2"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                Entrando...
              </div>
            ) : (
              'Entrar'
            )}
          </Button>

          {/* Link para cadastro */}
          <div className="text-center pt-2">
            <span className="text-base text-slate-600 dark:text-slate-400">
              Não tem uma conta?{' '}
              <Link 
                href="/register" 
                className="text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300 font-semibold hover:underline"
              >
                Cadastre-se
              </Link>
            </span>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
