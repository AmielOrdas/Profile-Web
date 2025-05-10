import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Shared type for section state
type TSectionState = {
  isVisible: boolean;
};

// Qualifications slice
const qualificationsSlice = createSlice({
  name: "qualifications",
  initialState: { isVisible: true },
  reducers: {
    showQualifications(state, actions: PayloadAction<boolean>) {
      state.isVisible = actions.payload;
    },
  },
});

// Skills slice
const skillsSlice = createSlice({
  name: "skills",
  initialState: { isVisible: false },
  reducers: {
    showSkills(state: TSectionState, actions: PayloadAction<boolean>) {
      state.isVisible = actions.payload;
    },
  },
});

// Links & Contacts slice
const linksAndContactsSlice = createSlice({
  name: "linksAndContacts",
  initialState: { isVisible: false },
  reducers: {
    showLinksAndContacts(state: TSectionState, actions: PayloadAction<boolean>) {
      state.isVisible = actions.payload;
    },
  },
});

// Export actions
export const { showQualifications } = qualificationsSlice.actions;
export const { showSkills } = skillsSlice.actions;
export const { showLinksAndContacts } = linksAndContactsSlice.actions;

// Combine reducers
export const rootReducer = {
  qualifications: qualificationsSlice.reducer,
  skills: skillsSlice.reducer,
  linksAndContacts: linksAndContactsSlice.reducer,
};
