type ImageProps = {
  source?: string;
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
};

export const ImageComponent = (props: ImageProps) => {
  const { source, className, onClick, style } = props;

  return (
    <img
      src={source}
      alt="logo"
      className={className}
      style={style}
      onClick={onClick}
      object-fit="cover"
    ></img>
  );
};
