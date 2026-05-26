import { Stack } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
    return (
        <>
            <Stack.Screen options={{ headerShown: false }} />
            <View style={{ flex: 1, backgroundColor: "#F0F5FA", paddingTop: 50, paddingHorizontal: 16 }}>
                
                {/* Header */}
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    
                    {/* Círculo azul com letra P + texto */}
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                        <View style={{
                            backgroundColor: "#1A5CE5",
                            width: 42,
                            height: 42,
                            borderRadius: 21,
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>P</Text>
                        </View>
                        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#1A5CE5" }}>Produtividade</Text>
                    </View>

                    {/* Ícone de sino */}
                    <Text style={{ fontSize: 22 }}>🔔</Text>
                </View>

            </View>
        </>
    );
}