import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
    showSkills(state, actions: PayloadAction<boolean>) {
      state.isVisible = actions.payload;
    },
  },
});

// Links & Contacts slice
const linksAndContactsSlice = createSlice({
  name: "linksAndContacts",
  initialState: { isVisible: false },
  reducers: {
    showLinksAndContacts(state, actions: PayloadAction<boolean>) {
      state.isVisible = actions.payload;
    },
  },
});

const HomeSlice = createSlice({
  name: "Home",
  initialState: { isVisible: false },
  reducers: {
    showHome(state, actions: PayloadAction<boolean>) {
      state.isVisible = actions.payload;
    },
  },
});

const thesisSlice = createSlice({
  name: "Thesis",
  initialState: { isVisible: false },
  reducers: {
    showThesis(state, actions: PayloadAction<boolean>) {
      state.isVisible = actions.payload;
    },
  },
});

const projectsSlice = createSlice({
  name: "projects",
  initialState: { isVisible: false, nextJSVisible: false },
  reducers: {
    showProjects(state, actions: PayloadAction<boolean>) {
      state.isVisible = actions.payload;
    },
    showNextJS(state, actions: PayloadAction<boolean>) {
      state.nextJSVisible = actions.payload;
    },
  },
});

// Export actions
export const { showQualifications } = qualificationsSlice.actions;
export const { showSkills } = skillsSlice.actions;
export const { showLinksAndContacts } = linksAndContactsSlice.actions;
export const { showHome } = HomeSlice.actions;
export const { showThesis } = thesisSlice.actions;
export const { showProjects, showNextJS } = projectsSlice.actions;

// Combine reducers
export const rootReducer = {
  qualifications: qualificationsSlice.reducer,
  skills: skillsSlice.reducer,
  linksAndContacts: linksAndContactsSlice.reducer,
  home: HomeSlice.reducer,
  thesis: thesisSlice.reducer,
  projects: projectsSlice.reducer,
};
