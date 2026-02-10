import * as fs from 'fs';

export async function getVersion(): Promise<number> {
    const contadorFile = './contador.json';
    let localCounter = 1;

    if (process.env.GITHUB_RUN_NUMBER) {
        return parseInt(process.env.GITHUB_RUN_NUMBER);
    }

    if (fs.existsSync(contadorFile)) {
        const data = JSON.parse(fs.readFileSync(contadorFile, 'utf-8'));
        localCounter = data.ultimoNumero + 1;
    }

    fs.writeFileSync(contadorFile, JSON.stringify({ ultimoNumero: localCounter }));
    return localCounter;
}