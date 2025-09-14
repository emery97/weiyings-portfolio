import { Moon, Sun, Home, User, Briefcase, FileText } from "lucide-react";
import { Button } from "./ui/button";

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isDark: boolean;
  setIsDark: (dark: boolean) => void;
}

export function Navigation({
  activeTab,
  setActiveTab,
  isDark,
  setIsDark,
}: NavigationProps) {
  const tabs = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "resume", label: "Resume", icon: FileText },
  ];

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: Brand */}
        <h1 className="text-xl font-semibold">Wei Ying's Portfolio</h1>

        {/* Center: Tabs */}
        <div className="hidden md:flex items-center space-x-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "ghost"}
                onClick={() => {
                  if (tab.id === "resume") {
                    window.open("/lee-wei-ying-resume.pdf", "_blank");
                  } else {
                    setActiveTab(tab.id);
                  }
                }}
                className="flex items-center space-x-1 px-3 py-2"
              >
                <Icon size={16} />
                <span>{tab.label}</span>
              </Button>
            );
          })}
        </div>

        {/* Right: Dark mode toggle */}
        <Button variant="ghost" size="icon" onClick={toggleTheme}>
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </Button>
      </div>

      {/* Mobile navigation */}
      <div className="md:hidden flex justify-center space-x-1 mt-3">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? "default" : "ghost"}
              size="sm"
              className="flex-1"
              onClick={() => {
                if (tab.id === "resume") {
                  window.open("/lee-wei-ying-resume.pdf", "_blank");
                } else {
                  setActiveTab(tab.id);
                }
              }}
            >
              <Icon size={16} />
            </Button>
          );
        })}
      </div>
    </nav>
  );
}
