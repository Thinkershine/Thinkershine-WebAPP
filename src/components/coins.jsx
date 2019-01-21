import React, { Component } from "react";
import { formatCurrency, formatDate } from "./../utils/stringFormats";

class Coins extends Component {
  state = {};

  constructor(props) {
    super(props);

    this.state = {
      paprikaAPI: "https://api.coinpaprika.com/v1",
      paprika: "",
      coinToDisplay: "",
      coins: [],
      favouriteCoins: [
        "btc-bitcoin",
        "xrp-xrp",
        "ltc-litecoin",
        "neo-neo",
        "kcs-kucoin-shares"
      ],
      favouriteCoinsToDisplay: [],
      btc: "",
      ticker: "",
      ohlcData: []
    };
  }

  componentDidMount() {
    this.getCoinPaprika();
    this.fetchCoins();
    this.fetchFavouriteCoins();
    //this.fetchCoin("btc-bitcoin"); // xrp-xrp // ltc-litecoin // neo-neo // kcs-kucoin-shares
    this.getBTC();
    this.getOHLC("btc-bitcoin");
    this.getOHLC("xrp-xrp");
    this.getOHLC("ltc-litecoin");
    this.getOHLC("neo-neo");
    this.getOHLC("kcs-kucoin-shares");
  }

  getCoinPaprika() {
    const { paprikaAPI } = this.state;
    const pathSearch = "/global";
    fetch(`${paprikaAPI}${pathSearch}`)
      .then(response => response.json())
      .then(result => this.setState({ paprika: result }));
  }

  fetchCoin(ticker) {
    const { paprikaAPI } = this.state;
    const pathSearch = "/coins";
    fetch(`${paprikaAPI}${pathSearch}`)
      .then(response => response.json())
      .then(result => this.setState({ coinToDisplay: result }));
  }

  getFavouriteCoin(ticker) {
    fetch(`https://api.coinpaprika.com/v1/coins/${ticker}`)
      .then(response => response.json())
      .then(result => {
        console.log("RESULT", result);

        return result;
      });
  }

  fetchFavouriteCoins() {
    const { favouriteCoins } = this.state;

    for (let i = 0; i < favouriteCoins.length; i += 1) {
      fetch(`https://api.coinpaprika.com/v1/coins/${favouriteCoins[i]}`)
        .then(response => response.json())
        .then(result => {
          //console.log("RESULT", result);
          let favouriteCoins = this.state.favouriteCoinsToDisplay;
          favouriteCoins[favouriteCoins.length] = result;
          this.setState({ favouriteCoinsToDisplay: favouriteCoins });
        });
    }
  }

  fetchCoins() {
    const { paprikaAPI } = this.state;
    const pathSearch = "/coins";
    fetch(`${paprikaAPI}${pathSearch}`)
      .then(response => response.json())
      .then(result => this.setState({ coins: result }));
  }

  displayCoins() {
    let coinsToDisplay = "";
    if (this.state.coins.length > 1) {
      coinsToDisplay = this.state.coins.map(coin => {
        return (
          <li key={coin.id} className="list-group-item">
            {coin.name}
          </li>
        );
      });
    }

    return coinsToDisplay;
  }

  displayFavouriteCoins() {
    const { favouriteCoinsToDisplay } = this.state;
    let coinsToDisplay = [];
    if (favouriteCoinsToDisplay.length > 1) {
      coinsToDisplay = favouriteCoinsToDisplay.map(coin => {
        return (
          <li key={coin.id} className="list-group-item">
            {coin.name}
          </li>
        );
      });
    }
    return coinsToDisplay;
  }

  getOHLC(forTicker) {
    const { paprikaAPI } = this.state;
    const pathSearch = "/coins";
    fetch(`${paprikaAPI}${pathSearch}/${forTicker}/ohlcv/latest`)
      .then(response => response.json())
      .then(result => {
        const tickerData = this.state.ohlcData;
        let ticker = {
          ohlc: {
            close: result[0].close,
            high: result[0].high,
            low: result[0].low,
            open: result[0].open,
            market_cap: result[0].market_cap,
            volume: result[0].volume
          }
        };
        tickerData[forTicker] = ticker;

        this.setState({ ohlcData: tickerData });
      });
  }

  getBTC() {
    fetch(`https://api.coinpaprika.com/v1/coins/btc-bitcoin/ohlcv/latest`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(result => this.setState({ btc: result }));
  }

  render() {
    const { paprika, coins, favouriteCoins, btc, ohlcData } = this.state;

    if (!paprika || !coins || !favouriteCoins || !btc || !ohlcData["xrp-xrp"]) {
      return null;
    }

    return (
      <div className="row">
        <div className="col">
          <h2>Crypto</h2>
          <p>Market Cap: ${formatCurrency(paprika.market_cap_usd)}</p>
          <p>Daily Volume: ${formatCurrency(paprika.volume_24h_usd)}</p>
          <p>
            BTC Dominance:{" "}
            {parseFloat(paprika.bitcoin_dominance_percentage).toFixed(2) + "%"}
          </p>
        </div>

        <div className="col">
          {/* <h3>COINS : {coins != "" && coins.length}</h3>
          <ul className="list-group">{this.displayCoins()}</ul> */}
          <h3>COINS @ {formatDate(btc[0].time_open)}</h3>
          <ul className="list-group">{this.displayFavouriteCoins()}</ul>
          <p>BTC ${formatCurrency(btc[0].close)}</p>
          <p>XRP ${formatCurrency(ohlcData["xrp-xrp"]["ohlc"].close)}</p>
        </div>
      </div>
    );
  }
}

export default Coins;
