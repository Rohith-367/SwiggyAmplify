import React from 'react';
import { images, COLORS, SIZES } from '../constants'
import {
    View,
    TouchableOpacity,
    Image,
    StyleSheet,
    Platform,
    Dimensions
} from 'react-native';
import Carousel from 'react-native-banner-carousel';

const Slider=()=>{

  const BannerWidth = Dimensions.get('window').width;

  const imageData = [
    {
      imgUrl: images.banner2
    },
    {
      imgUrl: images.banner3
    },
    {
      imgUrl: images.banner2
    },
    {
      imgUrl: images.banner3
    }
  ]

  function renderPage(image, index) {
    return (
        <View key={index} style={{paddingHorizontal:SIZES.paddingText*8,borderRadius:10}}>
              <Image 
                style={{  height: 160,borderRadius:10 }} 
                source={image.imgUrl}
                resizeMode="cover"
              />
        </View>
    );
  }

  return(
      <View style={styles.container}>
        <Carousel
            autoplay
            autoplayTimeout={5000}
            loop
            index={0}
            pageSize={BannerWidth}
            activePageIndicatorStyle={{backgroundColor:COLORS.primary}}
            pageIndicatorStyle={{backgroundColor:COLORS.secondary}}
        >
            {imageData.map((image, index) => renderPage(image, index))}
        </Carousel>
      </View>
  )
       
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  });
  

export default Slider;