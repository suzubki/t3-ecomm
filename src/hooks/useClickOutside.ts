import { useEffect } from 'react';

type ClickOutsideHandler = () => void;

export const useClickOutside = (
  ref: React.RefObject<HTMLDivElement>,
  onClickOutside: ClickOutsideHandler
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, onClickOutside]);
};
