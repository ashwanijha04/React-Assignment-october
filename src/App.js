import './App.scss';
import ProfileCard from './components/ProfileCard';
import MaterialCard from './components/MaterialCard';

import {  Card, Avatar  } from "antd";
import {  EditOutlined, EllipsisOutlined, SettingOutlined  } from "@ant-design/icons";
import ProfileListView from './components/ProfileListView';
const { Meta } = Card;

function App() {
  return (
      <ProfileListView/>
  );
}

export default App;
