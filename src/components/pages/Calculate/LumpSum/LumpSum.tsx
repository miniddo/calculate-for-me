import { useState } from 'react';
import { Button, Spinner } from '../../../UI/atoms';

interface Props {
  count: number;
  price: number;
}

const LumpSum = ({ count, price }: Props) => {
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

  return (
    <div className="h-full">
      <div className="flex h-1/6 items-center px-[20px]">
        <div className="text-alternative text-[15px]">
          <p>1부터 {count}까지 숫자 중 랜덤하게 추첨합니다!</p>
          <p>아래의 몰아주기 버튼을 눌러주세요</p>
        </div>
      </div>

      <div className="flex h-[200px] items-center justify-center">
        {loading ? (
          <Spinner />
        ) : (
          <>
            {winner > 0 ? (
              <div className="flex flex-col items-center">
                <div className="flex h-[100px] w-[100px] items-center justify-center text-5xl">
                  {winner}
                </div>
                <Button variant="primary" onClick={handleClickGiveAll}>
                  다시 몰아주기
                </Button>
              </div>
            ) : (
              <Button variant="primary" onClick={handleClickGiveAll}>
                몰아주기
              </Button>
            )}
          </>
        )}
      </div>

      {winner > 0 && !loading && (
        <div className="font-nanum text-alternative px-[20px] text-center text-2xl">
          {winner}번에게 {price.toLocaleString('ko-KR')}원이 모두 정산되었습니다
          :)
        </div>
      )}
    </div>
  );
};

export default LumpSum;
