import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';
import Home from './panels/Home';


const App = () => {

	const [activePanel, setActivePanel] = useState('home');

	var [timerState, setTimerState] = useState({
		timerOn: false,
		timerTime: 0,
		timerStart: 0
	});

var [counterTimer, setCounterTimer] = useState()


useEffect(() => {

  // setTimerState({
  //     timerOn: false,
  //     timerStart: Date.now(),
  //     timerTime: 0
  //   });


});



const startTimer = e => {

  
    setTimerState({
          timerOn: true,
          timerTime: timerState.timerTime,
          timerStart: Date.now() - timerState.timerTime
      });


      setCounterTimer(setInterval(() => {

        setTimerState({
          timerOn: true,
          timerTime: Date.now() - timerState.timerStart,
          timerStart: timerState.timerStart
        });

    }, 10));

}


  const stopTimer = () => {

    setTimerState({
      timerOn: false,
      timerTime: timerState.timerTime,
      timerStart: timerState.timerStart
    });

    clearInterval(counterTimer);


  };

  const resetTimer = () => {

    // console.log("reset");

    clearInterval(counterTimer);

    setTimerState({
        timerOn: false,
        timerStart: Date.now(),
        timerTime: 0
      });


    // clearInterval(counterTimer);


    };
	return (

		<View activePanel={activePanel}>
			<Home id='home' timer={timerState} startTimer={startTimer} stopTimer={stopTimer} resetTimer={resetTimer}/>
		</View>
	);
}

export default App;
