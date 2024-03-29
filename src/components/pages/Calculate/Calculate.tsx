import { Header } from '@components/UI/organisms';
import LumpSum from './LumpSum/LumpSum';
import Proportional from './Proportional/Proportional';
import SplitEqually from './SplitEqually/SplitEqually';

interface Props {
  type?: CalculateType;
  count?: number;
  price?: number;
}

const Calculate = ({ type = 'lump-sum', count = 1, price = 0 }: Props) => {
  return (
    <div className="h-screen w-screen font-notoSans text-white">
      <Header />

      <div className="h-[calc(100%-60px)]">
        {type === 'lump-sum' && <LumpSum count={count} price={price} />}
        {type === 'split-equally' && (
          <SplitEqually count={count} price={price} />
        )}
        {type === 'proportional' && (
          <Proportional count={count} price={price} />
        )}
      </div>
    </div>
  );
};

export default Calculate;
