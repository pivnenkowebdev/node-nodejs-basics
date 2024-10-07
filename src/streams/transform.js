const transform = async () => {
    process.stdin.setEncoding('utf-8');
    process.stdin.on('data', (chunk) => {
        const reversed = chunk.split('').reverse().join('');
        process.stdout.write(reversed);
    })
};

await transform();