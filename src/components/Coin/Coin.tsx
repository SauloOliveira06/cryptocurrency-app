import { TrendingDown, TrendingUp } from '../../assets/icons/TrendingIcons';
import itemCoin from '../../styles/itemsCoin.module.css';
import { currencyFormat } from '../utils';

const Coin = ({ coin }: any) => {
    console.log(coin);
    return (
        <>
            <div className={itemCoin.gridItemsCoin}>
                <div className={itemCoin.itemCoin}>
                    <img className={itemCoin.imgCripto} src={coin.image} alt={coin.name} />
                    <p>{coin.name}</p>
                    <span className={itemCoin.textSmall}>({coin.symbol})</span>
                </div>
                <span className={itemCoin.currencyFormat}>{currencyFormat(coin.current_price)}</span>
                <span className={itemCoin.currencyFormat && coin.price_change_percentage_24h < 0 ? `${itemCoin.redText}` : `${itemCoin.greenText}`}>
                    {coin.price_change_percentage_24h < 0 ? <TrendingDown /> : <TrendingUp />}
                    {coin.price_change_percentage_24h}
                </span>
            </div>
        </>
    )
}

export default Coin;