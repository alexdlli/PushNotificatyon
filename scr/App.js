import { Notifyer} from './Notifyer.js' 

const App = {
    async start() {
        try {
           await Notifyer.init()
           Notifyer.notify({
               title: "Hora do Post",
               body: "So vamos"
           }) 
        } catch (err) {
            console.log(err.message)
        }
    }

}

export { App }