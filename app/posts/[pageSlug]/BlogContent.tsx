// app/posts/[pageSlug]/BlogContent.tsx (Client Component)
'use client';

import { useEffect, useRef } from 'react';
import Prism from 'prismjs';

// Import Prism theme and components
// import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/themes/prism-okaidia.css';   // Okaidia (popular dark)

// Import language components
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-go';


// Import plugins (optional)
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/plugins/toolbar/prism-toolbar.js';
import 'prismjs/plugins/toolbar/prism-toolbar.css';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js';

interface BlogContentProps {
    content: string;
    className?: string;
}

export default function BlogContent({
    content,
    className = 'max-w-full mt-6 prose prose-hr:my-4 prose-p:tracking-tighter prose-code:text-white'
}: BlogContentProps) {
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (contentRef.current) {
            // Process all code blocks
            const codeBlocks = contentRef.current.querySelectorAll('pre code[class*="language-"]');

            codeBlocks.forEach((codeBlock) => {
                const preElement = codeBlock.parentElement;
                if (preElement) {
                    // Add line numbers class
                    preElement.classList.add('line-numbers');

                    // Add language label
                    const languageClass = Array.from(codeBlock.classList)
                        .find(cls => cls.startsWith('language-'));

                    if (languageClass) {
                        const language = languageClass.replace('language-', '');
                        preElement.setAttribute('data-language', language);
                    }
                }

                // Apply Prism highlighting
                Prism.highlightElement(codeBlock as Element);
            });

            // Also handle code blocks without explicit language classes
            const genericCodeBlocks = contentRef.current.querySelectorAll('pre code:not([class*="language-"])');
            genericCodeBlocks.forEach((codeBlock) => {
                // Add a default language class
                codeBlock.classList.add('language-javascript');

                const preElement = codeBlock.parentElement;
                if (preElement) {
                    preElement.classList.add('line-numbers');
                    preElement.setAttribute('data-language', 'javascript');
                }

                Prism.highlightElement(codeBlock as Element);
            });
        }
    }, [content]);

    return (
        <>
            <div
                ref={contentRef}
                className={className}
                dangerouslySetInnerHTML={{ __html: content }}
            />

            <style jsx global>{`
        /* Custom Prism styling */
        @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500&display=swap');
        
        pre[class*="language-"] {
          position: relative;
          margin: 1.5rem 0;
          padding: 1.5rem;
          border-radius: 8px;
          font-family: 'Fira Code', 'Consolas', 'Monaco', monospace !important;
          font-size: 14px;
          line-height: 1.6;
          overflow-x: auto;
          background: #2d3748 !important;
          border: 1px solid #4a5568;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        code[class*="language-"] {
          font-family: 'Fira Code', 'Consolas', 'Monaco', monospace !important;
          font-size: 14px;
        }

        /* Language label */
        pre[class*="language-"]:before {
          content: attr(data-language);
          position: absolute;
          top: 0;
          right: 0;
          padding: 0.25rem 0.5rem;
          font-size: 11px;
          text-transform: uppercase;
          background: #e53e3e;
          color: white;
          border-bottom-left-radius: 4px;
          font-weight: 500;
          letter-spacing: 0.5px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        /* Line numbers styling */
        .line-numbers .line-numbers-rows {
          border-right: 1px solid #4a5568;
          padding-right: 1em;
        }

        .line-numbers-rows > span:before {
          color: #718096;
          font-size: 12px;
        }

        /* Inline code styling */
        :not(pre) > code {
          background: #f7fafc;
          border: 1px solid #e2e8f0;
          border-radius: 4px;
          padding: 0.2em 0.4em;
          font-size: 0.85em;
          color: #e53e3e;
          font-family: 'Fira Code', 'Consolas', 'Monaco', monospace !important;
        }

        /* Responsive design */
        @media (max-width: 640px) {
          pre[class*="language-"] {
            margin-left: -1rem;
            margin-right: -1rem;
            border-radius: 0;
            padding: 1rem;
          }
        }

        /* Dark mode support */
        @media (prefers-color-scheme: dark) {
          :not(pre) > code {
            background: #2d3748;
            border-color: #4a5568;
            color: #f7fafc;
          }
        }
      `}</style>
        </>
    );
}