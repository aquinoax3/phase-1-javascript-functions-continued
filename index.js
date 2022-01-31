function saturdayFun(event = 'roller-skate') {
  return `This Saturday, I want to ${event}!`;  
}

const mondayWork = function (event = 'go to the office'){
    return `This Monday, I will ${event}.`;
};


function wrapAdjective(string = '*') {
    return function (adj = 'special') {
        return `You are ${string}${adj}${string}!`
    }
} 

const encouragingPromptFunction = wrapAdjective("*")("a hard worker");