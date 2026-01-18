import { useState } from 'react';
import ChatSection from '@/components/ChatSection';
import SearchSection from '@/components/SearchSection';
import SettingsSection from '@/components/SettingsSection';
import ModerationSection from '@/components/ModerationSection';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState<'chats' | 'search' | 'settings' | 'moderation'>('chats');

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex h-screen">
        <aside className="w-20 bg-sidebar border-r border-sidebar-border flex flex-col items-center py-6 space-y-8">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
              <Icon name="Shield" size={24} className="text-background" />
            </div>
          </div>

          <nav className="flex-1 flex flex-col space-y-4">
            <button
              onClick={() => setActiveSection('chats')}
              className={`p-4 rounded-xl transition-all ${
                activeSection === 'chats'
                  ? 'bg-primary/20 text-primary'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              <Icon name="MessageSquare" size={24} />
            </button>

            <button
              onClick={() => setActiveSection('search')}
              className={`p-4 rounded-xl transition-all ${
                activeSection === 'search'
                  ? 'bg-primary/20 text-primary'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              <Icon name="Search" size={24} />
            </button>

            <button
              onClick={() => setActiveSection('settings')}
              className={`p-4 rounded-xl transition-all ${
                activeSection === 'settings'
                  ? 'bg-primary/20 text-primary'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              <Icon name="Settings" size={24} />
            </button>

            <button
              onClick={() => setActiveSection('moderation')}
              className={`p-4 rounded-xl transition-all ${
                activeSection === 'moderation'
                  ? 'bg-primary/20 text-primary'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              <Icon name="ShieldCheck" size={24} />
            </button>
          </nav>

          <div className="p-3 rounded-xl bg-muted text-muted-foreground">
            <Icon name="User" size={20} />
          </div>
        </aside>

        <main className="flex-1 overflow-hidden">
          {activeSection === 'chats' && <ChatSection />}
          {activeSection === 'search' && <SearchSection />}
          {activeSection === 'settings' && <SettingsSection />}
          {activeSection === 'moderation' && <ModerationSection />}
        </main>
      </div>
    </div>
  );
};

export default Index;