* Utilisation de React Navigation : 

Dans le fichier App.js, vous pouvez Stacker plusieurs pages, c'est-à-dire les configurer auprès de React Navigation :
<pre>
    import 'react-native-gesture-handler';
    import * as React from 'react';
    import { NavigationContainer } from '@react-navigation/native';
    import { createStackNavigator } from '@react-navigation/stack';
    
    // pages
    import start from './src/screens/start/index';
    import home from './src/screens/home/index';
    
    const Stack = createStackNavigator() ;
    
    export default function App() {
      return (
        <NavigationContainer>
            < Stack.Navigator
                    initialRouteName={'Start'}
                    screenOptions={{
                        headerShown: false
                    }}
                >
                    < Stack.Screen name={'start'} component={start} />
                    < Stack.Screen name={'home'} component={home} />
            </Stack.Navigator>
        </NavigationContainer>
      );
    }
</pre>


A partir de là, dans n'importe quelle page, vous pouvez rediriger l'utilisateur vers n'importe quelle autre : 

<pre>navigation.navigate('books');</pre>

Vous pourrez également passer des variables : 

<pre>navigation.navigate('book', { item })}</pre>

Que vous pouvez récupéer sur la page concernant via la navigation : 

<pre>
    export default function book({route, navigation}) {
    const { item } = route.params ;
</pre>

* Usage des composants 

React Native est base sur une multitude de composant, hybrides, qui sont compilés sous forme natifs en iOS (Objective-C ou Swift) et en Android (Java, Kotlin) par React Native. 
Si vous utilisez le même bout de code front à plusieurs endroits dans l'app, il est intéressant d'en faire un composant. 

Prenons par exemple un header que vous utilisez sur plusieurs pages (voire toutes) de votre application. Il est intéressant d'en faire un composant : 

<pre>
    import { StatusBar } from 'expo-status-bar';
    import React  from 'react';
    import {View, Text} from "react-native";
    
    export default function Header() {
        return (
            <View><Text>Mon header</Text></View>
        );
    }
</pre>

Et de l'utilisez sur vos pages : 

<pre>
    < Header />
</pre>

Chaque composant a (ou peut avoir) ses propres styles, ses propres méthodes, ses propres attributs. Par exemple si vous voulez modifier le bouton de base et l'avoir à l'identique sur toute l'app, vous pouvez utiliser votre propre composant : 

<pre>
    export default function MyButton(props) {
        return (
            <Button title={props.title} onPress={props.onPress}/>
        );
    }
</pre>

Ici, on fait passer des attributs au composant, qu'il récupère via les props. Aussi au lieu de faire 

<pre>
    < Button
        title="Retour au début"
        onPress={() => navigation.navigate('start')}
      />
</pre>

Vous pouvez faire : 

<pre>
    < MyButton
        title="Retour au début"
        onPress={() => navigation.navigate('start')}
      />
</pre>

Et mettre dans le fichier de votre composant, vos propres styles pour les applications automatiquement sur toute l'app. 

Les modules de React Native s'utilisent comme des composants ou des API a vous. Il suffit de les installer via la commande : 

<pre>npm install --save XXX</pre>

Et de les utiliser dans votre code via les ligens de codes fournies dans les documentations. 
