import { HardDrive, TrendingUp } from "lucide-react";

export function UsedSpaceWidget() {
  return (
    <div className="rounded-xl bg-gradient-to-br from-violet-50 to-violet-100 dark:from-violet-900/20 dark:to-violet-800/20 p-4 border border-violet-200/50 dark:border-violet-700/30">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center">
          <HardDrive className="h-4 w-4 text-white" />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-violet-900 dark:text-violet-100">
            Espaço Utilizado
          </h3>
          <p className="text-xs text-violet-600 dark:text-violet-300">
            88% do espaço disponível
          </p>
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs">
          <span className="text-violet-700 dark:text-violet-300">8.2 GB de 10 GB</span>
          <span className="text-violet-600 dark:text-violet-400">88%</span>
        </div>
        
        <div className="w-full bg-violet-200 dark:bg-violet-800/30 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-violet-600 to-violet-500 h-2 rounded-full transition-all duration-300"
            style={{ width: '88%' }}
          ></div>
        </div>
        
        <div className="flex items-center gap-2 text-xs text-violet-600 dark:text-violet-400">
          <TrendingUp className="h-3 w-3" />
          <span>+2.1 GB este mês</span>
        </div>
        
        <div className="flex gap-2 pt-2">
          <button
            type="button"
            className="flex-1 text-xs font-medium text-violet-700 hover:text-violet-900 dark:text-violet-300 dark:hover:text-violet-200 transition-colors"
          >
            Ignorar
          </button>
          <button
            type="button"
            className="flex-1 text-xs font-medium bg-violet-600 text-white px-3 py-1.5 rounded-lg hover:bg-violet-700 transition-colors"
          >
            Upgrade
          </button>
        </div>
      </div>
    </div>
  );
}
