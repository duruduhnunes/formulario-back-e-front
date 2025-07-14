'use client'

import { useEffect, useState } from "react";


export function Profile() {
  const [user, setUser] = useState<any>()
  const userLogged = localStorage.getItem('user')

  useEffect(()=>{
    if(userLogged){
      setUser(JSON.parse(userLogged))
    }
  },[userLogged])
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50">
      <div className="w-10 h-10 bg-violet-600 rounded-full flex items-center justify-center">
        <span className="text-white font-semibold text-sm uppercase">
          {user?.name?.charAt(0)}
        </span>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-slate-900 dark:text-white truncate">
            {user?.name}
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
            {user?.email}
        </p>
      </div>
    </div>
  );
}
