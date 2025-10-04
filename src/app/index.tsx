import { Button, Favorite, Select } from '@/shared/ui-kit';
import { ThemeSwitcher } from '@/shared/ui-kit/ThemeSwitcher';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <>
      <h1>Vite + React</h1>
      <Button>Primary button</Button>
      <ThemeSwitcher />
      <Favorite isFilled={false} />
      <Select
        placeholder="Категория"
        value={value}
        onChange={setValue}
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
