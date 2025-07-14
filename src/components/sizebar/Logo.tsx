export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-violet-700 rounded-xl flex items-center justify-center shadow-lg">
        <span className="text-white font-bold text-lg">D</span>
      </div>
      <div>
        <h1 className="text-xl font-bold text-slate-900 dark:text-white">
          Dashboard
        </h1>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Admin Panel
        </p>
      </div>
    </div>
  );
}
