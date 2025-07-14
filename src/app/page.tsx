'use client'

import { TabsComponents } from "@/components/SettingsTabs/tabs";
import {
  InputControl,
  InputPrefix,
  InputRoot,
} from "@/components/sizebar/input";
import {
  Mail,
  User,
  MapPin,
  Clock,
  FileText,
  Image as ImageIcon,
} from "lucide-react";
import * as FileInput from "@/components/form/FileInput";
import { Select } from "@/components/form/Select/Select";
import { SelectItem } from "@/components/form/Select/SelectItem";
import { TextArea } from "@/components/form/textArea";
import { Button } from "@/components/button";

export default function Home() {
  const userLogged = localStorage.getItem('user');
  const user = userLogged ? JSON.parse(userLogged) : null;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-slate-200/50 dark:bg-slate-800/80 dark:border-slate-700/50 p-6  bg-gradient-to-b from-[#0f172a] to-[#1e293b]">
        <div className="flex items-center justify-center">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
              Configurações

            </h1>
            <p className="text-slate-600 dark:text-slate-400">
              Gerencie suas informações pessoais e preferências
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-medium text-slate-900 dark:text-white">
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
              </p>
            </div>
          </div>
        </div>
        <div className="absolute mt-3 top-6 right-6 w-10 h-10 bg-violet-600 rounded-full flex items-center justify-center">
          <span className="text-white font-semibold text-sm uppercase flex items-center justify-center w-full h-full">
            {user?.name?.charAt(0)}
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-slate-200/50 dark:bg-slate-800/80 dark:border-slate-700/50 p-6">
        <TabsComponents />
      </div>

      {/* Form Section */}
      <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-slate-200/50 dark:bg-slate-800/80 dark:border-slate-700/50 p-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8">
          <div className="mb-4 lg:mb-0">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              Informações Pessoais
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Atualize sua foto e detalhes pessoais aqui.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="px-6">
              Cancelar
            </Button>
            <Button variant="primary" className="px-6">
              Salvar
            </Button>
          </div>
        </div>

        <form className="space-y-8" id="settings">
          {/* Name Section */}
          <div className="grid lg:grid-cols-form gap-6 items-start">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-violet-100 dark:bg-violet-900/20 rounded-lg flex items-center justify-center">
                <User className="h-4 w-4 text-violet-600 dark:text-violet-400" />
              </div>
              <label htmlFor="firstName" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Nome
              </label>
            </div>
            <div className="flex flex-col lg:flex-row gap-4">
              <InputRoot className="w-full ">
                <InputControl 
                  type="text"
                  value={user?.name || ''}
                  id="firstName" 
                  placeholder="Nome"
                />
              </InputRoot>
              <InputRoot className="w-full">
                <InputControl 
                  id="LastName" 
                  defaultValue="Nunes"
                  value={user?.lastName || ''}
                  placeholder="Sobrenome"
                />
              </InputRoot>
            </div>
          </div>

          {/* Email Section */}
          <div className="grid lg:grid-cols-form gap-6 items-start">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                <Mail className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              </div>
              <label htmlFor="EmailAdress" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                E-mail
              </label>
            </div>
            <InputRoot className="w-full">
              <InputControl 
                type="email" 
                id="EmailAdress" 
                defaultValue="duruduh883@gmail.com" 
                placeholder="seu@email.com"
                
              />
            </InputRoot>
          </div>

          {/* Photo Section */}
          <div className="grid lg:grid-cols-form gap-6 items-start">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                <ImageIcon className="h-4 w-4 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <label htmlFor="photo" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Sua Foto
                </label>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Esta será exibida no seu perfil
                </p>
              </div>
            </div>
            <FileInput.Root className="flex flex-col lg:flex-row lg:items-start gap-5 w-full">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          {/* Role Section */}
          <div className="grid lg:grid-cols-form gap-6 items-start">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
                <User className="h-4 w-4 text-purple-600 dark:text-purple-400" />
              </div>
              <label htmlFor="role" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Cargo
              </label>
            </div>
            <InputRoot className="w-full">
              <InputControl 
                id="role" 
                defaultValue="Ciber Security" 
                placeholder="Seu cargo"
              />
            </InputRoot>
          </div>

          {/* Country Section */}
          <div className="grid lg:grid-cols-form gap-6 items-start">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center">
                <MapPin className="h-4 w-4 text-orange-600 dark:text-orange-400" />
              </div>
              <label htmlFor="Country" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                País
              </label>
            </div>
            <Select placeholder="Selecione um país...">
              <SelectItem text="Brasil" value="br" />
              <SelectItem text="Estados Unidos" value="us" />
            </Select>
          </div>

          {/* Timezone Section */}
          <div className="grid lg:grid-cols-form gap-6 items-start">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900/20 rounded-lg flex items-center justify-center">
                <Clock className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
              </div>
              <label htmlFor="Timezone" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Fuso Horário
              </label>
            </div>
            <Select placeholder="Selecione um fuso horário...">
              <SelectItem text="Pacific Standard Time (UTC-08:00)" value="utc8" />
              <SelectItem text="America/São Paulo (UTC-03:00)" value="utc3" />
            </Select>
          </div>

          {/* Bio Section */}
          <div className="grid lg:grid-cols-form gap-6 items-start">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-teal-100 dark:bg-teal-900/20 rounded-lg flex items-center justify-center">
                <FileText className="h-4 w-4 text-teal-600 dark:text-teal-400" />
              </div>
              <div>
                <label htmlFor="Bio" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Biografia
                </label>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Escreva uma breve introdução.
                </p>
              </div>
            </div>
            <TextArea 
              id="bio"
              defaultValue={"Sou um Designer de Produto baseado em Melbourne, Austrália. Especializo-me em Design Interativo e Experiência do Usuário."} 
            />
          </div>

          {/* Portfolio Projects Section */}
          <div className="grid lg:grid-cols-form gap-6 items-start">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-pink-100 dark:bg-pink-900/20 rounded-lg flex items-center justify-center">
                <ImageIcon className="h-4 w-4 text-pink-600 dark:text-pink-400" />
              </div>
              <div>
                <label htmlFor="Projects" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Projetos do Portfólio
                </label>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Compartilhe alguns trechos do seu trabalho.
                </p>
              </div>
            </div>
            <FileInput.Root className="flex flex-col items-start gap-5 w-full">
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple={true} />
            </FileInput.Root>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-3 pt-6 border-t border-slate-200 dark:border-slate-700">
            <Button variant="outline" className="px-8">
              Cancelar
            </Button>
            <Button variant="primary" type="submit" className="px-8">
              Salvar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
