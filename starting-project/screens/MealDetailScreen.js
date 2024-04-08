import { View, Text } from "react-native";

function MealDetailScreen({ route }) {
    const mealId = route.params.mealId;
    return <View>
        <Text>This the meal details screen ({mealId})</Text>
    </View>
}

export default MealDetailScreen;