import { createGlobalStyle } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Noto Sans JP';
        src: url('src/assets/fonts/NotoSansJP-Light.otf');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'Noto Sans JP';
        src: url('src/assets/fonts/NotoSansJP-Regular.otf');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Noto Sans JP';
        src: url('src/assets/fonts/NotoSansJP-Medium.otf');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'Noto Sans JP';
        src: url('src/assets/fonts/NotoSansJP-Bold.otf');
        font-weight: 700;
        font-style: normal;
    }

    body {
        margin: 0;
        font-family: 'Noto Sans JP', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
            'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
    }
`;
