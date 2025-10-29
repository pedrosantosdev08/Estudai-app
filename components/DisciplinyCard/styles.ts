import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        color: "#6200ee",
        height: 300,
    },
    barButton: {
        flex: 1,
        marginHorizontal: 4,
    },
    bottomBar: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 12,
        borderTopWidth: 1,
        borderColor: "#ccc",
        backgroundColor: "#f9f9f9",
    },
    button: {
        marginTop: 8,
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: 12,
        marginBottom: 16,
        padding: 16,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 5 },
        elevation: 5,
    },
    confirmationBox: {
        marginTop: 16,
        padding: 12,
        backgroundColor: "#ffe6e6",
        borderRadius: 8,
        borderColor: "#ff4d4d",
        borderWidth: 1,
    },
    container: {
        flex: 1,
        backgroundColor: "#f2f2f2",
    },
    fab: {
        position: "absolute",
        right: 16,
        bottom: 16,
        backgroundColor: "#6200ee",
    },
    header: {
        backgroundColor: "#f2f2f2",
    },
    highlight: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#6200ee",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 12,
        borderRadius: 8,
        marginBottom: 12,
    },
    itemRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 8,
    },
    MateriaCard: {
        marginTop: 16,
    },
    modalWrapper: {
        flex: 1,
        justifyContent: "space-between",
    },
    modalContent: {
        padding: 16,
        paddingBottom: 80,
    },
    manageCard: {
        position: "absolute",
        bottom: 70,
        left: 16,
        right: 16,
        backgroundColor: "#fff",
        elevation: 4,
        borderRadius: 8,
        paddingVertical: 8,
    },
    manageButton: {
        marginVertical: 4,
    },
    outsideButton: {
        marginBottom: 16,
    },
    preview: {
        width: "100%",
        height: 200,
        marginTop: 8,
        borderRadius: 8,
    },
    scrollContent: {
        padding: 16,
        paddingBottom: 80,
    },
    textActions: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 8,
    },
    textButton: {
        flex: 1,
        marginHorizontal: 4,
    },
    textInput: {
        minHeight: 60,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 6,
        padding: 8,
        backgroundColor: "#fff",
    },
    textInputWrapper: {
        marginVertical: 12,
        padding: 8,
        backgroundColor: "#f5f5f5",
        borderRadius: 8,
    },
});

export default styles;