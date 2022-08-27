import typescript from 'rollup-plugin-typescript2'
import { uglify } from 'rollup-plugin-uglify';
import pkg from './package.json'

const config = {
    input: './index.ts',
    output: [
        {
            file: pkg.main,
            format: 'umd',
            name: 'community-coin-types'
        },
    ],
    plugins: [
        typescript({
            tsconfig: 'tsconfig.json',
            tsconfigOverride: { compilerOptions: { module: 'es2015' } },
        }),
        uglify()
    ]
}

export default config