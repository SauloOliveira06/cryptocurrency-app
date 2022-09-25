import { Link } from 'react-router-dom';
import { TrendingDown, TrendingUp } from '~/assets/icons/TrendingIcons';
import { currencyFormat } from '../utils';
import itemCoin from '~/styles/itemsCoin.module.css';

const Coin = ({ coin }: any) => {
    return (
        <Link to={`/coin/${coin.id}`}>
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
        </Link>
    )
}

export default Coin;