import useAxios from '~/hooks/useAxios';
import style from '~/styles/typography.module.css';
import CoinTrending from '../CoinTrending/CoinTrending';


const Trending = () => {
    const { response } = useAxios('search/trending');

    return (
        <>
            <h1 className={style.textHeader}>Trending</h1>
            {response && response.coins.map((coin: any) => <CoinTrending key={coin.item.coin_id} coin={coin.item} />)}
        </>
    )
}

export default Trending;