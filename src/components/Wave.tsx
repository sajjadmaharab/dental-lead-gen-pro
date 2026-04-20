interface Props {
  className?: string;
  fill?: string;
  flip?: boolean;
}
export const Wave = ({ className = "", fill = "white", flip = false }: Props) => (
  <svg
    className={className}
    viewBox="0 0 1440 80"
    preserveAspectRatio="none"
    style={flip ? { transform: "scaleY(-1)" } : undefined}
    aria-hidden="true"
  >
    <path
      fill={fill}
      d="M0,32L60,37.3C120,43,240,53,360,48C480,43,600,21,720,21.3C840,21,960,43,1080,48C1200,53,1320,43,1380,37.3L1440,32L1440,80L1380,80C1320,80,1200,80,1080,80C960,80,840,80,720,80C600,80,480,80,360,80C240,80,120,80,60,80L0,80Z"
    />
  </svg>
);
