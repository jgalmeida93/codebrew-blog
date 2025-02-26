import { FC } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  children: string;
  className?: string;
}

const CodeBlock: FC<CodeBlockProps> = ({ children, className }) => {
  const language = className?.replace("language-", "") || "javascript";

  return (
    <SyntaxHighlighter language={language} style={tomorrow}>
      {children}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
