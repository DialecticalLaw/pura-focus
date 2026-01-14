import { Background } from '@/components/Background/Background';
import { Logo } from '@/components/Logo/Logo';
import { Timer } from '@/components/Timer/Timer';

export default function Home() {
  return (
    <Background>
      <Logo />
      <Timer />
    </Background>
  );
}
