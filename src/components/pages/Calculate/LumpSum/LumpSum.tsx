import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Button, Spinner } from '../../../UI/atoms';

interface Props {
  count: number;
  price: number;
}

const LumpSum = ({ count, price }: Props) => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);
  const [winner, setWinner] = useState<number>(0);

  const handleClickGiveAll = () => {
    setLoading(true);

    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * count) + 1;
      setWinner(randomNumber);

      setLoading(false);
    }, 2000);
  };

  const handleClickGoBack = () => {
    navigate({ to: '/setting', search: { count, price } });
  };

  return (
    <div className="h-full">
      <div className="flex h-1/6 items-center px-[20px]">
        <div className="text-[15px] text-alternative">
          <p>1부터 {count}까지 숫자 중 랜덤하게 추첨합니다!</p>
          <p>아래의 몰아주기 버튼을 눌러주세요</p>
        </div>
      </div>

      <div className="flex h-[200px] items-center justify-center gap-4">
        {loading ? (
          <Spinner />
        ) : (
          <>
            {winner > 0 ? (
              <div className="flex flex-col items-center">
                <div className="flex h-[100px] w-[100px] items-center justify-center text-5xl">
                  {winner}
                </div>
                <Button onClick={handleClickGiveAll}>다시 몰아주기</Button>
              </div>
            ) : (
              <div className="flex gap-4">
                <Button variant="secondary" onClick={handleClickGoBack}>
                  이전으로
                </Button>
                <Button onClick={handleClickGiveAll}>몰아주기</Button>
              </div>
            )}
          </>
        )}
      </div>

      {winner > 0 && !loading && (
        <div className="px-[20px] text-center font-nanum text-2xl text-alternative">
          {winner}번에게 {price.toLocaleString('ko-KR')}원이 모두 정산되었습니다
          :)
        </div>
      )}
    </div>
  );
};

export default LumpSum;
