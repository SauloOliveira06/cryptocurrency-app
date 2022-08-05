import card from '../../styles/card.module.css';
import row from '../../styles/row.module.css';
import bold from '../../styles/bold.module.css';
import width from '../../styles/width.module.css';
import small from '../../styles/text.module.css';

const CoinTrending = ({ coin }: any) => {

    return (
        <>
            <div className={card.card}>
                <div className={row.row}>
                    <span className={bold.semiBold}>{coin.score + 1}.</span>
                    <img src={coin.small} alt={coin.name} className={width.widthImg} />
                    <p>{coin.name}</p>
                    <small className={small.smallText}>({coin.symbol})</small>
                </div>
            </div>
        </>
    )
}

export default CoinTrending;