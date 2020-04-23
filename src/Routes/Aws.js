import React, { Component } from "react";
import GlobalStyles from "Components/GlobalStyles";
import AWS from "aws-sdk";
import dotenv from "dotenv";
dotenv.config();

class Aws extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mturkAccountBalance: null,
    };
  }

  componentDidMount() {
    this.getAccountBalance();
  }

  getAccountBalance() {
    AWS.config.update({
      accessKeyId: process.env.REACT_APP_AWS_KEY,
      secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY,
      region: "us-east-1",
    });

    const endpoint = "https://mturk-requester-sandbox.us-east-1.amazonaws.com";

    const mTurkClient = new AWS.MTurk({ endpoint: endpoint });
    mTurkClient.getAccountBalance((err, data) => {
      if (err) {
        console.warn("Error making the mTurk API call:", err);
      } else {
        // The call was a success
        const balance = `$${data.AvailableBalance}`;
        this.setState({ mturkAccountBalance: balance });
      }
    });
  }
  render() {
    var accountBalanceToDisplay = "loading...";
    if (this.state.mturkAccountBalance != null) {
      accountBalanceToDisplay = this.state.mturkAccountBalance;
    }

    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to my MTurk application</h1>
        </header>
        <p className="App-intro">
          Your account balance is {accountBalanceToDisplay}
        </p>
        <form
          name="mturk_form"
          method="post"
          id="mturk_form"
          action="https://www.mturk.com/mturk/externalSubmit"
        >
          <input type="hidden" value="" name="assignmentId" id="assignmentId" />
          <h1>What's up?</h1>
          <p>
            <textarea name="comment" cols="80" rows="3"></textarea>
          </p>
          <p>
            <input type="submit" id="submitButton" value="Submit" />
          </p>
        </form>
        <script language="Javascript">turkSetAssignmentID();</script>
      </div>
    );
  }
}

export default Aws;
