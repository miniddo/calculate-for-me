import { useNavigate } from '@tanstack/react-router';
import { Button } from '../../../UI/atoms';

interface Props {
  count: number;
  price: number;
}

const SplitEqually = ({ count, price }: Props) => {
  const navigate = useNavigate();

  const handleClickGoBack = () => {
    navigate({ to: '/setting', search: { count, price } });
  };

  return (
    <div className="h-full">
      <div className="flex h-1/6 items-center px-[20px]">
        <div className="text-[15px] text-alternative">
          <p>
            {count}명의 친구들과 {price.toLocaleString('kr')}원을 동일하게
            정산합니다.
          </p>
          <p>아래의 금액을 보내주세요!</p>
        </div>
      </div>

      <div className="flex h-[150px] flex-col items-center justify-center font-nanum text-alternative">
        <p className="text-2xl">오늘의 정산금은?</p>
        <p className="text-5xl">
          {Math.floor(price / count).toLocaleString('kr')}원
        </p>
      </div>

      <div className="flex h-[100px] items-center  justify-center">
        <Button variant="secondary" onClick={handleClickGoBack}>
          이전으로
        </Button>
      </div>
    </div>
  );
};

export default SplitEqually;
