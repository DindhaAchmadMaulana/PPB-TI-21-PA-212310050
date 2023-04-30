import React, { useState, useEffect} from "react";
import {View, Text, StatusBar, Image } from 'react-native';

export default function App () {
  return (
  <View style={{flex: 1}}>
    <StatusBar barStyle={'light-content'} backgroundColor='##212121'> </StatusBar>
     style={{width: 100, height: 100, borderRadius: 100 / 2, marginTop:50}} />
      <Text style={{marginTop: 15, fontSize: 22, fontWeight: 'bold', padding: 10, color: 'black'}}>DINDHA ACHMAD MAULANA</Text>
      }} />

        <Image source={{uri: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'}} style={{
          width:40, height:40,}} />

     </View>

     </View>
    </View>
  );
};
