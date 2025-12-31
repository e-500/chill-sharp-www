import type { HLJSApi } from 'highlight.js';

let hljsPromise: Promise<HLJSApi> | null = null;

export function loadHighlightJs(): Promise<HLJSApi> {
  if (!hljsPromise) {
    hljsPromise = (async () => {
      const hljs = (await import('highlight.js/lib/core')).default;

      const { default: csharp } =
        await import('highlight.js/lib/languages/csharp');
      const { default: typescript } =
        await import('highlight.js/lib/languages/typescript');
      const { default: javascript } =
        await import('highlight.js/lib/languages/javascript');

      hljs.registerLanguage('csharp', csharp);
      hljs.registerLanguage('typescript', typescript);
      hljs.registerLanguage('javascript', javascript);

      //await import('highlightjs-line-numbers.js');

      return hljs;
    })();
  }

  return hljsPromise;
}
