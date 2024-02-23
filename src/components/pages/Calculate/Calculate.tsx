import { Header } from '../../UI/organisms';
import LumpSum from './LumpSum/LumpSum';

interface Props {
  type?: CalculateType;
  count?: number;
  price?: number;
}

const Calculate = ({ type = 'lump-sum', count = 1, price = 0 }: Props) => {
  return (
    <div className="font-notoSans h-screen w-screen text-white">
      <Header />

      <div className="h-[calc(100%-60px)]">
        {type === 'lump-sum' && <LumpSum count={count} price={price} />}
      </div>
    </div>
  );
};

export default Calculate;
