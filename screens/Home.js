import { FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, dummyData, icons, image } from '../constants'
import { CategoryCard, TrendingCard } from '../components'
import { useNavigation } from '@react-navigation/native'

const Home = () => {

  const navigation = useNavigation()
  
  function renderHeader(){
    return(
      <View style={{
        flexDirection:"row",marginHorizontal:SIZES.padding,
        alignItems:"center", height:80
      }}>
        <View style={{flex:1}}>
          <Text style={{color:COLORS.darkGreen, ...FONTS.h2}}>Hello keYa,</Text>
          <Text style={{marginTop:3, color:COLORS.gray, ...FONTS.body3}}>What you want to cook today?</Text>
        </View>
        <TouchableOpacity>
          <Image source={image.profile} 
          style={{
            width:40,
            height:40,
            borderRadius:20
          }}/>
        </TouchableOpacity>
      </View>
    )
  }

  function renderSearchbar(){
    return(
      <View style={{
        flexDirection:"row",
        height:50,
        alignItems:"center",
        marginHorizontal:SIZES.padding,
        paddingHorizontal:SIZES.radius,
        borderRadius:10,
        backgroundColor:COLORS.lightGray
      }}>
        <Image source={icons.search} style={{width:20,height:20,tintColor:COLORS.gray}}/>
        <TextInput 
        style={{marginLeft:SIZES.radius, ...FONTS.body3, flex:1}} 
        placeholder='Search Recipes'
        placeholderTextColor={COLORS.gray}
        />
      </View>
    )
  }

  function renderRecipeCard(){
    return(
      <View style={{
        flexDirection:"row",
        marginTop:SIZES.padding,
        marginHorizontal:SIZES.padding,
        borderRadius:10,
        backgroundColor:COLORS.lightGreen,
      }}>
        <View style={{
          width:100,
          alignItems:'center',
          justifyContent:'center'
        }}>
          <Image source={image.recipe} 
          style={{
            width:80, height:80
          }}/>
        </View>
        <View style={{
          flex:1,
          paddingVertical:SIZES.radius
        }}>
          <Text style={{
            width:"70%",
            ...FONTS.body4
          }}>
            You have a 12 Recipes that you haven't tried yet.
          </Text>
          <TouchableOpacity style={{
            marginTop:10,
          }}>
            <Text style={{color:COLORS.darkGreen, textDecorationLine:"underline", ...FONTS.h4}}>See Recipes</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  function renderTrendingRecipe(){
    return(
      <View style={{
        marginTop:SIZES.padding
      }}>
        <Text style={{marginHorizontal:SIZES.padding, ...FONTS.h2}}>Trending Recipe</Text>
        <FlatList
        data={dummyData.trendingRecipes}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item)=>item.id.toString()}
        renderItem={({item,index})=>{
          return(
            <TrendingCard
            key={index}
            recipeItem={item}
            containerSTyle={{
              marginLeft:index===0 ? SIZES.padding : 0
            }}
            onPress={()=>navigation.navigate("Recipe", {recipe:item})}
            />
          )
        }}
        />
      </View>
    )
  }

  function renderCategory(){
    return(
      <View style={{
        flexDirection:"row",
        alignItems:"center",
        marginTop:20,
        marginHorizontal:SIZES.padding
      }}>
        <Text style={{flex:1,...FONTS.h2}}>Categories</Text>
        <TouchableOpacity>
          <Text style={{color:COLORS.gray, ...FONTS.body4}}>View all</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <SafeAreaView style={{flex:1, backgroundColor:COLORS.white}}>
      <FlatList
      data={dummyData.categories}
      keyExtractor={item=>item.id.toString()}
      keyboardDismissMode='on-drag'
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <View>
          {renderHeader()}
          {renderSearchbar()}
          {renderRecipeCard()}
          {renderTrendingRecipe()}
          {renderCategory()}
        </View>
      }
      renderItem={({item})=>{
        return(
          <CategoryCard
          categoryItem={item}
          containerStyle={{
            marginHorizontal: SIZES.padding
          }}
          onPress={()=>navigation.navigate("Recipe", {recipe:item})}
          />
        )
      }}
      ListFooterComponent={
        <View style={{marginBottom:50}}></View>
      }
      />
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})