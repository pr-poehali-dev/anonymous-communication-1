import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const SettingsSection = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="p-6 border-b border-border bg-card">
        <h2 className="text-2xl font-bold text-foreground">Настройки</h2>
      </div>

      <ScrollArea className="flex-1 p-6">
        <div className="max-w-2xl space-y-6">
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                <Icon name="Shield" size={20} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Безопасность</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3">
                <div>
                  <p className="font-medium text-foreground">End-to-End шифрование</p>
                  <p className="text-sm text-muted-foreground">Все сообщения зашифрованы</p>
                </div>
                <Switch defaultChecked disabled />
              </div>
              <Separator />
              <div className="flex items-center justify-between py-3">
                <div>
                  <p className="font-medium text-foreground">Двухфакторная аутентификация</p>
                  <p className="text-sm text-muted-foreground">Дополнительный уровень защиты</p>
                </div>
                <Switch />
              </div>
              <Separator />
              <div className="flex items-center justify-between py-3">
                <div>
                  <p className="font-medium text-foreground">Проверка безопасности</p>
                  <p className="text-sm text-muted-foreground">Автоматическая проверка угроз</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <Icon name="Eye" size={20} className="text-purple-500" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Приватность</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3">
                <div>
                  <p className="font-medium text-foreground">Скрыть статус "онлайн"</p>
                  <p className="text-sm text-muted-foreground">Никто не увидит ваш статус</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between py-3">
                <div>
                  <p className="font-medium text-foreground">Анонимный режим</p>
                  <p className="text-sm text-muted-foreground">Полная анонимность профиля</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between py-3">
                <div>
                  <p className="font-medium text-foreground">Блокировка скриншотов</p>
                  <p className="text-sm text-muted-foreground">Запретить снимки экрана</p>
                </div>
                <Switch />
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                <Icon name="Trash2" size={20} className="text-red-500" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Удаление данных</h3>
            </div>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Безвозвратное удаление всех ваших данных и сообщений с серверов
              </p>
              <Button variant="destructive" className="w-full">
                <Icon name="Trash2" size={16} className="mr-2" />
                Удалить все данные
              </Button>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default SettingsSection;
