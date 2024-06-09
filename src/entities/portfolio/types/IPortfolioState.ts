import { ICoin } from '../../coins';

export interface IPortfolioState {
    coins: (ICoin & { count: number })[];
    summary: number;
}
