import { Button } from '@/shared/ui-kit';
import { Favorite } from '@/shared/ui-kit/Favorite';

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Button>Primary button</Button>
      <Favorite isFilled={false} />
    </>
  );
}

export default App;
