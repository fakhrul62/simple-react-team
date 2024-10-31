/* eslint-disable react/prop-types */

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./Players.css"
import AvailablePlayers from "../AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";

const Players = ({ handleChoose }) => {
  return (
    <div className="w-10/12 mx-auto mb-16">
      <div>
        <div>
          <Tabs>
            <div className="flex justify-between">
              <h1 className="font-bold text-2xl">Available Players</h1>
              <TabList>
                <Tab>Available</Tab>
                <Tab>
                  Selected (<span>0</span>)
                </Tab>
              </TabList>
            </div>

            <TabPanel>
              <AvailablePlayers handleChoose={handleChoose}></AvailablePlayers>
            </TabPanel>
            <TabPanel>
              <SelectedPlayers handleChoose={handleChoose}></SelectedPlayers>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Players;
