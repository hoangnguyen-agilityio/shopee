import { FC, ReactNode, MouseEvent } from 'react';
import useRouter from 'next/router';

interface Props {
  children: ReactNode;
  href: string;
}

const Link: FC<Props> = ({ children = '', href = '' }) => {
  const redirect = (e: MouseEvent) => {
    e.preventDefault();
    useRouter.push(href);
  };

  return <span onClick={redirect}>{children}</span>;
};

export default Link;
