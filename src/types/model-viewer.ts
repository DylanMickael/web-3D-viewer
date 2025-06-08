declare module 'react' {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace JSX {
      interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          src: string;
          alt?: string;
          'auto-rotate'?: boolean;
          'camera-controls'?: boolean;
        },
        HTMLElement
      >;
    }
  }
}