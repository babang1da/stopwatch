import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import "../App.css";

import { View, Title} from '@vkontakte/vkui';
// import Home from './App';


const Home = ({ id, timer, startTimer,stopTimer,resetTimer}) => (

	<Panel id={id, timer, startTimer,stopTimer,resetTimer}>

		<PanelHeader>Секундомер</PanelHeader>

  <Div className="Stopwatch">
  <Title level="1" weight="bold" style={{ marginBottom: 16, marginTop:100}}>
	{

		("0" + (Math.floor(timer.timerTime / 60000) % 60)) + ":" +
		("0" + (Math.floor(timer.timerTime / 1000) % 60)).slice(-2) + ":"+
		("0" + (Math.floor(timer.timerTime / 10) % 100)).slice(-2)

}
	</Title>
	</Div>
		<Div className="Stopwatch">

		{timer.timerOn === false && timer.timerTime === 0 && (
				<Button 	style={{ margin: 2}} onClick={startTimer}>Старт</Button>
			)}

			{timer.timerOn === true && (
				<Button 	style={{ margin: 2}} onClick={stopTimer}>Стоп</Button>
			)}

			{timer.timerOn === false && timer.timerTime > 0 && (
				<Button 	style={{ margin: 2}} onClick={startTimer}>Продолжить</Button>
			)}

			{timer.timerOn === false && timer.timerTime > 0 && (
				<Button 	style={{ margin: 2}} onClick={resetTimer}>Сбросить</Button>
			)}

		</Div>

	</Panel>




);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
