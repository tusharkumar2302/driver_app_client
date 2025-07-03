import { StyleSheet } from 'react-native';
// import { COLORS, SPACING, BORDER_RADIUS, FONT_SIZES } from '../constants';
import { BORDER_RADIUS, SCREEN_WIDTH, SPACING } from '../constants/dimensions';
import { COLORS } from '../constants/colors';

export const GlobalStyles = StyleSheet.create({
  baseContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
  img: {
    width: SCREEN_WIDTH * 0.5,
    height: SCREEN_WIDTH * 0.5,
    resizeMode: 'contain',
  },
  // Layout

  header: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
  },
  header2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:"space-between",
    marginTop:12
  },
  flex: {
    flex: 1,
  },
  flexGrow: {
    flexGrow: 1,
  },
  row: {
    flexDirection: 'row',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },

  // Margins
  mbSm: {
    marginBottom: SPACING.sm,
  },
  mbMd: {
    marginBottom: SPACING.md,
  },
  mlSm: {
    marginLeft: SPACING.sm,
  },

  // Paddings
  pSm: {
    padding: SPACING.sm,
  },
  pMd: {
    padding: SPACING.md,
  },
  phMd: {
    paddingHorizontal: SPACING.md,
  },

  // Backgrounds
  bgPrimary: {
    backgroundColor: COLORS.primary,
  },
  bgWhite: {
    backgroundColor: COLORS.white,
  },

  // Text
  textCenter: {
    textAlign: 'center',
  },
  textBold: {
    fontWeight: 'bold',
  },
  textUppercase: {
    textTransform: 'uppercase',
  },

  // Borders
  border: {
    borderWidth: 1,
    borderColor: COLORS.borderLight,
  },
  roundedSm: {
    borderRadius: BORDER_RADIUS.sm,
  },

  // Shadows
  shadowSm: {
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  // Components
  button: {
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.md,
    borderRadius: BORDER_RADIUS.sm,
    backgroundColor: COLORS.primary,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '500',
  },
  line: {
    borderWidth: 0.2,
    borderColor: COLORS.borderLight,
  },
});
