import CoinDetail from "~/components/CoinDetail/CoinDetail";
import HistoryChart from "~/components/HistoryChart/HistoryChart";

const CryptoDetail = () => {
    return (
        <div>
            <HistoryChart />
            <CoinDetail />
        </div>
    )
}

export default CryptoDetail;