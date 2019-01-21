import React, { Component } from "react";
import { formatCurrency } from "./../utils/stringFormats";

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
      btc: ""
    };
  }

  componentDidMount() {
    this.getCoinPaprika();
    this.fetchCoins();
    this.fetchFavouriteCoins();
    this.fetchCoin("btc-bitcoin"); // xrp-xrp // ltc-litecoin // neo-neo // kcs-kucoin-shares
    // this.getBTC();
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
      .then(result =>
        this.setState({ coins: result }, () => console.log(this.state.coins))
      );
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

  getBTC() {
    fetch(`https://api.coinpaprika.com/v1/coins/btc-bitcoin/ohlcv/latest/`, {
      mode: "cors",
      method: "GET",
      credentials: "omit"
    })
      .then(response => {
        console.log("RES", response.status);
        console.log("RES", response.statusText);
        console.log("RES", response.headers);
        console.log("RES", response.url);
        response.json();
      })
      .then(result => {
        console.log("RESULT BTC", result);
        this.setState({ btc: result });
      });
  }

  render() {
    const { paprika, coins, coinToDisplay, favouriteCoins } = this.state;

    if (!paprika || !coins || !coinToDisplay || !favouriteCoins) {
      return null;
    }

    console.log("BTC", this.state.btc);
    return (
      <div className="row">
        <div className="col">
          <h2>Crypto</h2>
          <p>Market Cap: ${formatCurrency(paprika.market_cap_usd)}</p>
          <p>VOLUME: ${formatCurrency(paprika.volume_24h_usd)}</p>
          <p>
            BTC Dominance:{" "}
            {parseFloat(paprika.bitcoin_dominance_percentage).toFixed(2) + "%"}
          </p>
        </div>

        <div className="col">
          {/* <h3>COINS : {coins != "" && coins.length}</h3>
          <ul className="list-group">{this.displayCoins()}</ul> */}
          <h3>COINS</h3>
          <ul className="list-group">{this.displayFavouriteCoins()}</ul>
          <p>BTC{this.state.btc}</p>
        </div>
      </div>
    );
  }
}

export default Coins;
