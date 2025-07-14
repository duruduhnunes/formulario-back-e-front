'use client'
import { SizeBar } from "@/components/sizebar/sizeBar";
import "./globals.css";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isAuthPage = pathname === "/login" || pathname === "/register";

  return (
    <html lang="pt-BR" className="antialiased">
      <body className="bg-gradient-to-br from-violet-50 via-white to-violet-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        {isAuthPage ? (
          <div className="min-h-screen flex items-center justify-center p-4">
            {children}
          </div>
        ) : (
          <div className="flex min-h-screen">
            <SizeBar />
            <main className="flex-1 overflow-auto ml-80">
              <div className="px-6 py-8 max-w-7xl mx-auto">
                {children}
              </div>
            </main>
          </div>
        )}
      </body>
    </html>
  );
}
