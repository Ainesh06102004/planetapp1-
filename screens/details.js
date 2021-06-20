import react, * as React from "react"
import { Text, View, TouchableOpacity } from "react-native"

export default class Detailscreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: `http://localhost:5000/planet?name=${this.props.navigation.getParam("planet_name")}`,
            details: {},
            imagename: ''
        }
    }

    componentDidMount() {
        this.getplanets()
    }

    getplanets = () => {
        const { url } = this.state
        axios.get(url).then(response => {
            this.setdetails(response.data.data)
        }).catch(error => {
            Alert.alert(error.message)
        })
    }

    setdetails = (planetdetails) => {
        const planettype = planetdetails.planet_type
        imagepath = ''
        switch (planettype) {
            case "Gas Giant":
                imagepath = require("assets\gas_giant.png")
                break;
            case "Terrestrial":
                imagepath = require("assets\terrestrial.png")
                break;
            case "Super Earth":
                imagepath = require("assets\super_earth.png")
                break;
            case "Neptune-like":
                imagepath = require("assets\neptune_like.png")
                break;
            default:
                imagepath = require("assets\gas_giant.png")
        }

        this.setState({
            imagename: imagepath,
            details: planetdetails
        })
    }

    render() {
        return (
            <View>
                <Text>detailscreen</Text>
            </View>
        )
    }
}