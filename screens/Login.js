import { ImageBackground, StatusBar, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, image } from '../constants'
import LinearGradient from 'react-native-linear-gradient'
import { CustomButton } from '../components'
import { useNavigation } from '@react-navigation/native'

const Login = () => {

  const navigation =useNavigation()

  function renderHeader(){
    return(
      <View style={{height: SIZES.height > 700 ? "65%" : "60%"}}>
      <ImageBackground source={image.loginBackground}
       style={{flex:1,justifyContent:"flex-end"}}
       resizeMode='cover'
       >
        <LinearGradient start={{x:0, y:0}} end={{x:0, y:1}} 
        colors={[COLORS.transparent,COLORS.black]}
        style={{height:200, justifyContent:"flex-end", paddingHorizontal:SIZES.padding}}
        >
          <Text style={{width:"80%", color:COLORS.white, ...FONTS.largeTitle, lineHeight:45}}>Cooking a Delicious Food Easily</Text>
        </LinearGradient>
       </ImageBackground>
      </View>
    )
  }

  function renderDetails() {
    return(
      <View style={{flex:1, paddingHorizontal:SIZES.padding}}>
        <Text style={{marginTop:SIZES.radius, width:"70%",color:COLORS.gray, ...FONTS.body3}}>
          Discover more than 1200 food recipes in your hands and cooking it easyly
        </Text>
        <View>
          <CustomButton 
          butttonText="Login"
          colors={[COLORS.darkGreen, COLORS.lime]}
          buttonContainerStyle={{
            paddingVertical:18,
            borderRadius:20,
            marginTop:SIZES.radius
          }}
          onPress={()=>navigation.navigate('Home')}
          />
          <CustomButton 
          butttonText="SignUp"
          colors={[]}
          buttonContainerStyle={{
            paddingVertical:18,
            borderRadius:20,
            marginTop:SIZES.radius,
            borderColor:COLORS.darkLime,
            borderWidth:1
          }}
          onPress={()=>navigation.navigate('Home')}
          />
        </View>
      </View>
    )
  }


  return (
    <View style={{flex:1, backgroundColor:COLORS.black}}>
      <StatusBar barStyle="light-content"/>
      {renderHeader()}
      {renderDetails()}
    </View>
  )
}

export default Login
