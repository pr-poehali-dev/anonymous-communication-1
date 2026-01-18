import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import Icon from '@/components/ui/icon';

interface SearchResult {
  id: string;
  type: 'user' | 'room';
  name: string;
  description: string;
  members?: number;
  encrypted: boolean;
}

const mockResults: SearchResult[] = [
  { id: '1', type: 'room', name: 'Privacy Advocacy', description: 'Обсуждаем методы защиты данных', members: 1243, encrypted: true },
  { id: '2', type: 'room', name: 'Anonymous Tech', description: 'Технологии анонимности', members: 892, encrypted: true },
  { id: '3', type: 'user', name: 'Анонимный #5821', description: 'Эксперт по кибербезопасности', encrypted: true },
  { id: '4', type: 'room', name: 'Crypto Talk', description: 'Криптография и шифрование', members: 654, encrypted: true },
];

const SearchSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'users' | 'rooms'>('all');

  const filteredResults = mockResults.filter(result => {
    if (activeFilter === 'users') return result.type === 'user';
    if (activeFilter === 'rooms') return result.type === 'room';
    return true;
  });

  return (
    <div className="h-full flex flex-col">
      <div className="p-6 border-b border-border bg-card">
        <h2 className="text-2xl font-bold mb-4 text-foreground">Поиск</h2>
        <div className="relative mb-4">
          <Icon name="Search" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Поиск пользователей и комнат..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 h-12 bg-background border-border text-lg"
          />
        </div>
        <div className="flex space-x-2">
          <Button
            variant={activeFilter === 'all' ? 'default' : 'outline'}
            onClick={() => setActiveFilter('all')}
            size="sm"
          >
            Все
          </Button>
          <Button
            variant={activeFilter === 'users' ? 'default' : 'outline'}
            onClick={() => setActiveFilter('users')}
            size="sm"
          >
            Пользователи
          </Button>
          <Button
            variant={activeFilter === 'rooms' ? 'default' : 'outline'}
            onClick={() => setActiveFilter('rooms')}
            size="sm"
          >
            Комнаты
          </Button>
        </div>
      </div>

      <ScrollArea className="flex-1 p-6">
        <div className="space-y-4">
          {filteredResults.map((result) => (
            <div
              key={result.id}
              className="p-4 bg-card border border-border rounded-xl hover:border-primary transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    result.type === 'room'
                      ? 'bg-gradient-to-br from-primary to-emerald-600'
                      : 'bg-gradient-to-br from-purple-500 to-pink-500'
                  }`}>
                    <Icon name={result.type === 'room' ? 'Users' : 'User'} size={24} className="text-background" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-semibold text-foreground">{result.name}</h3>
                      {result.encrypted && (
                        <Icon name="Lock" size={14} className="text-primary" />
                      )}
                      <Badge variant="secondary" className="text-xs">
                        {result.type === 'room' ? 'Комната' : 'Пользователь'}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{result.description}</p>
                    {result.members && (
                      <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                        <Icon name="Users" size={14} />
                        <span>{result.members} участников</span>
                      </div>
                    )}
                  </div>
                </div>
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                  Присоединиться
                </Button>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default SearchSection;
