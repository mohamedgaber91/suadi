
export const config = {
    endpoint: process.env.REACT_APP_WS_URL,
    SocketConstructor: WebSocket,
    clearDataOnReconnection: false,
};

// export const betaConfig = {
//     endpoint: REACT_APP_WS_URL,
//     clearDataOnReconnection: false,
//     autoConnect: true,
//     reconnectInterval: 500,
// };