import React from "react";
import { View, Text, StyleSheet } from 'react-native'
import Theme from "./Theme";
type Props = React.ComponentProps<typeof View> & {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
};
const Container = ({ children, style }: Props) => (
    <View style={[{ flex: 1, backgroundColor: Theme.colors.background, color: Theme.colors.textColor, paddingHorizontal: 20 }]}>
        {children}
    </View>
);




export default Container;