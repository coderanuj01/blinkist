type ImageProps = {
  source?: string;
};

export const ImageComponent = (props: ImageProps) => {
  const { source } = props;
  return <img src={source} alt="logo" object-fit="cover" />;
};
