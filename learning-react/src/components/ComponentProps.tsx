type ComponentProps = {
  title: string;
  text: string;
}

export function ComponentWithProps(props: ComponentProps) {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  )
}