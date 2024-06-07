interface ICoinIconProps {
    rank: string;
}

export function CoinIcon({ rank }: ICoinIconProps) {
    return (
        <div style={{ width: '24px', height: '24px' }}>
            <img
                src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${rank}.png`}
                alt=''
            />
        </div>
    );
}
