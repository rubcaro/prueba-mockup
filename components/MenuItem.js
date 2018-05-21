import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

const Item = () => (
	<View style={style.container}>
		<Image 
			source={require('./../assets/img/logo-banco-sangre.png')}
			style={style.img}
		/>
		<View>
			<Text style={style.title}>Banco Sangre</Text>
			<Text>Lorem ipsum dolor sit amet consectetur. sit amet consectetur.</Text>
		</View>
	</View>
)

const style = StyleSheet.create({
	style: {
		backgroundColor: 'white',
		flex: 1,
		flexDirection: 'row',
		maxHeight: 100,
		minHeight: 100,
		paddingVertical: 15,
		marginTop: 10
	},
	img: {
		width: 60,
		height: 60
	},
	title: {
		fontWeight: 'bold',
		fontSize: 20
	}
})

export default Item