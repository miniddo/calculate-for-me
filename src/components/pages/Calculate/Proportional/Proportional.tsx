import { useEffect, useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Button, Input, MinusIcon, PlusIcon } from '../../../UI/atoms';

interface Props {
  count: number;
  price: number;
}

interface CalculateInfo {
  name: string;
  price: number;
  proportional: number;
}

const Proportional = ({ count, price }: Props) => {
  const navigate = useNavigate();

  const [calculateInfo, setCalculateInfo] = useState<CalculateInfo[]>([]);

  useEffect(() => {
    const tempData = [];
    for (let i = 0; i < count; i++) {
      tempData.push({
        name: '홍길동',
        price: Math.floor(price / count),
        proportional: 1,
      });
    }
    setCalculateInfo(tempData);
  }, [count, price]);

  const handleClickGoBack = () => {
    navigate({ to: '/setting', search: { count, price } });
  };

  const handleClickGoResult = () => {
    navigate({ to: '/result', search: { count, price } });
  };

  const handleChangeProportional = (type: 'minus' | 'plus', idx: number) => {
    if (type === 'minus') {
      if (calculateInfo[idx].proportional === 1) return;
    } else if (type === 'plus') {
      if (calculateInfo[idx].proportional === 10) return;
    }

    const value =
      type === 'minus'
        ? calculateInfo[idx].proportional - 1
        : calculateInfo[idx].proportional + 1;

    let total = 0;
    for (let i = 0; i < count; i++) {
      if (i === idx) total += value;
      else total += calculateInfo[i].proportional;
    }

    const tempData = [];
    for (let i = 0; i < count; i++) {
      if (i === idx) {
        tempData.push({
          name: calculateInfo[idx].name,
          price: Math.floor((value * price) / total),
          proportional: value,
        });
      } else {
        tempData.push({
          name: calculateInfo[i].name,
          price: Math.floor((calculateInfo[i].proportional * price) / total),
          proportional: calculateInfo[i].proportional,
        });
      }
    }

    setCalculateInfo(tempData);
  };

  const handleChangeName = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number,
  ) => {
    const name = e.target.value;

    const tempData = [...calculateInfo];
    tempData[idx] = { ...tempData[idx], name };

    setCalculateInfo(tempData);
  };

  return (
    <div className="h-full">
      <div className="flex h-1/6 items-center px-[20px]">
        <div className="text-[15px] text-alternative">
          <p>
            {count}명의 친구들과 {price.toLocaleString('kr')}원을 다르게
            정산합니다.
          </p>
          <p>아래의 표를 채워주세요!</p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="relative w-full overflow-x-auto">
          <table className="w-full text-left rtl:text-right ">
            <thead className="border-b border-t bg-secondary text-[15px] text-alternative">
              <tr>
                <th scope="col" className="px-6 py-3">
                  이름
                </th>
                <th scope="col" className="px-6 py-3">
                  금액
                </th>
                <th scope="col" className="px-6 py-3">
                  비율
                </th>
              </tr>
            </thead>
            <tbody className="text-sm text-alternative">
              {calculateInfo.map((info: CalculateInfo, idx: number) => (
                <tr key={idx} className="border-b">
                  <td className="px-6 py-4 font-semibold">
                    <Input
                      id="name"
                      className="block w-[70px] rounded-lg border border-gray-300 bg-gray-50 px-2.5 py-1 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      defaultValue={info.name}
                      onChange={(e) => handleChangeName(e, idx)}
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <p className="font-semibold">
                        {info.price.toLocaleString('kr')} 원
                      </p>
                    </div>
                  </td>
                  <td className="flex items-center gap-1 px-6 py-4 font-semibold">
                    <button
                      className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 bg-white p-1 text-sm font-medium text-gray-500"
                      type="button"
                      onClick={() => handleChangeProportional('minus', idx)}
                    >
                      <MinusIcon />
                    </button>
                    <Input
                      type="number"
                      id="price"
                      className="block w-[50px] rounded-lg border border-gray-300 bg-gray-50 px-2.5 py-1 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      value={info.proportional}
                      readOnly
                    />
                    <button
                      className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 bg-white p-1 text-sm font-medium text-gray-500"
                      type="button"
                      onClick={() => handleChangeProportional('plus', idx)}
                    >
                      <PlusIcon />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="w-full pr-[10px] pt-[10px] text-right text-[12px]">
          ෆ 비율은 1에서 10까지 가능합니다.
        </p>
      </div>

      <div className="flex h-[120px] items-center justify-center gap-4">
        <Button variant="secondary" onClick={handleClickGoBack}>
          이전으로
        </Button>
        <Button variant="primary" onClick={handleClickGoResult}>
          결과보기
        </Button>
      </div>
    </div>
  );
};

export default Proportional;
