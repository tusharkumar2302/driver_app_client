import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import { COLORS } from '../../constants/colors';
import { SCREEN_HEIGHT } from '../../constants/dimensions';

interface CustomBottomSheetProps {
  height?: number;
  children: React.ReactNode;
  backgroundColor?: string;
}

const CustomBottomSheet = forwardRef<any, CustomBottomSheetProps>(
  (
    {
      height = SCREEN_HEIGHT * 0.6,
      children,
      backgroundColor = COLORS.backgroundSecondary,
    },
    ref,
  ) => {
    const refRBSheet = useRef<any>(null);

    useImperativeHandle(ref, () => ({
      open: () => refRBSheet.current?.open(),
      close: () => refRBSheet.current?.close(),
    }));

    return (
      <RBSheet
        ref={refRBSheet}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: COLORS.textDisabled,
          },
          container: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: backgroundColor,
            height: height,
            marginBottom: 45,
            paddingHorizontal: 10,
          },
        }}
        customModalProps={{
          animationType: 'slide',
          statusBarTranslucent: true,
        }}
        customAvoidingViewProps={{
          enabled: false,
        }}
        draggable={true}
        dragOnContent={true}
      >
        <View style={styles.content}>{children}</View>
      </RBSheet>
    );
  },
);

const styles = StyleSheet.create({
  content: {
    flex: 1,
    width: '100%',
  },
});

export default CustomBottomSheet;
