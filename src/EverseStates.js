import { atom } from 'recoil';

// All app wide states (atom) are here
export const currentAppTime = atom({
  key: 'testCurrentTimeState',
  default: '',
});

/*
An example of how recoil is used in the desired component

Step #1 Create then export atom(state)

export const stateName = atom({
  key: 'testUniqueKey',
  default: ''<any> 
});
------------------------------------------------
Step #2 Import dependencies in the component to change state 
------------------------------------------------

import { useRecoilState } from 'recoil';
import { stateName } from '../../EverseStates';
...

------------------------------------------------
Step #3 Define and use the state hook as a normal React state hook ie useRecoilState hook
------------------------------------------------
const [count, setCount] = useRecoilState(stateName);

  setInterval(function () {
    setCount(()=> count++);
  }, 1000);

*/
