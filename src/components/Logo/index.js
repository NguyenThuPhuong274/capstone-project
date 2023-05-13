import { useTheme } from '@mui/material/styles';

export const Logo = () => {
  const theme = useTheme();
  const fillColor = theme.palette.primary.main;

  return (
    <div
      href="/"
      className={`flex items-center header-logo block `}
    >
      <img
        src="/images/logo/logo.png"
        alt="logo"
        width={65}
        height={65}
      />
      <span className="ml-5 text-2xl font-bold" >JLearning</span>
    </div>
  );
};
