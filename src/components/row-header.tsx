import { ComponentChildren } from 'preact';

interface Props {
  children: ComponentChildren;
}

export function RowHeader({ children }: Props) {
  return <div className="flex mb-1 gap-x-1">{children}</div>;
}