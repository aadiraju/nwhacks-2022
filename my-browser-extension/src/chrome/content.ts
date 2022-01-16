import {ChromeMessage, Sender} from "../types";

const messagesFromReactAppListener = (message: ChromeMessage, sender: any, response: any) => {
    console.log('[content.js]. Message received', {
        message,
        sender,
    })

    if (
        sender.id === chrome.runtime.id &&
        message.from === Sender.React &&
        message.message === 'Hello from React') {
        response('Hello from content.js');
    }

    if (
        sender.id === chrome.runtime.id &&
        message.from === Sender.React &&
        message.message === "delete images") {

        const logo = document.getElementsByTagName('img');
        for (let i = 0; i < logo.length; i++) {
            logo[i]?.parentElement?.removeChild(logo[i])
        }
    }
}

/**
 * Fired when a message is sent from either an extension process or a content script.
 */
chrome.runtime.onMessage.addListener(messagesFromReactAppListener);
