import axios from "axios"
import react, * as React from "react"
import { Text, View, TouchableOpacity, FlatList, StyleSheet, SafeAreaView, Alert } from "react-native"
import { ListItem } from "react-native-elements/dist/list/ListItem"
import axios from axios

export default class Homescreen extends React.Component {
    constructor() {
        super();
        this.state = {
            listdata: [],
            url: "http://localhost:5000/"
        }
    }

    componentDidMount() {
        this.getplanets()
    }

    getplanets = () => {
        const { url } = this.state
        axios.get(url).then(response => {
            return this.setState({
                listdata: response.data.data
            })
        }).catch(error => {
            Alert.alert(error.message)
        })
    }

    keyExtractor = (item, index) => index.toString()

    renderItem = ({item, index}) => (
        <ListItem 
            key = {index}
            title = {`Planet:${item.name}`}
            subtitle = {`distance from teh earth:${item.distance_from_earth}`}
            bottomDivider = {true}
            onPress = {()=>{
                this.props.navigation.navigate('Details', {planet_name: item.name})
            }}
        />
    )

    render() {
        const { listdata } = this.state
        if (listdata.length == 0) {
            return (
                <View>
                    <Text>
                        Loading...
                    </Text>
                </View>
            )
        }
        else {
            return (
                <View>
                    <SafeAreaView>
                        <Text>
                            Planets world
                        </Text>
                        <View>
                            <FlatList
                                data={this.state.listdata}
                                renderItem={this.renderItem}
                                keyExtractor={this.keyExtractor}
                            />
                        </View>
                    </SafeAreaView>
                </View>
            )
        }
    }
}