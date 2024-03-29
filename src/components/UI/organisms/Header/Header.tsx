import { useNavigate } from '@tanstack/react-router';
import { HomeIcon } from '@components/UI/atoms';

const Header = () => {
  const navigate = useNavigate();

  const handleClickHomeIcon = () => {
    navigate({ to: '/' });
  };

  return (
    <div className="flex h-[60px] w-full items-center justify-between px-3 font-notoSans">
      <div className="size-[24px]"></div>
      <p className="font-medium text-alternative">정산해줘</p>
      <div className="size-[24px]" onClick={handleClickHomeIcon}>
        <HomeIcon />
      </div>
    </div>
  );
};

export default Header;
