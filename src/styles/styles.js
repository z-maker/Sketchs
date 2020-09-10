import { StyleSheet } from "react-native";
import * as Typography from './typography';
import * as Colors from './colors';

const Styles = StyleSheet.create({
    viewcontainer: {
        flex: 1,
        backgroundColor: Colors.BACKGROUND_LIGHT,
        width: "100%"
    },
    viewBodyContainer: {
        flex: 1,
        paddingHorizontal: "5%",
        
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: "100%"
    },
    viewBodyContainerCenter: {
        flex: 1,
        paddingHorizontal: "5%",
        paddingVertical: 8,
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%"
    },
    viewBodyContainerCenterAlignEnd: {
        flex: 1,
        paddingHorizontal: "5%",
        paddingVertical: 8,
        justifyContent: "flex-end",
        alignItems: "flex-start",
        width: "100%"
    },
    row: {
        flex: 1,
        flexDirection: "row",
        marginVertical: 8,
        alignItems: "center",
        width: "100%"
    },
    formRow: {
        marginVertical: 8,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%"

    },
    textTitleLeft: {
        color: Colors.primary,
        textAlign: "left",
        alignSelf: "flex-start"
    },
    textTitleRight: {
        color: Colors.primary,
        alignSelf: "flex-end"
    },
    textTitleCenter: {
        color: Colors.primary,
        alignSelf: "center"
    },
    textSecondaryLeft: {
        fontSize: 24,
        alignSelf: "flex-start"
    },
    textSecondaryRight: {
        fontSize: 24,
        alignSelf: "flex-end"
    },
    textSecondaryCenter: {
        fontSize: 24,
        alignSelf: "center"
    },

    primaryTextLeft: {
        color: Colors.primary,
        textAlign: "left",
        alignSelf: "flex-start"

    },
    inputTextLabelStyle: {
        fontSize: Typography.FONT_SIZE_H1,
        color: Colors.primary
    },
    btnPrimary: {
        backgroundColor: Colors.accent
    },
    btnTitleStyle: {
        fontSize: 30,
    },
    btnTitleDark: {
        fontSize: 30,
        color: Colors.accent
    },

    divider: {
        width: "100%",
        height: 5,
        backgroundColor: Colors.primary
    },
    drawerItemContainer: {
        height: 60,
        justifyContent: "center"
    },
    drawerItem: {
        fontFamily: Typography.FONT_FAMILY_REGULAR,
        fontSize: 18,
        color: Colors.PRIMARY_DARK,
    },
    drawerItemIcon: {
        color: Colors.PRIMARY ,
        fontSize: 25,
        textAlign: "center",
    },

})


export default Styles;