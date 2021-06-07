interface CodeExampleProps {
  code?: string;
}

export const CodeExample = (props: CodeExampleProps) => {
  return (
    <pre>
      <code>{props.code}</code>
    </pre>
  );
};
