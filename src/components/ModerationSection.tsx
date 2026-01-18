import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface Report {
  id: string;
  type: 'spam' | 'abuse' | 'inappropriate';
  reporter: string;
  target: string;
  content: string;
  timestamp: string;
  status: 'pending' | 'resolved';
}

const mockReports: Report[] = [
  { id: '1', type: 'spam', reporter: 'Анонимный #3421', target: 'Анонимный #9812', content: 'Массовая рассылка рекламы', timestamp: '15:30', status: 'pending' },
  { id: '2', type: 'abuse', reporter: 'Анонимный #7654', target: 'Комната #tech', content: 'Оскорбления участников', timestamp: '14:15', status: 'pending' },
  { id: '3', type: 'inappropriate', reporter: 'Анонимный #2341', target: 'Анонимный #5567', content: 'Неприемлемый контент', timestamp: '12:45', status: 'resolved' },
];

const ModerationSection = () => {
  const getTypeColor = (type: Report['type']) => {
    switch (type) {
      case 'spam': return 'bg-yellow-500/20 text-yellow-500';
      case 'abuse': return 'bg-red-500/20 text-red-500';
      case 'inappropriate': return 'bg-orange-500/20 text-orange-500';
    }
  };

  const getTypeLabel = (type: Report['type']) => {
    switch (type) {
      case 'spam': return 'Спам';
      case 'abuse': return 'Оскорбления';
      case 'inappropriate': return 'Неприемлемый контент';
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="p-6 border-b border-border bg-card">
        <h2 className="text-2xl font-bold mb-2 text-foreground">Модерация</h2>
        <p className="text-sm text-muted-foreground">Управление жалобами и контентом</p>
      </div>

      <div className="flex-1 p-6">
        <Tabs defaultValue="pending" className="h-full flex flex-col">
          <TabsList className="w-full justify-start mb-4">
            <TabsTrigger value="pending" className="flex items-center space-x-2">
              <Icon name="AlertCircle" size={16} />
              <span>Ожидают проверки</span>
            </TabsTrigger>
            <TabsTrigger value="resolved" className="flex items-center space-x-2">
              <Icon name="CheckCircle" size={16} />
              <span>Решено</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="pending" className="flex-1 mt-0">
            <ScrollArea className="h-[calc(100vh-240px)]">
              <div className="space-y-4">
                {mockReports.filter(r => r.status === 'pending').map((report) => (
                  <div
                    key={report.id}
                    className="p-5 bg-card border border-border rounded-xl hover:border-primary transition-colors"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                          <Icon name="Flag" size={20} className="text-red-500" />
                        </div>
                        <div>
                          <Badge className={getTypeColor(report.type)}>
                            {getTypeLabel(report.type)}
                          </Badge>
                          <p className="text-xs text-muted-foreground mt-1">{report.timestamp}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Жалоба от:</p>
                        <p className="text-sm font-medium text-foreground">{report.reporter}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">На пользователя:</p>
                        <p className="text-sm font-medium text-foreground">{report.target}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Описание:</p>
                        <p className="text-sm text-foreground">{report.content}</p>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button size="sm" variant="destructive" className="flex-1">
                        <Icon name="Ban" size={16} className="mr-2" />
                        Заблокировать
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <Icon name="AlertTriangle" size={16} className="mr-2" />
                        Предупредить
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Icon name="X" size={16} className="mr-2" />
                        Отклонить
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>

          <TabsContent value="resolved" className="flex-1 mt-0">
            <ScrollArea className="h-[calc(100vh-240px)]">
              <div className="space-y-4">
                {mockReports.filter(r => r.status === 'resolved').map((report) => (
                  <div
                    key={report.id}
                    className="p-5 bg-card border border-border rounded-xl opacity-60"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                          <Icon name="CheckCircle" size={20} className="text-green-500" />
                        </div>
                        <div>
                          <Badge className={getTypeColor(report.type)}>
                            {getTypeLabel(report.type)}
                          </Badge>
                          <p className="text-xs text-muted-foreground mt-1">{report.timestamp}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm text-foreground">{report.content}</p>
                      <p className="text-xs text-muted-foreground">
                        {report.reporter} → {report.target}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ModerationSection;
