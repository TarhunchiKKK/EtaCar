import { ICoin } from '../../coins';

export interface IPortfolioState {
    coins: ICoin[];
    summary: number;
}
