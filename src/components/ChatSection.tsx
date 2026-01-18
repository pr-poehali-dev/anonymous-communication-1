import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import Icon from '@/components/ui/icon';

interface Chat {
  id: string;
  name: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
  encrypted: boolean;
}

interface Message {
  id: string;
  content: string;
  timestamp: string;
  isMine: boolean;
}

const mockChats: Chat[] = [
  { id: '1', name: 'Анонимный #4821', lastMessage: 'Привет, как дела?', timestamp: '14:32', unread: 2, encrypted: true },
  { id: '2', name: 'Группа #privacy', lastMessage: 'Новости безопасности', timestamp: '13:15', unread: 0, encrypted: true },
  { id: '3', name: 'Анонимный #9234', lastMessage: 'Спасибо за помощь!', timestamp: '11:20', unread: 1, encrypted: true },
];

const mockMessages: Message[] = [
  { id: '1', content: 'Привет! Как настроить двухфакторную аутентификацию?', timestamp: '14:30', isMine: false },
  { id: '2', content: 'Привет! Зайди в Настройки → Безопасность → 2FA', timestamp: '14:31', isMine: true },
  { id: '3', content: 'Спасибо, нашел!', timestamp: '14:32', isMine: false },
];

const ChatSection = () => {
  const [selectedChat, setSelectedChat] = useState<Chat>(mockChats[0]);
  const [messageInput, setMessageInput] = useState('');

  return (
    <div className="flex h-full">
      <div className="w-80 border-r border-border bg-card">
        <div className="p-4 border-b border-border">
          <div className="relative">
            <Icon name="Search" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Поиск чатов..."
              className="pl-10 bg-background border-border"
            />
          </div>
        </div>

        <ScrollArea className="h-[calc(100vh-140px)]">
          {mockChats.map((chat) => (
            <button
              key={chat.id}
              onClick={() => setSelectedChat(chat)}
              className={`w-full p-4 border-b border-border text-left transition-colors hover:bg-muted ${
                selectedChat.id === chat.id ? 'bg-muted' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-1">
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-foreground">{chat.name}</span>
                  {chat.encrypted && (
                    <Icon name="Lock" size={14} className="text-primary" />
                  )}
                </div>
                <span className="text-xs text-muted-foreground">{chat.timestamp}</span>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground truncate">{chat.lastMessage}</p>
                {chat.unread > 0 && (
                  <span className="ml-2 px-2 py-0.5 bg-primary text-primary-foreground text-xs rounded-full">
                    {chat.unread}
                  </span>
                )}
              </div>
            </button>
          ))}
        </ScrollArea>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="p-4 border-b border-border bg-card flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-emerald-600 rounded-full flex items-center justify-center">
              <Icon name="User" size={20} className="text-background" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{selectedChat.name}</h3>
              <div className="flex items-center space-x-1 text-xs text-primary">
                <Icon name="Lock" size={12} />
                <span>End-to-End шифрование</span>
              </div>
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <Icon name="MoreVertical" size={20} />
          </Button>
        </div>

        <ScrollArea className="flex-1 p-6">
          <div className="space-y-4">
            {mockMessages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isMine ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[70%] rounded-2xl px-4 py-3 ${
                    message.isMine
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-card border border-border'
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  <span className={`text-xs mt-1 block ${
                    message.isMine ? 'text-primary-foreground/70' : 'text-muted-foreground'
                  }`}>
                    {message.timestamp}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="p-4 border-t border-border bg-card">
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <Icon name="Paperclip" size={20} />
            </Button>
            <Input
              placeholder="Введите сообщение..."
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              className="flex-1 bg-background border-border"
            />
            <Button size="icon" className="bg-primary hover:bg-primary/90">
              <Icon name="Send" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatSection;
