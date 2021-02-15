import react, {Component} from 'react'
//import './Stopwatch.css'

class Stopwatch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLive: false,
            curTime: 0,
            startTime: 0
        }

        this.timeId = 0
    }

    componentWillMount() {
        this.timeId = setInterval((e) => {
            this.tick()
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timeId)
    }

    tick() {
        if(this.state.isLive) {
            const v = new Date().getTime()
            this.setState({curTime: v})
        }
    }

    getDisp() {
        const s     = this.state
        const delta = s.curTime - s.startTime
        const t     = Math.floor(delta/1000)
        const ss    = t%60
        const m     = Math.floor(t/60)
        const mm    = m%60
        const h     = Math.floor(m/60)
        const hh    = h%60
        const z     = (num) => {
            const s = '00' + num
            return s.substr(s.length-2, 2)
        }
        return (
            <span class='disp'>
                {z(hh)} : {z(mm)} : {z(ss)}
            </span>
        )
    }

    clickHandler(e) {
        if(this.state.isLive) {
            this.setState({isLive: false})
            return
        }

        const v = new Date().getTime()
        this.setState({
            curTime: v,
            startTime: v,
            isLive: true
        })
    }

    render() {
        let label = 'START'
        if(this.state.isLive) label = 'STOP'
        
        const disp   = this.getDisp()
        const fclick = (e) => this.clickHandler(e) 
        return (
            <div className='Stopwatch'>
                <div>{disp}</div>
                <button onClick={fclick}>{label}</button>
            </div>
        )
    }
}

export default Stopwatch