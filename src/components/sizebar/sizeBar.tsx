"use client";
import {
  BarChart,
  CheckSquare,
  Flag,
  Home,
  Menu,
  Search,
  SquareStack,
  Users,
  Settings,
  LogOut,
} from "lucide-react";
import { NavItem } from "./navItem";
import { UsedSpaceWidget } from "./UsedSpaceWidget";
import { Profile } from "./profile";
import { InputControl, InputPrefix, InputRoot } from "./input";
import { Logo } from "./Logo";
import { Button } from "../button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function SizeBar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const router = useRouter();
  
  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/login");
  }

  return (
    <aside className="fixed left-0 top-0 h-screen w-80 bg-white/80 backdrop-blur-xl border-r border-slate-200/50 dark:bg-slate-900/80 dark:border-slate-700/50 z-50 transition-all duration-300 ease-in-out">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200/50 dark:border-slate-700/50">
          <Logo />
          <Button
            variant="ghost"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="lg:hidden p-2"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        {/* Search */}
        <div className="p-6 flex">
          <InputRoot className="w-full h-12 bg-slate-50 dark:bg-slate-800">
            <InputPrefix className="flex items-center justify-center ">
            </InputPrefix>
            <InputControl
              placeholder="Buscar..."
            />
          </InputRoot>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-6 space-y-2">
          <div className="space-y-1">
            <NavItem title="Dashboard" icon={Home} />
            <NavItem title="Analytics" icon={BarChart} />
            <NavItem title="Projetos" icon={SquareStack} />
            <NavItem title="Tarefas" icon={CheckSquare} />
            <NavItem title="Relatórios" icon={Flag} />
            <NavItem title="Usuários" icon={Users} />
            <NavItem title="Configurações" icon={Settings} />
          </div>
        </nav>

        {/* Footer */}
        <div className="p-6 border-t border-slate-200/50 dark:border-slate-700/50 space-y-4">
          <UsedSpaceWidget />
          <Profile />
          <Button
            onClick={handleLogout}
            variant="ghost"
            className="w-full justify-start flex text-slate-600 hover:text-red-600 dark:text-slate-400 dark:hover:text-red-400"
          >
            <LogOut  className="h-4 w-4 mr-3" />
            Sair
          </Button>
        </div>
      </div>
    </aside>
  );
}
