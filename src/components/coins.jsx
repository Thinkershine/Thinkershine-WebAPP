import React, { Component } from "react";
import {
  formatCurrency,
  formatDateForAPI,
  formatDateWithWordForMonth
} from "./../utils/stringFormats";
import Trend from "react-trend";

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
      ohlcData: [],
      historicalOhlcData: [],
      daysOfHistory: 7
    };

    this.state.increaseTrendLine = this.increaseTrendLine.bind(this);
    this.state.decreaseTrendLine = this.decreaseTrendLine.bind(this);
    this.state.getNewOHLCHistory = this.getNewOHLCHistory.bind(this);
    this.state.setHistoryTrendLine = this.setHistoryTrendLine.bind(this);
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

    let daysOfHistory = this.state.daysOfHistory;
    this.getNewOHLCHistory(daysOfHistory);

    // this.getHistoricalCoinData("btc-bitcoin", "2019-01-01", 10, "1d");
  }

  getNewOHLCHistory(daysOfHistory) {
    this.getHistoricalOHLC(
      "btc-bitcoin",
      formatDateForAPI(Date.now(), daysOfHistory),
      daysOfHistory
    );

    this.getHistoricalOHLC(
      "xrp-xrp",
      formatDateForAPI(Date.now(), daysOfHistory),
      daysOfHistory
    );

    this.getHistoricalOHLC(
      "ltc-litecoin",
      formatDateForAPI(Date.now(), daysOfHistory),
      daysOfHistory
    );

    this.getHistoricalOHLC(
      "neo-neo",
      formatDateForAPI(Date.now(), daysOfHistory),
      daysOfHistory
    );

    this.getHistoricalOHLC(
      "kcs-kucoin-shares",
      formatDateForAPI(Date.now(), daysOfHistory),
      daysOfHistory
    );
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.state.daysOfHistory !== nextState.daysOfHistory) {
      this.state.getNewOHLCHistory(nextState.daysOfHistory);
    }
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

  displayFavouriteCoins(ohlcData) {
    const { favouriteCoinsToDisplay } = this.state;
    let coinsToDisplay = [];

    let dataArrayForTrendDrawing = this.state.historicalOhlc;

    if (favouriteCoinsToDisplay.length > 1) {
      coinsToDisplay = favouriteCoinsToDisplay.map(coin => {
        let coinData = dataArrayForTrendDrawing[coin.id];
        let dataForTrend = [];
        for (let i = 0; i < coinData.length; i += 1) {
          dataForTrend[i] = coinData[i].close;
        }

        return (
          <li key={coin.id} className="list-group-item list-group-item-success">
            <span style={{ float: "left" }}>{coin.name}</span>
            <span style={{ float: "right" }}>
              Price ${formatCurrency(ohlcData[coin.id]["ohlc"].close)}
            </span>
            {this.state.daysOfHistory} Day Trend
            <Trend
              smooth
              autoDraw
              autoDrawDuration={2000}
              autoDrawEasing="ease-out"
              gradient={["purple", "violet"]}
              radius={6.6}
              strokeWidth={3.3}
              strokeLinecap={"round"}
              data={dataForTrend}
            />
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
            volume: result[0].volume,
            time_open: result[0].time_open,
            time_close: result[0].time_close
          }
        };
        tickerData[forTicker] = ticker;

        this.setState({ ohlcData: tickerData });
      });
  }

  getHistoricalOHLC(forTicker, fromDate, days) {
    const { paprikaAPI } = this.state;
    const pathSearch = "/coins";
    const historicalPath = "/ohlcv/historical";
    fetch(
      `${paprikaAPI}${pathSearch}/${forTicker}${historicalPath}?start=${fromDate}&limit=${days}`
    )
      .then(response => response.json())
      .then(result => {
        const tickerData = this.state.historicalOhlcData;

        let historicalOhlcData = [];
        for (let i = 0; i < days; i += 1) {
          historicalOhlcData[i] = {
            close: result[i].close,
            high: result[i].high,
            low: result[i].low,
            open: result[i].open,
            market_cap: result[i].market_cap,
            volume: result[i].volume,
            time_open: result[i].time_open,
            time_close: result[i].time_close
          };
        }

        let ticker = historicalOhlcData;
        tickerData[forTicker] = ticker;

        this.setState({ historicalOhlc: tickerData });
      });
  }

  getHistoricalCoinData(forTicker, fromDate, days, interval) {
    const { paprikaAPI } = this.state;
    const pathSearch = "/tickers";
    const historicalPath = "/historical";

    fetch(
      `${paprikaAPI}${pathSearch}/${forTicker}${historicalPath}?start=${fromDate}&limit=${days}&interval=${interval}`
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(result => console.log("HISTORICAL RESULT", result));
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

  increaseTrendLine() {
    const { daysOfHistory } = this.state;

    let newHistory = daysOfHistory + 1;
    if (newHistory > 360) {
      return;
    }
    this.setState({ daysOfHistory: newHistory });
  }

  decreaseTrendLine() {
    const { daysOfHistory } = this.state;
    let newHistory = daysOfHistory - 1;
    if (newHistory <= 1) {
      return;
    }

    this.setState({ daysOfHistory: newHistory });
  }

  setHistoryTrendLine(days) {
    this.setState({ daysOfHistory: days });
  }

  render() {
    const { paprika, coins, favouriteCoins, btc, ohlcData } = this.state;

    if (
      !paprika ||
      !coins ||
      !favouriteCoins ||
      !btc ||
      !ohlcData["btc-bitcoin"]
    ) {
      return null;
    }

    return (
      <div className="row">
        <div className="row container" style={{ marginTop: 20 }}>
          <ul className="nav" style={{ margin: "0 auto" }}>
            <li className="nav-item">
              <button
                className="btn btn-success nav-item"
                onClick={this.state.increaseTrendLine}
              >
                + Day
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-success"
                onClick={this.state.decreaseTrendLine}
              >
                - Day
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-success"
                onClick={() => this.state.setHistoryTrendLine(30)}
              >
                30 Days
              </button>
            </li>
            <li className="nav-item">
              {" "}
              <button
                className="btn btn-success"
                onClick={() => this.state.setHistoryTrendLine(60)}
              >
                60 Days
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-success"
                onClick={() => this.state.setHistoryTrendLine(90)}
              >
                90 Days
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-success"
                onClick={() => this.state.setHistoryTrendLine(180)}
              >
                180 Days
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-success"
                onClick={() => this.state.setHistoryTrendLine(360)}
              >
                360 Days
              </button>
            </li>
            <li className="nav-item">
              {" "}
              <button className="btn btn-danger" onClick={this.props.onClose}>
                CLOSE
              </button>
            </li>
          </ul>
        </div>

        <div className="row container">
          <div className="col">
            <h3>Crypto</h3>
            <ul className="list-group">
              <li className="list-group-item list-group-item-success">
                <p>Market Cap: ${formatCurrency(paprika.market_cap_usd)}</p>
              </li>
              <li className="list-group-item list-group-item-success">
                <p>Daily Volume: ${formatCurrency(paprika.volume_24h_usd)}</p>
              </li>
              <li className="list-group-item list-group-item-success">
                <p>
                  BTC Dominance: <br />
                  {parseFloat(paprika.bitcoin_dominance_percentage).toFixed(2) +
                    "%"}
                </p>
              </li>
            </ul>

            <p />
            <p />
          </div>

          <div className="col">
            {/* <h3>COINS : {coins != "" && coins.length}</h3>
          <ul className="list-group">{this.displayCoins()}</ul> */}
            <h3>{formatDateWithWordForMonth(btc[0].time_open)}</h3>
            <ul className="list-group">
              {this.displayFavouriteCoins(this.state.ohlcData)}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Coins;
