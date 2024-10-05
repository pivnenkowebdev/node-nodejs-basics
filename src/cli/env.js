const parseEnv = () => {
    const rsPrefix = 'RSS_';
    const objEnv = process.env;
    for (const env in objEnv) {
        if (env.startsWith(rsPrefix)) {
            console.log(`${env}=${objEnv[env]}`);
        }
    }
}

parseEnv();