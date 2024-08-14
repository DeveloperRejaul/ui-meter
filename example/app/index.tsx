import { Button, ButtonText, Center } from 'ui-meter';

export default function App() {
  return (
    <Center flex={1} paddingHorizontal={10}>
      <Button variant="outline">
        <ButtonText color="black"> Click Me </ButtonText>
      </Button>
    </Center>
  );
}
