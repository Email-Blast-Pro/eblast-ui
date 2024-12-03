export const Column = ({ children, col }) => {
  return <div className={`column-${col}`}>{children}</div>;
};
