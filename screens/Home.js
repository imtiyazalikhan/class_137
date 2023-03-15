import React,{Component} from "react";
import { View,
     Text,
    FlatList,
    StyleSheet,
    Alert,
    SafeAreaView   

    } from "react-native";
    
import {ListItem}from "react-native-elements";
import Axios from "axios";

export default class HomeScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            listData:[],
            url:"https//localhost:5000/"
        };
    }

    componentDidMount(){
        this.getplanets();
        
    }

    getplanets = () =>{
        const{url} = this.state;
        Axios
        .get(url)
        .then(response  =>{
            return this.setState({
                listData:response.data.data
            });
        }) 
        .catch(error =>{
            alert.alert(error.messsage);
        });
     };

    renderItem = ({item,index})=>(
        <ListItem
        key = {index}
       title={`Planet : ${item.name}`}
       subtitle = {'dstance from earth : ${itmen.distance_from_earth}'}
       titlestyle = {Styles.title}
       containerstyle = {styles.listcontainer}
       bottomdivider
       onPress  = {()=>
    this.props.navigation.navigate("details",{planet_name:item.name})
    }
       />
    );
    keyExtractor = (item,index)=>index.toString();
    render(){
        const {listData} = this.state;

        if (listData.length === 0){
            return(
                <View style = {style.container}> 
                <FlatList 
                keyExtractor={this.keyExtractor}
                data = {this.state.listdata}
                render = {this.renderItem}
                
                
                ></FlatList>
                </View>
            )
        }
    }
    



}