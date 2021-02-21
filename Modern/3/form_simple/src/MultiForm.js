import React, {Component} from 'react'

class MultiForm extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            name: '윤인성',
            age: 25,
            hobby: '독서'
        }
    }

    doChange(e) {
        const key       = e.target.name
        const userValue = e.target.value

        this.setState({[key]: userValue})
    }

    doSubmit(e) {
        const j = JSON.stringify(this.state)
        window.alert(j)
        e.preventDevault() 
    }

    render() {
        const doChange = (e) => this.doChange(e)
        const doSubmit = (e) => this.doSubmit(e)

        return (
            <form onSubmit={doSubmit}> 
                <div>
                    <label>
                        이름: <br/>
                        <input name='name' type='text' value={this.state.name} onChange={doChange}/>
                    </label>
                </div>
                <div>
                <label>
                        나이: <br/>
                        <input name='age' type='number' value={this.state.age} onChange={doChange}/>
                    </label>
                </div>
                <div>
                    <label>
                        취미: <br/>
                        <input name='hobby' type='text' value={this.state.hobby} onChange={doChange}/>
                    </label>
                </div>
                <input type='submit' value='전송'/>
            </form>
        )
    }

}

export default MultiForm