import React, { Component } from "react";
import { formatCurrency } from "./../utils/stringFormats";

class Coins extends Component {
  state = {};

  componentDidMount() {
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
      favouriteCoinsToDisplay: []
    };

    this.getCoinPaprika();
    this.fetchCoins();
    this.fetchFavouriteCoins();
    this.fetchCoin("btc-bitcoin"); // xrp-xrp // ltc-litecoin // neo-neo // kcs-kucoin-shares
  }

  getCoinPaprika() {
    const paprikaAPI = this.state;
    fetch(`https://api.coinpaprika.com/v1/global`)
      .then(response => response.json())
      .then(result => this.setState({ paprika: result }));
  }

  fetchCoin(ticker) {
    fetch(`https://api.coinpaprika.com/v1/coins`)
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
          console.log("RESULT", result);
          let favouriteCoins = this.state.favouriteCoinsToDisplay;
          favouriteCoins[favouriteCoins.length] = result;
          this.setState({ favouriteCoinsToDisplay: favouriteCoins }, () =>
            console.log(
              "FAVOURITE COINS TO DISPLAY ",
              this.state.favouriteCoinsToDisplay
            )
          );
        });
    }
  }

  fetchCoins() {
    const paprikaAPI = this.state;
    fetch(`https://api.coinpaprika.com/v1/coins`)
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
    console.log("FAV COINS", favouriteCoinsToDisplay);
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

  render() {
    const { paprika, coins, coinToDisplay, favouriteCoins } = this.state;

    if (!paprika || !coins || !coinToDisplay) {
      return null;
    }
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
        </div>
      </div>
    );
  }
}

export default Coins;
