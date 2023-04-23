import { View, Text } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'

export const PlantTrivia = ({}) => {
    return (
        <Swiper autoplay height={200} activeDotColor="white" removeClippedSubviews={false}>
        <View styles={styles.slide}>
            <ImageBackground
                source={require('../assets/images/banners/plant-banner1.jpg')}
                resizeMode="cover"
                style={styles.sliderImage}
                imageStyle={{borderRadius:10}}
            >
            <Text style={{color:'white'}}>PLANTS ARE NICE</Text>
            </ImageBackground>           
        </View>

        <View styles={styles.slide}>
            <ImageBackground
                source={require('../assets/images/banners/plant-banner2.jpg')}
                resizeMode="cover"
                style={styles.sliderImage}
                imageStyle={{borderRadius:10}}
            >
            <Text style={{color:'white'}}>There are over 200,000 identified plant species and the list is growing all the time. 90 percent of the foods humans eat come from just 30 plants. An average size tree can provide enough wood to make 170,100 pencils.</Text>
            </ImageBackground>           
        </View>

        <View styles={styles.slide}>
            <ImageBackground
                source={require('../assets/images/banners/plant-banner3.jpg')}
                resizeMode="cover"
                style={styles.sliderImage}
                imageStyle={{borderRadius:10}}
            >
            <Text style={{color:'white'}}>sample text</Text>
            </ImageBackground>           
        </View>

        <View styles={styles.slide}>
            <ImageBackground
                source={require('../assets/images/banners/plant-banner4.jpg')}
                resizeMode="cover"
                style={styles.sliderImage}
                imageStyle={{borderRadius:10}}
            >
            <Text style={{color:'white'}}>sample text</Text>
            </ImageBackground>           
        </View>

        <View styles={styles.slide}>
            <ImageBackground
                source={require('../assets/images/banners/plant-banner5.jpg')}
                resizeMode="cover"
                style={styles.sliderImage}
                imageStyle={{borderRadius:10}}
            >
            <Text style={{color:'white'}}>sample text</Text>
            </ImageBackground>           
        </View>

        <View styles={styles.slide}>
            <ImageBackground
                source={require('../assets/images/banners/plant-banner6.jpg')}
                resizeMode="cover"
                style={styles.sliderImage}
                imageStyle={{borderRadius:10}}
            >
            <Text style={{color:'white'}}>Some Plants help with Skincare</Text>
            </ImageBackground>           
        </View>
    </Swiper>
    )
}