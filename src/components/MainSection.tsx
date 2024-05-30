type SectionProps = {
  children?: JSX.Element;
};

export default function MainSection(props: SectionProps) {
  return (
    <div className="grid grid-cols-1 place-items-center h-8/12  my-2 tablet:grid-cols-2 tablet:my-2 desktop:grid-cols-3">
      {props.children}
    </div>
  );
}
