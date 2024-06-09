import { CoinHistoryPeriod } from '../../types/CoinHistoryPeriod';

export class CoinHistoryQueryArgument {
    public id: string;
    public start: number;
    public end: number;
    public interval: 'm15' | 'h2' | 'h6';

    constructor(id: string, period: CoinHistoryPeriod) {
        switch (period) {
            case CoinHistoryPeriod.Day:
                this.start = Date.now() - 24 * 60 * 60 * 1000;
                this.interval = 'h6';
                break;
            case CoinHistoryPeriod.HaftDay:
                this.start = Date.now() - 12 * 60 * 60 * 1000;
                this.interval = 'h2';
                break;
            case CoinHistoryPeriod.Hour:
                this.start = Date.now() - 60 * 60 * 1000;
                this.interval = 'm15';
                break;
        }
        this.end = Date.now();
        this.id = id;
    }

    get params() {
        return {
            start: this.start,
            end: this.end,
            interval: this.interval,
        };
    }
}
