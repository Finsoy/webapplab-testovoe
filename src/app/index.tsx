import { Button, Favorite, Select } from '@/shared/ui-kit';
import { ThemeSwitcher } from '@/shared/ui-kit/ThemeSwitcher';

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Button>Primary button</Button>
      <ThemeSwitcher />
      <Favorite isFilled={false} />
      <Select
        className="POPOPOPO"
        placeholder="Категория"
        options={[
          { value: 'Автотовары', label: 'Автотовары' },
          { value: 'Дом и сад', label: 'Дом и сад' },
          { value: 'Обувь', label: 'Обувь' },
          { value: 'Одежда', label: 'Одежда' },
        ]}
      />
    </>
  );
}

export default App;
