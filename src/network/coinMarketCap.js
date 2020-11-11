import firebase from "gatsby-plugin-firebase";

export function InitCoinMarketCap() {
    const callableReturnMessage = firebase.functions().httpsCallable('initCoinMarketCap');
    callableReturnMessage().then((res) => {
        console.log("res from firebase", res)
    })
    // callableReturnMessage().then((res) => {
    //     console.log("this is a firebase")
    //     return res.status(200).json()
    // })

}
