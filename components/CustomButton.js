import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { COLORS, FONTS } from '../constants'

const CustomButton = ({
    butttonText, buttonContainerStyle, colors, onPress
}) => {
  if(colors.length>0){
    return(
        <TouchableOpacity onPress={onPress}>
            <LinearGradient
            start={{x:0, y:0}}
            end={{x:1,y:1}}
            colors={colors}
            style={{...buttonContainerStyle}}
            >
                <Text style={{textAlign:"center", color:COLORS.white, ...FONTS.h3}}>{butttonText}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
  }
  return(
    <TouchableOpacity onPress={onPress} style={{...buttonContainerStyle}}>
            <Text style={{textAlign:"center", color:COLORS.white, ...FONTS.h3}}>{butttonText}</Text>
    </TouchableOpacity>
)
}

export default CustomButton

const styles = StyleSheet.create({})