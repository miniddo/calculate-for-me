import { useEffect } from 'react';
import { useNavigate } from '@tanstack/react-router';
import useStores from '@hooks/useStores';
import Button from '@components/UI/atoms/Button/Button';

const Home = () => {
  const { calculateStore } = useStores();
  useEffect(() => {
    calculateStore.clearCalculateInfo();
  }, [calculateStore]);

  const navigate = useNavigate();

  const handleClickStartButton = () => {
    navigate({ to: '/setting' });
  };

  return (
    <div className="grid h-screen w-screen place-content-center">
      <div className="flex flex-col items-center justify-end">
        <img
          src="https://static.vecteezy.com/system/resources/previews/012/224/971/original/bags-of-money-symbol-of-wealth-success-png.png"
          width={200}
        />
        <p className="font-nanum text-5xl font-bold text-alternative">
          정산해줘
        </p>
      </div>
      <div
        className="flex justify-center pt-[80px] font-notoSans"
        onClick={handleClickStartButton}
      >
        <Button variant="primary">지금 바로 시작하기</Button>
      </div>
    </div>
  );
};

export default Home;
