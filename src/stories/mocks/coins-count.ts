function getMockCoinsCount() {
    const data = [];
    for (let i = 0; i < 20; i++) {
        data.push({
            id: 'bitcoin',
            rank: '1',
            symbol: 'BTC',
            name: 'Bitcoin',
            supply: '19710496.0000000000000000',
            maxSupply: '21000000.0000000000000000',
            marketCapUsd: '1380492392708.8070943113182144',
            volumeUsd24Hr: '4741915962.3139489179389234',
            priceUsd: 70038.440063,
            changePercent24Hr: '0.3674547043358138',
        });
    }
    return { data, timestamp: 1718094908188 };
}

export const MockCoinsCount = getMockCoinsCount();
