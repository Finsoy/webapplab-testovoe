import { SelectedArrowIcon } from '@/shared/assets/icons';
import { Button, Favorite, Select } from '@/shared/ui-kit';
import { ThemeSwitcher } from '@/shared/ui-kit/ThemeSwitcher';
import { Search } from '@/widgets';
import { useState } from 'react';

export const Home = () => {
  const [value, setValue] = useState<string | null>(null);
  return (
    <main>
      <h1>Vite + React</h1>
      <Button icon={<SelectedArrowIcon />} iconPosition="end">
        Primary button
      </Button>
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
      <Search />
    </main>
  );
};
