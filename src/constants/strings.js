export const STRINGS = {
  // Keep existing common strings
  COMMON: {
    OK: 'OK',
    CANCEL: 'Cancel',
    YES: 'Yes',
    NO: 'No',
    SUBMIT: 'Submit',
    BACK: 'Back',
    NEXT: 'Next',
    DONE: 'Done',
    SEARCH: 'Search...',
    LOADING: 'Loading...',
  },
  
  ERRORS: {
    NETWORK_ERROR: 'Network error. Please check your connection.',
    SERVER_ERROR: 'Server error. Please try again later.',
    UNKNOWN_ERROR: 'Something went wrong.',
    REQUIRED_FIELD: 'This field is required',
    INVALID_EMAIL: 'Please enter a valid email',
    BOOKING_FAILED: 'Oops! Something went wrong! We encountered a technical error. Please try again in a minute.'
  },

  // Merge new auth strings
  AUTH: {
    LOGIN: {
      TITLE: 'Login to your Account',
      REMEMBER_ME: 'Remember me',
      FORGOT_PASSWORD: 'Forgot Password?',
      SOCIAL_LOGIN: 'Or continue with social account',
      NO_ACCOUNT: 'Don\'t have an account? Sign up'
    },
    SIGNUP: {
      TITLE: 'Create New Account',
      HAVE_ACCOUNT: 'Already have an account? Login'
    },
    FORGOT_PASSWORD: {
      TITLE: 'Forgot Password',
      SUBTITLE: 'Please enter your email address. We\'ll send you a link to regain access.',
      OTP_MESSAGE: 'We have sent the code verification to your email address',
      RESEND: 'Resend code in 55 sec'
    },
    RESET_PASSWORD: {
      TITLE: 'Create New Password',
      SUCCESS: 'Your password has been reset successfully.'
    }
  },

  // Add new profile strings
  PROFILE: {
    EDIT: {
      TITLE: 'Edit Profile',
      NAME: 'Name',
      EMAIL: 'Email',
      PHONE: 'Phone number',
      SAVE: 'Save'
    },
    DRIVER: {
      ABOUT: 'About',
      DESCRIPTION: 'I\'m a professional and punctual driver committed to providing safe and comfortable rides...',
      EXPERIENCE: 'Experience',
      LANGUAGE: 'Language',
      GENDER: 'Gender',
      AGE: 'Age'
    }
  },

  // Add ride-related strings
  RIDES: {
    BOOKING: {
      SELECT_LOCATION: 'Select pickup location',
      SELECT_SLOT: 'Select your slot',
      CHOOSE_DRIVER: 'Choose your driver',
      PAYMENT: 'Choose payment method',
      SUCCESS: 'Payment Successful',
      FAILURE: 'Payment Error'
    },
    CANCELLATION: {
      TITLE: 'Confirm cancellation?',
      MESSAGE: 'Your locking fee will not be refunded'
    }
  },

  // Keep existing home strings
  HOME: {
    TITLE: 'Home',
    WELCOME: 'Welcome back!',
  }
};