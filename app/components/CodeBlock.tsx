import { Highlight, themes } from 'prism-react-renderer';
import React from 'react';

interface CodeBlockProps {
    children: string | React.ReactNode;
    language?: string;
}

export default function CodeBlock({ children, language = "tsx" }: CodeBlockProps) {
    const code = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';

    return (
        <Highlight
            theme={themes.nightOwl}
            code={code.trim()}
            language={language as any}
        >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={`${className} p-4 rounded-lg overflow-x-auto`} style={style}>
                    {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({ line })}>
                            <span className="mr-4 text-gray-500">{i + 1}</span>
                            {line.map((token, key) => (
                                <span key={key} {...getTokenProps({ token })} />
                            ))}
                        </div>
                    ))}
                </pre>
            )}
        </Highlight>
    );
}
