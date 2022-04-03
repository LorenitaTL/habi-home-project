export const RenderPayload = (props: { payload: any }) => {
  const entries = Object.entries(props.payload);
  const listItems = entries.map(([key, value], index) => (
    <p className="text-light" key={index}>
      {key}: {value}
    </p>
  ));
  return <div>{listItems}</div>;
};
