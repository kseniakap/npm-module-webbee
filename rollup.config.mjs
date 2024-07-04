import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';

export default {
    input: 'src/index.tsx',
    output: [
        {
            file: 'dist/bundle.cjs.js',
            format: 'cjs',
            sourcemap: true,
        },
        {
            file: 'dist/bundle.esm.js',
            format: 'esm',
            sourcemap: true,
        },
    ],
    plugins: [
        nodeResolve({
            extensions: ['.js', '.ts', '.tsx'],
        }),
        commonjs(),
        typescript({
            useTsconfigDeclarationDir: true,
        }),
        babel({
            extensions: ['.js', '.ts', '.tsx'],
            babelHelpers: 'bundled',
            presets: ['@babel/preset-react'],
        }),
    ],
    external: ['react', 'react-dom'],
};
