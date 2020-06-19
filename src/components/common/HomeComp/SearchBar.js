import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Dimensions
} from 'react-native';
import { SearchBar } from 'react-native-elements';

export default class Search extends Component {
    state = {
        search: '',
    };
    updateSearch = search => {
        this.setState({ search });
    };
    render() {
        return (
            <View style={styles.container} >
                <SearchBar
                    containerStyle={[ styles.SearchContainer, { width: this.props.length || Dimensions.get('window').width * 0.9 } ]}
                    searchIcon={{
                        size: 25,
                        backgroundColor: '#ffffff'
                    }}
                    inputStyle={{
                        borderLeftWidth: 3,
                        borderLeftColor: '#bdbdbd',
                        backgroundColor: '#ffffff',
                        paddingLeft: 15,
                        marginTop: 5
                    }}
                    inputContainerStyle={{
                        backgroundColor: '#ffffff',
                        height: 30
                    }}
                    placeholder={this.props.placeholder}
                    onChangeText={this.updateSearch}
                    value={this.state.search} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 20
    },

    SearchContainer: {
        height: 45,
        backgroundColor: '#ffffff',
        borderTopWidth: 0,
        borderBottomWidth: 0,
        elevation: 30,
        borderRadius: 8
    },
});
