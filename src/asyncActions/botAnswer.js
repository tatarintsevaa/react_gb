import {addMessage} from "../store/messageListSlice";

export const botAnswer = store => next => action => {
    const {dispatch} = store;
    setTimeout(() => {
        if (action?.type === 'messageList/addMessage' && action?.payload?.author !== 'bot') {
            dispatch(addMessage({chatId: action?.payload?.chatId, text: 'message delivered', author: 'bot'}))
        }
    }, 1000)

    return next(action);
}

