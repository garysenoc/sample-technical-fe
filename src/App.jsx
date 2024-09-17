import { useState } from "react";
import SettingsPanel from "./components/SettingsPanel";
import ProfileCard from "./components/ProfileCard";
import StatisticsGraph from "./components/StatisticsGraph";
import ActivityList from "./components/ActivityList";
import imgUrl from "./assets/profile.jpg";
import {
  xAxis,
  series,
  chartSettings,
  dataset,
  activities,
} from "./utils/data";

function App() {
  const [settings, setSettings] = useState({
    "Dark Mode": false,
    "Email Notification": true,
  });

  const handleSettingChange = (key, value) => {
    setSettings((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  return (
    <>
      <SettingsPanel
        settings={settings}
        onChange={handleSettingChange}
      />
      <div className='container m-auto px-4 mt-4 text-grey-darkest'>
        <div className='flex flex-wrap mb-8'>
          <ProfileCard
            name='Gary Lloyd M. Senoc'
            email='gsenoc@gmail.com'
            description='I am a full-stack software engineer, enthusiastic about crafting
            magical web and mobile application experiences. My expertise lies in
            building scalable systems, ensuring reliability, and shipping
            reliable applications. I am also a fast learner, always eager to
            adapt to new technologies and methodologies to enhance my skills and
            contribute effectively to projects.'
            imageUrl={imgUrl}
          />
          <StatisticsGraph
            dataset={dataset}
            xAxis={xAxis}
            series={series}
            chartSettings={chartSettings}
            valueFormatter={(value) => `${value} units`}
            width={600}
            height={400}
          />
          <ActivityList activities={activities} />
        </div>
      </div>
    </>
  );
}

export default App;

