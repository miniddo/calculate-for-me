import { useNavigate } from '@tanstack/react-router';
import { HomeIcon } from '../../atoms';

const Header = () => {
  const navigate = useNavigate();

  const handleClickHomeIcon = () => {
    navigate({ to: '/' });
  };

  return (
    <div className="font-notoSans flex h-[60px] w-full items-center justify-between px-3">
      <div className="h-[24px] w-[24px]"></div>
      <p className="text-alternative font-medium">정산해줘</p>
      <div className="h-[24px] w-[24px]" onClick={handleClickHomeIcon}>
        <HomeIcon />
      </div>
    </div>
  );
};

export default Header;
