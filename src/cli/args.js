const parseArgs = () => {
    const prefixArg = '--';
    const arrArgs = process.argv;
    const resultArr = [];

    for (let i = 0; i < arrArgs.length; i++) {
        if (arrArgs[i].startsWith(prefixArg)) {
            const keyWithoutDashed = arrArgs[i].replaceAll(prefixArg, '');
            const finishedString = ` ${keyWithoutDashed} is ${arrArgs[i + 1]}`;
            resultArr.push(finishedString);
        }
    }

    console.log(resultArr.toString());
};

parseArgs();