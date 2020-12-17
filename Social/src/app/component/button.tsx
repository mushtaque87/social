import {
    brandColors,
    colors,
    gap,
    rem,
    stateColors,
    touchableStyle
} from "./common-styles";
import Icon from "./icon";
import Loader from "./loader";
import Text from "./text";
import Touchable from "./touchable";
import React, { Fragment } from "react";
import { InjectedIntlProps, injectIntl } from "react-intl";
import {
    AccessibilityTrait,
    Platform,
    StyleProp,
    StyleSheet,
    TextStyle,
    View,
    ViewStyle
} from "react-native";
import IconName from "utils/icon-name";
import MsgId from "utils/msg-id";

interface IButtonProps {
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    iconName?: IconName;
    msgId: MsgId;
    secondary?: boolean;
    disabled?: boolean;
    loading?: boolean;
    color?: string;
    accessibilityLabel?: string;
    testID?: string;
    raised?: boolean;
    onPress?(): void;
}

class Button extends React.PureComponent<IButtonProps & InjectedIntlProps> {
    public static defaultProps = {
        raised: Platform.select({
            android: true
        })
    } as IButtonProps;

    public render() {
        const {
            style,
            textStyle,
            accessibilityLabel,
            color,
            onPress,
            msgId,
            secondary,
            disabled,
            loading,
            intl,
            testID,
            iconName,
            raised,
            values
        } = this.props;
        const buttonStyles: any[] = [styles.button, secondary ? styles.secondary : undefined, style];
        const textStyles: any[] = [styles.text, textStyle];

        if (!raised) {
            buttonStyles.push(styles.buttonNotRaised);
            textStyles.push(styles.textNotRaised);
        }

        if (color) {
            if (Platform.OS === "ios") {
                textStyles.push({ color });
            } else {
                buttonStyles.push({ backgroundColor: color });
            }
        }

        const accessibilityTraits: AccessibilityTrait[] = ["button"];

        if (disabled) {
            buttonStyles.push(styles.buttonDisabled);
            textStyles.push(styles.textDisabled);
            accessibilityTraits.push("disabled");
        }

        const title = intl.formatMessage({ id: msgId }, { ...values });
        const formattedTitle =
            Platform.OS === "android" ? title.toUpperCase() : title.toUpperCase();
        let content;

        if (loading) {
            const loaderColor = Platform.OS === "android" ? brandColors.petrol : undefined;
            content = <Loader color={loaderColor} />;
        } else {
            content = (
                <Fragment>
                    {iconName &&
                    <Icon
                        name={iconName}
                        color={brandColors.petrol}
                        size={20}
                        style={{marginRight: 10, marginTop: 2}}
                    />
                    }
                    <Text style={textStyles}>{formattedTitle}</Text>
                </Fragment>
            );
        }

        return (
            <Touchable
                accessibilityComponentType="button"
                accessibilityLabel={accessibilityLabel}
                accessibilityTraits={accessibilityTraits}
                testID={testID}
                disabled={disabled || loading}
                onPress={onPress}
            >
                <View style={buttonStyles}>{content}</View>
            </Touchable>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        alignSelf: 'stretch',
        flexDirection: "row",
        justifyContent: "center",
        minHeight: touchableStyle.minHeight,
        minWidth: rem(6.4),
        paddingLeft: gap.double,
        paddingRight: gap.double,
        ...Platform.select({
            android: {
                backgroundColor: stateColors.active,
                borderRadius: 4,
                elevation: 0
            },
            ios: {
                backgroundColor: stateColors.active,
                borderRadius: 4,
                elevation: 0
            }
        })
    },
    buttonDisabled: Platform.select({
        android: {
            backgroundColor: stateColors.disabled,
            elevation: 0
        },
        ios: {
            backgroundColor: stateColors.disabled,
            elevation: 0
        }
    }),
    buttonNotRaised: Platform.select({
        android: {
            backgroundColor: "transparent",
            elevation: 0
        },
        ios: {}
    }),
    secondary: {
        backgroundColor: colors.white,
        borderColor: brandColors.petrol,
        borderRadius: 4,
        borderWidth: 1,
    },
    text: {
        color: brandColors.petrol,
        fontFamily: "Dubai",
        fontSize: 16,
        fontWeight: "400",
        letterSpacing: 0,
        textAlign: "center"
    } as TextStyle,
    textDisabled: Platform.select({
        android: {
            color: brandColors.petrol
        },
        ios: {
            color: brandColors.petrol
        }
    }),
    textNotRaised: Platform.select({
        android: {
            color: stateColors.active
        },
        ios: {}
    })
});

export { IButtonProps };
export default injectIntl(Button);
