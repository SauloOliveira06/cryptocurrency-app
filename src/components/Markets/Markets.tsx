import { Key } from "react";
import useAxios from "../../hooks/useAxios";
import Coin from "../Coin/Coin";

const Markets = () => {
    const { response } = useAxios('coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
    console.log(response);

    return (
        <>
            <section>
                <h2>Markets</h2>
                {response && response.map((coin: any) => <Coin key={coin.id} coin={coin} />)}
            </section>
        </>
    )
}

export default Markets;