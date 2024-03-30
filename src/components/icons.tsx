type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  telegram: (props: IconProps) => (
    <svg fill="none" viewBox="0 0 15 15" {...props}>
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        d="M14.5 1.5l-14 5 4 2 6-4-4 5 6 4 2-12z"
      />
    </svg>
  ),
  route_line: (props: IconProps) => (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M8 19 A2 2 0 0 1 6 21 A2 2 0 0 1 4 19 A2 2 0 0 1 8 19 z" />
      <path d="M20 5 A2 2 0 0 1 18 7 A2 2 0 0 1 16 5 A2 2 0 0 1 20 5 z" />
      <path d="M12 19h4.5a3.5 3.5 0 000-7h-8a3.5 3.5 0 010-7H12" />
    </svg>
  ),
};
