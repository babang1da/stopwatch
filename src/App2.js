import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';
import Home from './panels/Home';
// import Stopwatch from "./panels/Stopwatch.js";

class App extends React.Component {



    render() {

			const [activePanel, setActivePanel] = useState('home');

			
        return (
					<View activePanel={activePanel}>

							</View>
        );
    }

	}
//
// const App = () => {
//
// 	const [activePanel, setActivePanel] = useState('home');
// 	const [fetchedUser, setUser] = useState(null);
// 	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
//
// 	// var [timer, setTimer] = useState({
// 	// 	timerOn: true,
// 	// 	timerTime: 40,
// 	// 	timerStart: 0
// 	// });
//
// 	var counter = setInterval(() => {
//
// 	// timer.timerTime = 44;
// 	timer.timerTime = Date.now() - timer.timerTime
// 	// App.setState();
// 	// setTimer({
// 		console.log("123");
//
//
// 	// 	timerOn: true,
// 	// 	timerTime: timer.timerTime,
// 	// 	timerStart: Date.now() - timer.timerTime
// 	// 	// timerTime: Date.now() - timer2.timerStart
// 	// });
// }, 10);
//
//
//
// var timer = {
// 	timerOn: true,
// 	timerTime: 1123,
// 	timerStart: 0
// };
// 	// var timer2 = null;
// const startTimer = e => {
//
// 			console.log("dfg");
//
//
//
// 			// setCounter(
// 			// 	);
// 					// timer.timerTime = 3;
//
// 	}
//
//
// // setCount()
// 	// thutimerTime  = timer.timerTime;
// 	var centiseconds = ("0" + (Math.floor(timer.timerTime / 10) % 100)).slice(-2);
// 	var seconds = ("0" + (Math.floor(timer.timerTime / 1000) % 60)).slice(-2);
// 	// let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
// 	// let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
//
// 	return (
//
// 		<View activePanel={activePanel}>
// 			<Home id='home' centiseconds={timer.timerTime} startTimer={startTimer}/>
// 			<Persik id='persik' go={centiseconds} />
// 		</View>
// 	);
// }

export default App;
