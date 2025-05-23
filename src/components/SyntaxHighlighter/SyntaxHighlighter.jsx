import { useEffect, useRef } from "react";
import hljs from "highlight.js/lib/core";

// Import only the languages you need
import javascript from "highlight.js/lib/languages/javascript";
import html from 'highlight.js/lib/languages/xml';

// Import a theme (CSS styles for syntax)
import "highlight.js/styles/atom-one-dark.css";

// Register the languages with highlight.js
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("xml", html);


function SyntaxHighlighter ({ language, code }) {
  const codeRef = useRef();

  useEffect(() => {
    hljs.highlightElement(codeRef.current);
  }, [language, code]);

  return (
    <pre>
      <code ref={codeRef} className={`language-${language}`}>
        {code}
      </code>
    </pre>
  );
};

export default SyntaxHighlighter;
