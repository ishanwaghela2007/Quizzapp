'use client';
import { ThemeToggle } from '@/components/theme-toggle';
import { useTheme } from 'next-themes';

export const ThemeWrapper = () => {
    const { theme } = useTheme();

  // You can do stuff with `theme` here if needed
  // console.log("Current theme:", theme);

  return (
    <div className="fixed top-4 right-4 z-50">
      <ThemeToggle />
    </div>
  );
};
