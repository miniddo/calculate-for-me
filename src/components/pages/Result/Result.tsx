import useStores from '../../../hooks/useStores';
import { CalculateInfo } from '../../../store/calculateStore';
import { UserIcon } from '../../UI/atoms';
import { Header } from '../../UI/organisms';

const Result = () => {
  const { calculateStore } = useStores();

  return (
    <div className="h-screen w-screen font-notoSans">
      <Header />
      <div className="flex items-center justify-between px-[20px] py-[30px]">
        <div className="font-nanum text-2xl text-alternative">
          <p>아래의 결과를 친구에게 공유해보세요 ෆ</p>
        </div>
      </div>

      <div className="px-[20px]">
        <div className="max-h-[600px] w-full max-w-md overflow-y-scroll rounded-lg border border-gray-200 bg-white p-4 shadow sm:p-8">
          <div className="flow-root">
            <ul
              role="list"
              className="divide-y divide-gray-200 dark:divide-gray-700"
            >
              {calculateStore.calculateInfo.map(
                (data: CalculateInfo, idx: number) => (
                  <li className="py-3 sm:py-4" key={idx}>
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <UserIcon size={7} />
                      </div>
                      <div className="ms-4 min-w-0 flex-1">
                        <p className="truncate text-base font-medium text-gray-900 dark:text-white">
                          {data.name}
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        {data.price.toLocaleString('kr')}원
                      </div>
                    </div>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
