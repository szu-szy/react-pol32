type RenderProps = {
  headlineText: string;
};

export const RenderHeadline = ({ headlineText }: RenderProps) => {
  return <h1>{headlineText}</h1>;
};
