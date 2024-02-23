import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Header } from '../../UI/organisms';
import { Button, Input } from '../../UI/atoms';

const Setting = () => {
  const [count, setCount] = useState<number>(1);
  const [price, setPrice] = useState<number>(0);

  const handleChangeCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    if (newValue > 99) {
      setCount(99);
    } else {
      setCount(newValue);
    }
  };

  const handleChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    setPrice(newValue);
  };

  const navigate = useNavigate();

  const handleClickCalculateButton = (type: CalculateType) => {
    if (count > 0) {
      navigate({ to: '/calculate', search: { type, count, price } });
    }
  };

  return (
    <div className="font-notoSans h-screen w-screen">
      <Header />
      <div className="flex items-center justify-between px-[20px] py-[30px]">
        <div className="text-alternative text-[20px]">
          <p>정산할 인원과 금액을</p>
          <p>입력해주세요</p>
        </div>
      </div>

      <div className="font-nanum text-alternative flex items-center gap-2 px-[20px] py-[5px] text-xl">
        <p>정산할 인원은</p>
        <Input
          type="number"
          id="count"
          name="count"
          width="40px"
          value={count}
          onChange={handleChangeCount}
        />
        <p>명 입니다</p>
      </div>

      <div className="font-nanum text-alternative flex items-center gap-2 px-[20px] py-[5px] text-xl">
        <p>정산할 금액은</p>
        <Input
          type="number"
          id="price"
          name="price"
          width="90px"
          value={price}
          onChange={handleChangePrice}
        />
        <p>원 입니다</p>
      </div>

      <div className="grid flex-col place-content-center items-center gap-[20px] px-[20px] py-[50px]">
        <Button
          variant="primary"
          onClick={() => handleClickCalculateButton('lump-sum')}
        >
          1명한테 몰아주기
        </Button>
        <Button
          variant="primary"
          onClick={() => handleClickCalculateButton('proportional')}
        >
          비율 다르게 정산하기
        </Button>
        <Button
          variant="primary"
          onClick={() => handleClickCalculateButton('split-equally')}
        >
          비율 같게 정산하기 (1/N)
        </Button>
      </div>
    </div>
  );
};

export default Setting;
